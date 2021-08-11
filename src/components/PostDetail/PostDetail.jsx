import { useTranslation } from "next-i18next";
import { Col, Row, Typography } from "antd";
import React, { useContext } from "react";
import AuthContext from "../../Utilities/Contexts/AuthContext";
import { pinPost, unPinPost } from "../../Utilities/FirebaseUtilities";
import DataContext from "../../Utilities/Contexts/DataContext";
import DetailInfo from "./DetailInfo";
import { PrimaryButton, SecondaryButton, Container, ImageStyled } from "./PostDetail.styled";
import ContactModal from "../Post/ContactModal";

function PostDetail({ data }) {
  const { userData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const { t } = useTranslation("postDetails");
  return (
    <Container>
      <Col style={{ textAlign: "center", flex: 1.6 }}>
        <Typography.Title
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          {data?.user?.name || "Name"}
        </Typography.Title>

        <ImageStyled src={data?.picture} />
      </Col>

      <Col style={{ textAlign: "center", flex: 1.4 }}>
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
          <DetailInfo title={t("jobDesc")} text={data?.jobDescription} />
          <DetailInfo title={t("price")} text={`$${data?.price}`} />
          <DetailInfo title={t("employment")} text={data?.employment} />
          <DetailInfo title={t("location")} text={data?.location} />
          <DetailInfo title={t("time")} text={data?.time} />
          <DetailInfo title={t("gender")} text={data?.gender} />

          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20%",
            }}
          >
            {userData?.pinnedPosts.includes(data.id) ? (
              <PrimaryButton onClick={() => unPinPost(currentUser?.uid, data.id)}>
                {t("pinned")}
              </PrimaryButton>
            ) : (
              <SecondaryButton onClick={() => pinPost(currentUser?.uid, data.id)}>
                {t("pin")}
              </SecondaryButton>
            )}

            <ContactModal
              button={(props) => <PrimaryButton {...props}>{t("contact")}</PrimaryButton>}
              user={data?.user}
            />
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default PostDetail;
