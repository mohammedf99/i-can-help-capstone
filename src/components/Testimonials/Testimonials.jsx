import React from "react";
import { useTranslation } from "next-i18next";
import { TestimonialsSection } from "./Testimonials.styled";
import TestimonialsList from "./TestimonialsList";

const testimonialsData = [
  {
    cardTitle: "Fast",
    cardParagraph: "Through this website i can easily find someone to help me.",
    profileImg:
      "https://images.unsplash.com/photo-1627419741847-40e93af705fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    profileName: "Yakub Aziz",
    profilePosition: "",
  },
  {
    cardTitle: "Diverse",
    cardParagraph: "Having people in different regions makes the work easier.",
    profileImg:
      "https://images.unsplash.com/flagged/photo-1557898246-9fd78587bcc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    profileName: "Jane Cooper",
    profilePosition: "",
  },
  {
    cardTitle: "Helpful",
    cardParagraph: "You need help and you can't find someone?, it is not a problem anymore",
    profileImg:
      "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    profileName: "Sevim Aksoy",
    profilePosition: "",
  },
];
const Testimonials = () => {
  const { t } = useTranslation("welcome");
  return (
    <TestimonialsSection>
      <div className="title-wrapper">
        <h1>{t("testimonialTitle")}</h1>
        <h3>We have been working with clients around the world</h3>
      </div>
      <div>
        <TestimonialsList testimonialsData={testimonialsData} />
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
