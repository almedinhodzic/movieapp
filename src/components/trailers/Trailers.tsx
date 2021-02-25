import React from "react";
import { TrailerResults } from "../../store/actions/movieTypes";
import "./Trailers.scss";

type Props = {
  results: TrailerResults[];
  heading: string;
};

const Trailers: React.FC<Props> = ({ results, heading }: Props) => {
  return (
    <div className="trailers-section">
      <h3 className="trailers-section-heading">{heading}</h3>
      <div className="trailers-section-videos">
        {results.map((item) => {
          return (
            <iframe
              key={item.key}
              className="trailers-section-videos__video"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Trailer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trailers;
