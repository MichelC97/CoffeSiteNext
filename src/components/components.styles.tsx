import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps, CardDivProps } from "./interfaces";

//Container
export const ContainerDiv = styled.div`
  max-width: 120rem;
  width: 90%;
  width: min(90%, 120rem);
  margin: 0 auto;
`;

//Main
export const MainContent = styled.main`
  background: linear-gradient(to bottom, #eeecec, #fff, #eeecec);
  padding-top: 1px;
  padding-bottom: 5px;
`;

//Headerimg (home)
export const HomeHeaderImg = styled.header`
  background-image: url("../../banner.jpg");
  height: 60rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

//headerimg (normal)
export const HeaderImg = styled.header`
  background-image: url("../../banner.jpg");
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 768px) {
    height: 20rem;
  }
`;

//HomeHeaderbar
export const HomeHBar = styled.div`
  padding-top: 4rem;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HomeHStyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: normal;
  color: #cccccc;
  font-family: var(--font-OpenSans);
  letter-spacing: 0.5px;
  position: relative;
  display: block;

  @media (min-width: 768px) {
    margin-right: 2rem;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      transition: width 0.25s ease-out;
    }

    :hover::before {
      background-color: #f1ead1;
      width: 100%;
    }
  }

  :hover {
    color: #f1ead1;
  }
`;

export const HomeHNavBar = styled.nav`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HomeHLogoLink = styled(Link)`
  color: #cccccc;
  font-weight: normal;
  font-family: var(--font-PtSans);
  font-size: 4.8rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  line-height: 1.2;
  transition: 0.3s ease;

  :hover {
    color: #f9a602;
  }
`;

export const HomeHSpanLink = styled.span`
  font-weight: 700;
`;

//homeheadertext

export const HomeHeaderDiv = styled.div`
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    margin-top: 15rem;
  }
`;

export const HomeHTextTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.5px;
  font-family: var(--font-PtSans);
  margin: 0;
`;

export const HomeHText = styled.p`
  font-family: var(--font-OpenSans);
  margin-top: 3rem;
  font-size: 1.5rem;
`;

//footer
export const FooterBackground = styled.div`
  background-color: black;
  padding-bottom: 3rem;
`;

//footerBar
export const FBar = styled.div`
  padding-top: 4rem;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FStyledLink = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: normal;
  color: #cccccc;
  font-family: var(--font-OpenSans);
  letter-spacing: 0.5px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.25s ease-out;
  }

  :hover::before {
    background-color: #f1ead1;
    width: 100%;
  }

  :hover {
    color: #f1ead1;
  }
`;

export const FNavBar = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const FLogoLink = styled(Link)`
  color: #cccccc;
  font-weight: normal;
  font-family: var(--font-PtSans);
  font-size: 4.8rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  line-height: 1.2;
  transition: 0.3s ease;

  :hover {
    color: #f9a602;
  }
`;

export const FSpanLink = styled.span`
  font-weight: 700;
`;

export const FooterIcon = styled(Link)<IconProps>`
  color: #cccccc;
  font-size: 2rem;
  margin-right: 1rem;

  :hover {
    color: ${(props) => props.hovercolor};
  }
`;

//footertext

export const FtInformation = styled.div`
  text-align: center;
  margin-top: 4rem;
  color: #a5a0a0;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

export const FtStyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: normal;
  color: #a5a0a0;
  font-family: var(--font-OpenSans);
  letter-spacing: 0.5px;

  :hover {
    color: #fff;
  }
`;

export const FtSpanPoint = styled.span`
  color: #a5a0a0;
  font-size: 2rem;
`;

//CoursesBanner

export const CoursesImg = styled.div`
  background-image: url("../../Courses.avif");
  height: 28rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 2rem;
