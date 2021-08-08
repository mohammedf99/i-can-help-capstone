import { Col, Row, Typography } from "antd";
import { useContext } from "react";
import AuthContext from "../../Utilities/Contexts/AuthContext";
import { pinPost, unPinPost } from "../../Utilities/FirebaseUtilities";
import DataContext from "../../Utilities/Contexts/DataContext";
import DetailInfo from "./DetailInfo";
import { PrimaryButton, SecondaryButton, Container } from "./PostDetail.styled";
import ContactModal from "../Post/ContactModal";

function PostDetail({ data }) {
  const { userData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <Container>
      <Row style={{ width: "80%" }}>
        <Col span={13} style={{ textAlign: "center" }}>
          <Typography.Title
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            {data?.user?.name || "Name"}
          </Typography.Title>

          <img
            src={data?.picture}
            style={{ width: "100%", height: "594px", objectFit: "cover" }}
          />
        </Col>

        <Col span={11} style={{ textAlign: "center" }}>
          <Typography.Title
            style={{
              fontFamily: "Roboto",
              fontWeight: "normal",
              fontSize: "36px",
              color: "#1C1259",
            }}
          >
            {data?.title || "Title"}
          </Typography.Title>

          <div
            style={{
              marginLeft: "30px",
              marginTop: "20%",
              borderLeft: "#1C1259 1px solid",
              paddingLeft: "10px",
            }}
          >
            <DetailInfo title="Job Description" text={data?.jobDescription} />
            <DetailInfo title="Price" text={`$${data?.price}`} />
            <DetailInfo title="Employment" text={data?.employment} />
            <DetailInfo title="Location" text={data?.location} />
            <DetailInfo title="Time" text={data?.time} />
            <DetailInfo title="Gender" text={data?.gender} />

            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20%",
              }}
            >
              {userData?.pinnedPosts.includes(data.id) ? (
                <PrimaryButton
                  onClick={() => unPinPost(currentUser?.uid, data.id)}
                >
                  Pinned
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  onClick={() => pinPost(currentUser?.uid, data.id)}
                >
                  Pin
                </SecondaryButton>
              )}

              <ContactModal
                button={(props) => (
                  <PrimaryButton {...props}>Contact</PrimaryButton>
                )}
                user={data?.user}
              />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
