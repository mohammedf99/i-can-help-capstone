import React from "react";
import { DetailsCont, FormDiv, LangInp, InpBtn, Ul, Li } from "./LowerSection.styled";
import { Row, Col, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";



const LowerSection = () => {
  
    return(
        <DetailsCont>
            <Row>
                <Col span={12} >
                    <Row>
                        <Col span={24}>
                            <h3>Description</h3>
                        </Col>
                        <Col span={24}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis itaque at dolor voluptatum mollitia vitae ad totam dignissimos? Reiciendis porro ab laudantium consequatur inventore placeat repellendus omnis iste error est nesciunt rem distinctio vitae libero impedit culpa nisi provident at necessitatibus quidem, explicabo, quam quae. Enim deserunt repudiandae molestiae?</p>
                        </Col>
                        <Col span={24}>
                            <h3>Languages</h3>
                        </Col>
                        <Col span={24}>
                            <div>
                                <Tag color="#1C1259">Kurdish</Tag>
                                <Tag color="#1C1259">Arabic</Tag>
                            </div>
                        </Col>
                        <Col span={24}>
                            <FormDiv>
                                <form action="">
                                    <LangInp placeholder="Language" />
                                    <InpBtn>Add</InpBtn>
                                </form>
                            </FormDiv>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>
                            <h3>Contact</h3>
                        </Col>
                        <Col span={24}>
                        <Ul>
                        <Li><FontAwesomeIcon icon={faEnvelope} />test@test.com</Li>
                        <Li><FontAwesomeIcon icon={faFacebook} />test</Li>
                        <Li><FontAwesomeIcon icon={faPhone} />7XX XXX XXX</Li>
                    </Ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DetailsCont>

    )

}

export default LowerSection;