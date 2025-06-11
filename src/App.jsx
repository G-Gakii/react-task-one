import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import GakiiImage from "./assets/Gakii.jpeg";

const App = () => {
  let name = "Gakii Violet";

  let about = `A nature-loving coder with a flair for turning ideas into beautifully
        crafted web experiences. Whether it’s styling with CSS or bringing
        interactivity to life with JavaScript, I blend creativity and logic to
        build digital magic. Currently diving deep into React because learning
        never stops when you're building the future, one pixel at a time.`;
  return (
    <div>
      <ProfileCard name={name} image={GakiiImage} about={about} />
    </div>
  );
};

export default App;