`;

export const CoursesTitle = styled.h1`
  color: #c19a6b;
  font-family: var(--font-PtSans);
  font-size: 2em;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: 384px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 500px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 594px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 738px) {
    margin-bottom: 5rem;
  }

  @media (min-width: 768px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export const CParagraphL = styled.p`
  font-family: var(--font-OpenSans);
  color: #4b2e0f;
  margin-top: 0;
  line-height: 1.2;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const CParagraphR = styled.p`
  font-family: var(--font-OpenSans);
  color: #4b2e0f;
  line-height: 1.2;
  margin-top: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const CoursesPositionContainer = styled.div`
  max-width: 120rem;
  width: 90%;
  width: min(90%, 120rem);
  margin: 0 auto;
  display: flex;
  margin-bottom: 1rem;

  @media (min-width: 384px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 500px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 594px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 738px) {
    margin-bottom: 5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const CSeparation = styled.div`
  width: 30%;

  @media (min-width: 768px) {
    width: 27%;
  }
`;

export const CoursesLText = styled.div`
  width: 35%;

  @media (min-width: 768px) {
    width: 36%;
  }
`;

export const CoursesRText = styled.div`
  width: 35%;

  @media (min-width: 768px) {
    width: 38%;
  }
`;

export const ButtonC = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #c19a6b;
  border: none;
  padding: 0.5em 1em;
  transition: 0.3s ease;
  text-decoration: none;
  justify-content: center;

  :hover {
    background-color: #8b5a2b;
  }

  @media (min-width: 738px) {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: 1024px) {
    margin-left: 60%;
    width: auto;
  }
`;

export const ButtonTextC = styled.p`
  margin: 0 0.3rem 0 0;
  font-family: var(--font-PtSans);
  color: #4b2e0f;
  font-size: 16px;
`;

//pagination

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PageButton = styled.button`
  margin: 10px 5px 5px 0;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.disabled ? "#4B2E0F" : "#8B5A2B")};
  transition: 0.3s ease;

  :hover {
    background-color: #4b2e0f;
  }
`;

//article
export const ArticleContainer = styled.div`
  margin-top: 1.5rem;
  border-bottom: 1px solid #333333;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ArtImg = styled(Image)`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export const ArtDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-left: 3rem;
    display: block;
  }
`;

export const ArtTitle = styled.h4`
  font-size: 2.8rem;
  line-height: 1.2;
  font-family: var(--font-PtSans);
  margin: 0;
  text-align: left;
  text-decoration: underline;
  color: #c19a6b;
`;
export const ArtContent = styled.p`
  font-family: var(--font-OpenSans);
  font-size: 1.6rem;
  line-height: 2;
`;

export const ArtButton = styled(Link)`
  font-family: var(--font-PtSans);
  background: none;
  border: 2px solid #8b5a2b;
  text-transform: uppercase;
  padding: 12px 20px;
  min-width: 200px;

  cursor: pointer;
  transition: color 0.4s linear;
  text-decoration: none;
  color: #8b5a2b;
  background-color: #f1ead1;
  border-radius: 5px;
  text-align: center;

  &:hover {
    color: #4b2e0f;
    border: 2px solid #4b2e0f;
  }

  @media (min-width: 768px) {
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #4b2e0f;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.5s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;

//contact

export const ContactTitle = styled.h2`
  font-weight: 700;
  font-family: var(--font-PtSans);
  font-size: 4rem;
  text-align: center;
  color: #c19a6b;
  margin-bottom: 0;
`;

export const ContactText = styled.p`
  font-weight: 400;
  font-family: var(--font-OpenSans);
  font-size: 2rem;
  text-align: center;
  margin-top: 0;
`;

export const CImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CFormImg = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const CFormBackground = styled.div`
  background-color: #fff;
  width: 95%;
  position: relative;
  top: -10rem;
  border-radius: 5px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 2rem;
  border: 1px solid #c19a6b;
`;

export const CFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const CFieldContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const CFieldInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #c19a6b;
  font-size: 1em;

  :valid ~ label,
  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    color: #c19a6b;
    transform: translateX(10px) translateY(-13px);
    font-size: 0.75em;
    padding: 0 0.2rem 0 0.2rem;
    background-color: #fff;
    letter-spacing: 0.1em;
    &.error {
      color: #ff6600;
    }
  }

  &.error {
    border-color: #ff6600;
  }
`;

export const CTextField = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #c19a6b;
  font-size: 1em;
  resize: none;
  font-family: var(--font-OpenSans);

  :valid ~ label,
  :focus ~ label {
    color: #c19a6b;
    transform: translateX(10px) translateY(-13px);
    font-size: 0.75em;
    background-color: #fff;
    padding: 0 0.3rem 0 0.3rem;

    &.error {
      color: #ff6600;
    }
  }
  :valid,
  :focus {
    border: 1px solid #c19a6b;
  }
  &.error {
    border-color: #ff6600;
  }
`;

export const CFieldLabel = styled.label`
  position: absolute;
  left: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1em;
  font-family: var(--font-OpenSans);
  color: rgba(15, 15, 15, 0.856);
  pointer-events: none;
  transition: 0.4s ease;

  &.error {
    color: #ff6600;
  }
`;

