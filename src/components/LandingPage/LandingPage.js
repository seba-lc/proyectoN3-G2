import "./LandingPage.css";
import { Fragment } from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";

const LandingPage = () => {
  return (
    <Fragment>
      <SectionOne/>
      <SectionTwo/>   
      <SectionThree/>
    </Fragment>
  );
};

export default LandingPage;
