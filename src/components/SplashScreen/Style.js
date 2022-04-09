import styled from "styled-components";
import fruits from "./../../images/fruits.png";
import stars from "./../../images/stars.png";

const StyledSplashScreen = styled.div`
  background-image: url(${fruits}), url(${stars}),
    linear-gradient(205deg, #ff0036 0%, #ff6787 100%);
  height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;

  background-repeat: no-repeat;
  background-position: bottom -15px right -50px, center, center;
  background-size: 273px auto, 64px auto, cover;

  .title {
    font-family: "Jokerman", cursive;
    color: #ffffff;
    text-shadow: 0px 22px 16px #0000004f;
    font-size: 32px;
    text-align: center;
    position: absolute;
    top: 20vh;
    width: 100%;
  }
`;

export { StyledSplashScreen };
