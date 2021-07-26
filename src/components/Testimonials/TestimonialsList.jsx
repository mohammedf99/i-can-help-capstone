import React from "react";
import CustomCard from "./CustomCard";
import { TestimonialsListContainer } from "./Testimonials.styled";
const TestimonialsList = ({ testimonialsData }) => {
  return (
    <TestimonialsListContainer>
      {testimonialsData.map((item) => {
        return (
          <CustomCard
            cardTitle={item.cardTitle}
            cardParagraph={item.cardParagraph}
            cardImage={item.profileImg}
            profileName={item.profileName}
            profilePosition={item.profilePosition}
          />
        );
      })}
    </TestimonialsListContainer>
  );
};

export default TestimonialsList;
