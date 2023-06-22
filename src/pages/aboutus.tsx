import React from "react";
import {
  ContainerDiv,
  AboutTitle,
  AboutContent,
  AboutImgWrapper,
  AboutTextContent,
  AboutContentParagraph,
  AboutButton,
} from "@/components/components.styles";
import { Layout } from "@/components";

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <ContainerDiv>
        <AboutTitle>About Us:</AboutTitle>
        <AboutContent>
          <AboutImgWrapper>
            <img src="/nosotros.jpg" alt="About Img" />
          </AboutImgWrapper>
          <AboutTextContent>
            <AboutContentParagraph>
              In our blog, we believe that coffee is more than just a beverage;
              it's a journey of flavors, cultures, and experiences. With every
              sip, we embark on a sensory adventure that awakens our senses and
              connects us to the rich traditions of coffee lovers worldwide. Our
              blog is a sanctuary for coffee enthusiasts seeking inspiration,
              knowledge, and a sense of community. Through our carefully crafted
              articles, we delve into the origins of different coffee beans,
              explore unique brewing methods, and uncover the secrets behind
              creating the perfect cup of joe. Whether you are a seasoned
              barista or just beginning to explore the world of coffee, our blog
              caters to all levels of coffee aficionados. Join us as we delve
              into the captivating stories of coffee farmers, unravel the
              intricacies of latte art, and discover hidden gems in the coffee
              industry. Indulge in our love for coffee and join our vibrant
              community of like-minded individuals who share a common
              appreciation for the remarkable beverage that has the power to
              bring people together. Together, let's celebrate the art, science,
              and sheer joy of coffee.
            </AboutContentParagraph>
            <AboutButton href="/contact">Contact us</AboutButton>
          </AboutTextContent>
        </AboutContent>
      </ContainerDiv>
    </Layout>
  );
};

export default AboutUs;
