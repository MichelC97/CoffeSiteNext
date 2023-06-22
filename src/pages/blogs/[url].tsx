import React from "react";
import Layout from "@/components/Layout";
import ContainerDiv from "@/components/Container";
import styled from "styled-components";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormImg = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 5rem;
  border: 1px solid rgba(120, 77, 60, 0.856);
`;

const ContentBackground = styled.div`
  background-color: #fff;
  width: 95%;
  position: relative;
  top: -10rem;
  border-radius: 5px;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border: 1px solid #8b5a2b;

  @media (min-width: 768px) {
    top: -30rem;
    padding-top: 8rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 700;
  font-family: var(--font-PtSans);
  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline;
  color: #c19a6b;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 95%;
    display: block;
  }
`;

const ContentImg = styled(Image)`
  border-radius: 5px;
  height: auto;
  width: 75%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    float: left;
    max-width: 50%;
    height: auto;
    margin: 0 1rem;
  }
`;

const Text = styled.p`
  font-family: var(--font-OpenSans);
  font-size: 1em;
  text-align: center;
  line-height: 1.5;
  text-align: left;
  margin: 0 0.5rem 0 1rem;
  white-space: pre-wrap;
`;

interface Post {
  attributes: {
    title: string;
    content: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface MainArtProps {
  post: Post[];
}

interface PostAttributes {
  url: string;
}

interface DataItem {
  attributes: PostAttributes;
}

interface ExtendedParams extends ParsedUrlQuery {
  url: string;
}

const MainArt: React.FC<MainArtProps> = ({ post }) => {
  const { title, content, image } = post[0].attributes;
  return (
    <Layout title={title}>
      <ContainerDiv>
        <ImgWrapper>
          <FormImg
            src="/articulo.jpg"
            alt="About Img"
            width={1500}
            height={1000}
          />
        </ImgWrapper>
        <ContentBackground>
          <ContentContainer>
            <Title>{title}</Title>
            <Content>
              <ContentImg
                src={image.data.attributes.url}
                alt="Art Image"
                width={600}
                height={600}
              />

              <Text>{content}</Text>
            </Content>
          </ContentContainer>
        </ContentBackground>
      </ContainerDiv>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MainArtProps> = async (context) => {
  const { url } = context.params!;
  const response = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`
  );
  const { data: post } = await response.json();

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths<ExtendedParams> = async () => {
  const response = await fetch(`${process.env.API_URL}/blogs`);
  const { data } = await response.json();

  const paths = data.map((post: DataItem) => ({
    params: {
      url: post.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default MainArt;
