import { Col, Row, Typography } from "antd";
import DetailInfo from "./DetailInfo";
import { PrimaryButton, SecondaryButton, Container } from "./PostDetail.styled";

function PostDetail({ image, name, title }) {
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
            {name || "Name"}
          </Typography.Title>

          <img
            src={image}
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
            {title || "Title"}
          </Typography.Title>

          <div
            style={{
              marginLeft: "30px",
              marginTop: "20%",
              borderLeft: "#1C1259 1px solid",
              paddingLeft: "10px",
            }}
          >
            <DetailInfo title="Job Description" text="Electric" />
            <DetailInfo title="Price" text="$2/m" />
            <DetailInfo title="Employment" text="Full-time" />
            <DetailInfo title="Location" text="DarinGroup Erbil" />
            <DetailInfo title="Time" text="10 days" />
            <DetailInfo title="Gender" text="Male" />

            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20%",
              }}
            >
              <SecondaryButton>Pin</SecondaryButton>

              <PrimaryButton>Contact</PrimaryButton>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