export const ContactSubmitButton = styled.button`
  font-family: var(--font-PtSans);
  background: none;
  border: 2px solid #8b5a2b;
  text-transform: uppercase;
  padding: 12px 20px;
  min-width: 200px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  text-decoration: none;
  color: #8b5a2b;
  background-color: #f1ead1;
  border-radius: 5px;

  &:hover {
    color: #4b2e0f;
    border: 2px solid #4b2e0f;
    text-decoration: underline;
  }
`;

export const CAlertP = styled.p`
  font-family: var(--font-OpenSans);
  margin: 0;
  color: #ff6600;
`;

//about

export const AboutTitle = styled.h1`
  font-weight: 700;
  font-family: var(--font-PtSans);
  font-size: 5rem;
  text-decoration: underline;
  text-align: center;
  color: #8b5a2b;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 5rem;
  }
`;

export const AboutImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    height: auto;
  }
`;

export const AboutTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 50%;
    text-align: left;
  }
`;

export const AboutContentParagraph = styled.p`
  font-size: 1.5rem;
  font-family: var(--font-OpenSans);
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const AboutButton = styled(Link)`
  font-family: var(--font-PtSans);
  background: none;
  border: 2px solid #8b5a2b;
  text-transform: uppercase;
  padding: 12px 20px;
  min-width: 200px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  text-decoration: none;
  color: #8b5a2b;
  background-color: #f1ead1;
  border-radius: 5px;
  text-align: center;

  &:hover {
    color: #4b2e0f;
    border: 2px solid #4b2e0f;
  }

  @media (min-width: 768px) {
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #4b2e0f;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.5s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;

//coursespage

export const CTitle = styled.h2`
  text-align: center;
  font-family: var(--font-PtSans);
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 0;

  span {
    color: #8b5a2b;
  }
`;

//course component
export const CourseContentWrapper = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid #333333;
  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const CourseContentImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CourseContentImgContent = styled(Image)`
  max-width: 75%;
  height: auto;
  border-radius: 5px;
`;

export const CourseContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CourseInfoDiv = styled.div`
  text-align: left;
`;

export const CourseTitle = styled.h3`
  font-family: var(--font-PtSans);
  font-size: 2.5rem;
  text-align: center;
  color: #c19a6b;
`;

export const CourseDescriptionText = styled.div`
  font-family: var(--font-OpenSans);
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export const CourseButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoursePriceText = styled.p`
  font-family: var(--font-OpenSans);
  font-size: 2rem;

  span {
    color: #8b5a2b;
    font-weight: bold;
  }
`;

export const CourseButton = styled.button`
  font-family: var(--font-PtSans);
  background: none;
  border: 2px solid #8b5a2b;
  text-transform: uppercase;
  padding: 1rem 5rem;
  max-height: 4rem;
  margin: 1rem;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  color: #8b5a2b;
  background-color: #f1ead1;
  border-radius: 5px;
  z-index: 1;

  &:hover {
    color: #4b2e0f;
    border: 2px solid #4b2e0f;
  }
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #4b2e0f;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.5s cubic-bezier(0.5, 1.6, 0.4, 0.7);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

//modal

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
  height: 100%;
  overflow-y: auto;
  touch-action: pan-y;

  @media (min-width: 680px) {
    overflow-y: initial;
    touch-action: auto;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 70rem;
  padding: 25px;
  margin: 25px auto 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  h1 {
    font-family: var(--font-PtSans);
    font-weight: normal;
    font-size: 3rem;
    color: #8b5a2b;
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
  }

  h2 {
    color: #8b5a2b;
    font-family: var(--font-PtSans);
    margin: 0 auto;
    display: flex;
  }
  h3 {
    color: #8b5a2b;
    font-family: var(--font-PtSans);
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    width: 15rem;
  }

  h4 {
    color: #8b5a2b;
    font-family: var(--font-PtSans);
    margin: 0 auto;
    font-size: 2.5rem;
  }
  p {
    font-family: var(--font-OpenSans);
    color: #4b2e0f;
    margin-top: 0;
    line-height: 1.2;
  }
  @keyframes loadingAnimation {
    0% {
      content: ".";
    }
    20% {
      content: "..";
    }
    40% {
      content: "...";
    }
    60% {
      content: "....";
    }
    100% {
      content: ".";
    }
  }
  span.loading::after {
    content: "";
    animation: loadingAnimation 4s infinite;
  }
  @media (max-width: 680px) {
    overflow-y: auto;
    max-height: calc(100vh - 100px);
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 0px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  align-items: center;

  @media (min-width: 680px) {
    margin-bottom: 5px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  color: #4b2e0f;
  background-color: #c19a6b;
  transition: 0.3s;
  border: 3.5px solid #c19a6b;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding-bottom: 2px;

  @media (min-width: 680px) {
    top: 1px;
    left: 1px;
    bottom: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &.error {
    background-color: #ff6600;
    border: 3.5px solid #ff6600;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  margin-right: 12px;
  position: relative;

  :last-child {
    margin-right: 0;
  }

  :focus-within {
    ${StyledIcon} {
      background-color: #8b5a2b;
      color: #f1ead1;
      border: 3.5px solid #8b5a2b;
      transition: 0.6s;
      &.error {
        background-color: #ff6600;
        border: 3.5px solid #ff6600;
      }
    }
  }
`;

export const StyledInput = styled.input`
  padding: 1rem 1.6rem 1rem 6rem;
  width: 100%;
  background-color: #f1ead1;
  border: 1px solid #c19a6b;
  outline: none;
  transition: 0.3s;
  border-radius: 3px;
  color: #333;

  :focus {
    -webkit-box-shadow: 0 0 2px 1px #8b5a2b;
    -moz-box-shadow: 0 0 2px 1px #8b5a2b;
    box-shadow: 0 0 2px 1px #8b5a2b;
    border: 1px solid #8b5a2b;
  }

  &.error {
    border-color: #ff6600;
  }
`;

export const PaymentSelection = styled.div`
  margin-bottom: 5px;
  width: 100%;
  padding: 5px 0;

  label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: none;
  }

  label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const TypeDiv = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const PaymentInput = styled.input`
  display: none;

  :checked + label {
    background-color: #8b5a2b;
    color: #f1ead1;
    transition: 0.5s;
  }
`;

export const PaymentLabel = styled.label`
  background-color: #f1ead1;
  color: #8b5a2b;
  flex: 1;
  text-align: center;
  border: 1px solid #c19a6b;
  padding: 0.6rem;

  span {
    font-family: var(--font-PtSans);
    font-size: 1.8rem;

    @media (min-width: 680px) {
      font-size: 2.3rem;
    }
  }
`;

export const PaymentIcon = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
`;

export const CardDiv = styled.div<CardDivProps>`
  width: 100%;
  position: relative;
  flex-basis: ${(p) => (p.primary ? "60%" : p.secondary ? "65%" : " ")};
  flex: ${(p) => (p.filler ? "1" : "")};
  margin-right: ${(p) => (p.separated ? "0.4rem" : "")};

  :focus-within {
    ${StyledIcon} {
      background-color: #8b5a2b;
      color: #f1ead1;
      transition: 0.6s;
      border: 3.5px solid #8b5a2b;

      &.error {
        background-color: #ff6600;
        border: 3.5px solid #ff6600;
      }
    }
  }
`;

export const SharedInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0;

  @media (max-width: 680px) {
    ${CardDiv}:first-child {
      margin-bottom: 1rem;
    }
  }

  & > div:nth-child(2) ${StyledInput} {
    margin-bottom: 0;
  }

  @media (min-width: 680px) {
    flex-direction: row;
  }
`;

export const ExitDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExitButton = styled.button`
  background: none;
  border: none;
  color: #8b5a2b;
  font-family: var(--font-PtSans);
  font-size: 2rem;

  :hover {
    cursor: pointer;
    color: #4b2e0f;
  }
`;

export const FormButton = styled.button`
  font-family: var(--font-PtSans);
  font-size: 1.5rem;
  width: 60%;
  background: none;
  border: 2px solid #8b5a2b;
  text-transform: uppercase;
  padding: 12px 20px;
  min-width: 200px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  text-decoration: none;
  color: #8b5a2b;
  background-color: #f1ead1;
  border-radius: 5px;

  &:hover {
    color: #4b2e0f;
    border: 2px solid #4b2e0f;
    text-decoration: underline;
  }
`;

export const StyledSvg = styled.svg`
  width: 10rem;
  height: 10rem;
  fill: #000000;

  .a {
    fill: #ffffff;
  }

  .b {
    fill: #211715;
  }

  .c {
    fill: #cfcfcf;
  }

  .d {
    fill: #957f6e;
  }
`;

export const SvgDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
  }
`;

export const ErrorDiv = styled.div`
  margin: 0.2rem 0;
  width: 100%;

  p {
    color: #ff6600;
  }
`;

export const ErrorP = styled.p`
  font-family: var(-font--PtSans);
  font-size: 1.3rem;
  margin: 0;
  border-radius: 0.3rem;
  padding-left: 0.3rem;
`;

export const FlexD = styled.div`
  display: flex;
`;
