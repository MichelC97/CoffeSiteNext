import React, { useState } from "react";
import Modal from "./Modal";
import { BlogProps } from "./interfaces";
import {
  CourseContentWrapper,
  CourseContentImgWrapper,
  CourseContentImgContent,
  CourseContent,
  CourseInfoDiv,
  CourseTitle,
  CourseDescriptionText,
  CourseButtonDiv,
  CoursePriceText,
  CourseButton,
} from "./components.styles";

const CourseComp = ({ blog }: BlogProps) => {
  const { title, description, image, price } = blog;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CourseContentWrapper>
      <CourseContentImgWrapper>
        <CourseContentImgContent
          src={image.data.attributes.formats.medium.url}
          alt="Course Image"
          width={800}
          height={800}
        />
      </CourseContentImgWrapper>
      <CourseContent>
        <CourseInfoDiv>
          <CourseTitle>{title}</CourseTitle>

          <CourseDescriptionText>{description}</CourseDescriptionText>
        </CourseInfoDiv>
        <CourseButtonDiv>
          <CoursePriceText>
            Price: <span>${price}</span>
          </CoursePriceText>
          <CourseButton onClick={openModal}>Buy</CourseButton>
        </CourseButtonDiv>
      </CourseContent>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </CourseContentWrapper>
  );
};

export default CourseComp;
