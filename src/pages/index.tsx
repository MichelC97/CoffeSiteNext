import { useState } from "react";
import { ContainerDiv, CoursesImg } from "@/components/components.styles";
import { CoursesBanner, LayoutHome, Pagination, Article } from "@/components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Props } from "@/components/interfaces";

export default function Home({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / 6);

  return (
    <>
      <LayoutHome title="Home">
        <ContainerDiv>
          {posts.slice((currentPage - 1) * 6, currentPage * 6).map((post) => (
            <Article key={post.id} post={post.attributes} />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </ContainerDiv>
        <CoursesImg>
          <CoursesBanner />
        </CoursesImg>
      </LayoutHome>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(`${process.env.API_URL}/blogs?populate=image`);
  const { data: posts } = await response.json();

  return {
    props: { posts },
  };
};
