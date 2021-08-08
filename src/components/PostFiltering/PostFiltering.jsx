import React from "react";
import { Row, Col } from "antd";
import { FilterContainer } from "./PostFiltering.styled";

const PostFiltering = () => (
  <FilterContainer>
    <form action="">
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <h3 className="salary-title">Salary</h3>
        </Col>
      </Row>
      <Row gutter={[8, 8]} className="salary-row">
        <Col span={4} className="from-to-title">
          <label htmlFor="from">From</label>
        </Col>
        <Col span={8}>
          <input type="number" id="from" name="from" placeholder="$" className="salary-input" />
        </Col>
        <Col span={4} className="from-to-title">
          <label htmlFor="to">To</label>
        </Col>
        <Col span={8}>
          <input type="number" id="to" name="to" placeholder="$" className="salary-input" />
        </Col>
      </Row>
      <Row gutter={[8, 8]} className="select-row">
        <Col span={24}>
          <select className="filter-select">
            <option selected disabled>
              Employment type
            </option>
            <option value="full-time">Contract</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="all">Show all</option>
          </select>
        </Col>
        <Col span={24}>
          <select className="filter-select">
            <option selected disabled>
              Location
            </option>
            <option value="Erbil">Erbil</option>
            <option value="Duhok">Duhok</option>
            <option value="Halabja">Halabja</option>
            <option value="Kerkuk">Kerkuk</option>
            <option value="Sulaymaniyah">Sulaymaniyah</option>
            <option value="all">Show all</option>
          </select>
        </Col>
        <Col span={24}>
          <select className="filter-select">
            <option selected disabled>
              Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="all">Show both</option>
          </select>
        </Col>
        <Col span={24}>
          <select className="filter-select">
            <option selected disabled>
              Show only
            </option>
            <option value="full-time">Employeer</option>
            <option value="part-time">Jobseeker</option>
            <option value="all">Show both</option>
          </select>
        </Col>
      </Row>
    </form>
  </FilterContainer>
);

export default PostFiltering;
