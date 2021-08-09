import React from "react";
import { Card } from "antd";
import { CustomCardStyle } from "./Testimonials.styled";
const CustomCard = ({
  cardTitle,
  cardImage,
  cardParagraph,
  profileName,
  profilePosition,
}) => (
  <CustomCardStyle>
    <Card className="card">
      <h2>{cardTitle}</h2>
      <p>{cardParagraph}</p>
    </Card>

    <div className="details">
      <div className="imgbx">
        <img src={cardImage} alt="" style={{ objectFit: "cover" }} />
      </div>
      <h2>{profileName}</h2>
      <span>{profilePosition}</span>
    </div>
  </CustomCardStyle>
);

export default CustomCard;
