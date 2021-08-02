import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { PostCardCont, PostCardBody } from "./ProfilePost.styled";

const ProfilePost = () => {
  const { Meta } = PostCardCont;

  return (
    <PostCardCont
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <PostCardBody>
        <div className="upper-body">
          <h4 className="name">John Doe</h4>
          <h4 className="salary">$5/day</h4>
        </div>
        <div className="middle-body">
          <a href="#">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tenetur dicta nobis
              ullam quisquam eius dolorem nesciunt minima error maxime natus, voluptate nihil
              delectus corporis fugiat id cupiditate iure in aliquid ut voluptatem non ex eligendi.
              Cum expedita dolorum accusantium beatae dolores laborum aliquid veritatis quod odit,
              consequuntur velit nesciunt.
            </p>
          </a>
        </div>
        <div className="lower-body">
          <form action="">
            <button type="submit">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </form>
        </div>
      </PostCardBody>
    </PostCardCont>
  );
};

export default ProfilePost;
