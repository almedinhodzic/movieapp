import React, { useRef } from "react";
import "./ActorBackground.scss";
import moment from "moment";

type Props = {
  profileImage: string | null;
  backgroundImage: string | null;
  birthday: string;
  deathday: string | null;
  name: string;
  department: string;
};

const ActorBackground: React.FC<Props> = ({
  profileImage,
  backgroundImage,
  birthday,
  deathday,
  name,
  department,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToContent = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const currentDate: Date = new Date();
  const today = moment(currentDate);
  const birthdayMoment = moment(birthday);

  return (
    <div
      className="actor-section"
      ref={ref}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${backgroundImage}") no-repeat`,
      }}
    >
      <button
        className="actor-section-btn"
        type="button"
        onClick={scrollToContent}
      >
        <i className="fas fa-chevron-down actor-section-btn__icon" />
      </button>
      <div className="actor-section-poster">
        <img
          src={`https://image.tmdb.org/t/p/w185${profileImage}`}
          className="actor-section-poster__image"
          alt=""
        />
        <div className="actor-section-poster-content">
          <h1 className="actor-section-poster-content__heading">{name}</h1>
          <p className="actor-section-poster-content__info">
            {moment(birthday).format("DD-MM-YYYY")} |{" "}
            {deathday
              ? moment(deathday).format("DD-MM-YYYY")
              : `${today.diff(birthdayMoment, "years")} years old`}
          </p>
          <p>{department}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorBackground;
