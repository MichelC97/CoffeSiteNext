import React, { useState, useEffect } from "react";
import {
  ContainerDiv,
  CoursesTitle,
  CParagraphL,
  CParagraphR,
  CoursesPositionContainer,
  CSeparation,
  CoursesLText,
  CoursesRText,
  ButtonC,
  ButtonTextC,
} from "./components.styles";

const CoursesBanner = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth < 768) {
    // Mobile
    return (
      <ContainerDiv>
        <CoursesTitle>
          Fuel your coffee career with our expert courses.
        </CoursesTitle>

        <CoursesPositionContainer>
          <CoursesLText>
            <CParagraphL>
              {" "}
              <span>Explore coffee.</span>
              <span> Master your craft.</span>
            </CParagraphL>
          </CoursesLText>
          <CSeparation />
          <CoursesRText>
            <CParagraphR>
              {" "}
              <span>Join our courses.</span>{" "}
              <span>Start your journey now!</span>
            </CParagraphR>
          </CoursesRText>
        </CoursesPositionContainer>

        <ButtonC href="/courses">
          <ButtonTextC>Interested?</ButtonTextC>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              d="M16 13V5H6V13C6 14.1046 6.89543 15 8 15H14C15.1046 15 16 14.1046 16 13ZM5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"
              fill="rgba(75,46,15,1)"
            ></path>
          </svg>
        </ButtonC>
      </ContainerDiv>
    );
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    // Tablet
    return (
      <ContainerDiv>
        <CoursesTitle>
          Ignite your coffee career with our expert courses.
        </CoursesTitle>
        <CoursesPositionContainer>
          <CoursesLText>
            <CParagraphL>
              Passionate about coffee? Explore our courses and learn about
              cultivation, harvesting, brewing, and tasting. Our experienced
              instructors will guide you, sharing their expertise and helping
              you develop your skills.
            </CParagraphL>
          </CoursesLText>
          <CSeparation />
          <CoursesRText>
            <CParagraphR>
              Whether you are an aspiring barista or coffee enthusiast, our
              courses offer something for everyone. Start your coffee journey
              today!
            </CParagraphR>
            <ButtonC href="/courses">
              <ButtonTextC>Interested?</ButtonTextC>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M16 13V5H6V13C6 14.1046 6.89543 15 8 15H14C15.1046 15 16 14.1046 16 13ZM5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"
                  fill="rgba(75,46,15,1)"
                ></path>
              </svg>
            </ButtonC>
          </CoursesRText>
        </CoursesPositionContainer>
      </ContainerDiv>
    );
  } else {
    // Desktop
    return (
      <CoursesPositionContainer>
        <CoursesLText>
          <CoursesTitle>
            Brew your passion for coffee into a career with our expert courses.
          </CoursesTitle>

          <CParagraphL>
            Are you passionate about coffee and eager to learn more about it?
            Our courses on coffee are designed to provide you with a
            comprehensive understanding of the world of coffee, from cultivation
            and harvesting to brewing and tasting.
          </CParagraphL>
        </CoursesLText>

        <CSeparation />

        <CoursesRText>
          <CParagraphR>
            Our experienced instructors will guide you through the entire
            process, sharing their knowledge and expertise to help you develop
            your skills and deepen your appreciation for this beloved beverage.
            Whether you are an aspiring barista, a coffee enthusiast, or simply
            curious about the world of coffee, our courses offer something for
            everyone. Join us today and take the first step on your journey to
            becoming a true coffee connoisseur.
          </CParagraphR>
          <ButtonC href="/courses">
            <ButtonTextC>Interested?</ButtonTextC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                d="M16 13V5H6V13C6 14.1046 6.89543 15 8 15H14C15.1046 15 16 14.1046 16 13ZM5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"
                fill="rgba(75,46,15,1)"
              ></path>
            </svg>
          </ButtonC>
        </CoursesRText>
      </CoursesPositionContainer>
    );
  }
};

export default CoursesBanner;
