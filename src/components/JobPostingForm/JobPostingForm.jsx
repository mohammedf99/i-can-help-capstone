import React from "react";
import { Row, Col } from "antd";
import { JobPostingContainer } from "./JobPostingForm.styled";

const JobPostingForm = () => (
  <JobPostingContainer>
    <form action="">
      <Row>
        <Col>
          <textarea name="post" id="post" cols="140" rows="3" placeholder="Job description..." />
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <input type="number" name="salary" id="salary" placeholder="Salary in USD" />
        </Col>
        <Col span={4}>
          <select className="post-select">
            <option selected disabled>
              You are a(n)
            </option>
            <option value="">Employer</option>
            <option value="">Jobseeker</option>
          </select>
        </Col>
        <Col span={5}>
          <select className="post-select">
            <option selected disabled>
              Job type
            </option>
            <option value="">Babysitter</option>
            <option value="">Cleaner</option>
            <option value="">Design</option>
            <option value="">Gardner</option>
            <option value="">Marketing</option>
            <option value="">Production</option>
            <option value="">Translator</option>
            <option value="">Worker</option>
            <option value="">open</option>
            <option value="">Others</option>
          </select>
        </Col>
        <Col span={4}>
          <select className="post-select">
            <option selected disabled>
              Time
            </option>
            <option value="">Contract</option>
            <option value="">Full-time</option>
            <option value="">Part-time</option>
          </select>
        </Col>
        <Col span={6}>
          <select className="post-select">
            <option selected disabled>
              Location
            </option>
            <option value="">Erbil</option>
            <option value="">Duhok</option>
            <option value="">Halabja</option>
            <option value="">Kerkuk</option>
            <option value="">Sulaymaniyah</option>
          </select>
        </Col>
      </Row>
      <Row justify="end">
        <button type="submit">Post</button>
      </Row>
    </form>
  </JobPostingContainer>
);

export default JobPostingForm;
