import React from "react";
import { ArticleProps } from "./interfaces";
import {
  ArticleContainer,
  ArtImg,
  ArtDiv,
  ArtTitle,
  ArtContent,
  ArtButton,
} from "./components.styles";

const Article = ({ post }: ArticleProps) => {
  const { title, content, url, image } = post;

  const limitedContent =
    content.length > 300 ? `${content.slice(0, 300)}...` : content;

  console.log(post);
  return (
    <ArticleContainer>
      <div>
        <ArtImg
          src={image.data.attributes.formats.medium.url}
          alt="Article Image"
          width={800}
          height={800}
        />
      </div>

      <ArtDiv>
        <ArtTitle>{title}</ArtTitle>
        <ArtContent>{limitedContent}</ArtContent>

        <ArtButton href={`/blogs/${url}`}>Read More</ArtButton>
      </ArtDiv>
    </ArticleContainer>
  );
};

export default Article;
