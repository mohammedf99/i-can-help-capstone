import { Col, Row, Typography } from "antd";
import DetailInfo from "./DetailInfo";
import { PrimaryButton, SecondaryButton, Container } from "./PostDetail.styled";

function PostDetail({ data }) {
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
            {data?.name || "Name"}
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
            <DetailInfo title="Price" text={data?.price} />
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
