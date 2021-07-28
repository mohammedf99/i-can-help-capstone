import { Row } from "antd";

function DetailInfo({ title, text }) {
  return (
    <Row
      style={{ paddingBlock: "10px", fontSize: "26px", fontFamily: "roboto" }}
    >
      {title}: {text}
    </Row>
  );
}

export default DetailInfo;
