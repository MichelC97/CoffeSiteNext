import React from "react";
import { Layout, CourseComp } from "@/components";
import { ContainerDiv, CTitle } from "@/components/components.styles";
import { PropsBlog } from "@/components/interfaces";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const courses = ({ blogs }: PropsBlog) => {
  return (
    <Layout title="Courses">
      <ContainerDiv>
        <CTitle>
          Check out our upcoming <span>courses</span> and
          <span> workshops</span>.
        </CTitle>

        {blogs.map((blog) => (
          <CourseComp key={blog.id} blog={blog.attributes} />
        ))}
      </ContainerDiv>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<PropsBlog> = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(`${process.env.API_URL}/courses?populate=image`);
  const { data: blogs } = await response.json();

  return {
    props: { blogs },
  };
};

export default courses;
