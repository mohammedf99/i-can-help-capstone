import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ProfileDetailCont, LeftSection, RightSection, LangTags } from "./LowerSection.styled";
import EditFormModal from "./EditFormModal";

const LowerSection = () => (
  <ProfileDetailCont>
    <LeftSection>
      <h2 className="detail-titles">Description</h2>
      <p className="detail-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque sit, esse illo
        veritatis modi molestias nisi, nostrum dolore quis, sed quaerat laudantium! Unde quaerat
        sint voluptates recusandae dolorem officiis autem molestias beatae explicabo quisquam labore
        id ea quia, officia placeat quasi expedita tempore, quidem iusto est consequuntur. Explicabo
        ea, recusandae distinctio deleniti ab ut ipsam eveniet delectus nulla aspernatur molestias
        ipsa repellendus animi reiciendis et quibusdam dolorem quam ad quas eligendi voluptatem
        voluptatum magni. Maxime voluptates aliquam dolor hic molestiae nostrum voluptas quod
        ducimus. Eos necessitatibus autem neque distinctio ipsam, vero qui numquam illum nesciunt
        est doloribus nobis blanditiis!
      </p>
      <h2 className="detail-titles">Languages</h2>
      <div className="tags-div">
        <LangTags>English</LangTags>
        <LangTags>Arabic</LangTags>
      </div>
      <div className="lang-input-div">
        <form>
          <input type="text" placeholder="Add language" />
          <button type="submit" className="lang-button">
            Add
          </button>
        </form>
      </div>
    </LeftSection>
    <RightSection>
      <div className="contact-div">
        <h2 className="detail-titles">Contact</h2>
        <EditFormModal />
      </div>
      <div className="contact-info-div">
        <ul>
          <li>
            <span className="contact-icons">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            example@gmail.com
          </li>
          <li>
            <span className="contact-icons">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            example.ex
          </li>
          <li>
            <span className="contact-icons">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            +964 7XX XXX XXXX
          </li>
        </ul>
      </div>
      <h2 className="detail-titles">Settings</h2>
      <div className="setting-lang-div">
        <h3 className="setting-lang-title">Language:</h3>
        <form action="#">
          <button className="setting-lang-btn">English</button>
          <button className="setting-lang-btn">Kurdish</button>
        </form>
      </div>
    </RightSection>
  </ProfileDetailCont>
);

export default LowerSection;
