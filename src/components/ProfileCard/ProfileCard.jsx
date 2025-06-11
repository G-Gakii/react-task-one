import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, about, image }) => {
  return (
    <div>
      <img src={image} alt="Gakii" width={200} height={200} />
      <h1>{name}</h1>
      <p> {about}</p>
    </div>
  );
};

export default ProfileCard;
