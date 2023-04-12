import React, { useState } from "react";
import AboutImg from "../../assets/aboutOne.jpeg";
import style from "./About.module.css";
import PhoneIcon from "@mui/icons-material/Phone";

const About = () => {
  const [reservation, setReservation] = useState(false);

  const toggleReservation = () => {
    setReservation((prevState) => !prevState);
  };

  return (
    <div className={style.AboutWrapper}>
      <div className={style.InfoOneContainer}>
        <div className={style.TextOneContainer}>
          <div className={style.TextInfoContainer}>
            <h2>ABOUT US</h2>
            <p>
              Ame Agaru is a charming Japanese restaurant situated in the
              bustling city of Buenos Aires, Argentina. The restaurant is the
              brainchild of the acclaimed Chef Takashi Miike, who has crafted a
              menu that showcases the best of traditional Japanese cuisine with
              a modern twist.
              <br /> <br /> At Ame Agaru, you'll be greeted with warm
              hospitality and a friendly atmosphere that makes you feel right at
              home. The restaurant's cozy interior is adorned with Japanese
              decor, transporting you to the heart of Japan. Whether you're
              craving delicious sushi rolls or savory ramen bowls, Ame Agaru's
              menu has something for everyone. Come and experience the culinary
              delights of Chef Takashi Miike at Ame Agaru – a must-visit for any
              foodie in Buenos Aires!
            </p>
          </div>
        </div>
        <div className={style.ImgOneContainer}></div>
      </div>

      <div className={style.InfoOneContainer}>
        <div className={style.ImgTwoContainer}></div>
        <div className={style.TextTwoContainer}>
          <div className={style.TextInfoLocation}>
            <h2>LOCATION</h2>
            <p>Piedras 1377,</p>
            <p>Ciudad Autónoma de Buenos Aires,</p>
            <p>Buenos Aires, Argentina</p>
          </div>
          <div className={style.TextInfoOpening}>
            <h2>OPENING HOURS</h2>
            <p>
              LUNCH <br />
              <br />
              Saturday and Sunday <br />
              Reservations from 12pm to 1.30pm <br />
              <br />
              DINNER <br />
              Thursday to Sunday <br />
              Reservations from 6pm to 8.45pm
            </p>
          </div>
          <div className={style.buttonTelephone}>
            <button onClick={toggleReservation}>Reservations</button>
            {reservation && (
              <div className={style.phone}>
                <PhoneIcon /> <p>+54 911 31376987</p>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
