import React from "react";
import { TestimonialsSection } from "./Testimonials.styled";
import { Carousel } from "antd";
import TestimonialsList from "./TestimonialsList";
const testimonialsData = [
  {
    cardTitle: "Efficient Collaborating",
    cardParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    profileImg:
      "https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png",
    profileName: "Jane Cooper",
    profilePosition: "CEO at ABC Corporation",
  },
  {
    cardTitle: "Intuitive Design",
    cardParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    profileImg:
      "https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png",
    profileName: "Jane Cooper",
    profilePosition: "CEO at ABC Corporation",
  },
  {
    cardTitle: "Mindblowing Service",
    cardParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
    profileImg:
      "https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png",
    profileName: "Jane Cooper",
    profilePosition: "CEO at ABC Corporation",
  },
];
const Testimonials = () => {
  return (
    <TestimonialsSection>
      <div className="title-wrapper">
        <h1>Our Clients Speak</h1>
        <h3>We have been working with clients around the world</h3>
      </div>
      <Carousel>
        <div>
          <TestimonialsList testimonialsData={testimonialsData} />
        </div>
        <div>
          <TestimonialsList testimonialsData={testimonialsData} />
        </div>
        <div>
          <TestimonialsList testimonialsData={testimonialsData} />
        </div>
      </Carousel>
    </TestimonialsSection>
  );
};

export default Testimonials;
