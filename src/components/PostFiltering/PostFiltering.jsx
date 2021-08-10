import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
import { FilterContainer } from "./PostFiltering.styled";

const PostFiltering = ({ setFilteredPosts, posts, type }) => {
  const [filtering, setFiltering] = useState({
    employment: null,
    from: null,
    to: null,
    location: null,
    gender: null,
    type: null,
  });

  useEffect(() => {
    setFiltering((prev) => ({ ...prev, type }));
  }, [type]);

  const search = () => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          (filtering.from ? Number(post.data().price) >= Number(filtering.from) : true) &&
          (filtering.to ? Number(post.data().price) <= (Number(filtering.to) || 1000000) : true) &&
          (filtering.employment ? post.data().employment === filtering.employment : true) &&
          (filtering.location ? post.data().location === filtering.location : true) &&
          (filtering.gender ? post.data().gender === filtering.gender : true) &&
          (filtering.type ? Number(post.data().type) === Number(filtering.type) : true),
      ),
    );
  };

  useEffect(() => search(), [filtering]);

  return (
    <FilterContainer>
      <form action="">
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <h3 className="salary-title" style={{ backgroundColor: "#CACAEA", color: "#1C1259" }}>
              {t("salary")}
            </h3>
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="salary-row">
          <Col span={4} className="from-to-title">
            <label htmlFor="from">{t("from")}</label>
          </Col>
          <Col span={8}>
            <input
              defaultValue={0}
              min={0}
              type="number"
              id="from"
              name="from"
              placeholder="$"
              className="salary-input"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  from: e.target.value === "" ? null : e.target.value,
                }));
              }}
            />
          </Col>
          <Col span={4} className="from-to-title">
            <label htmlFor="to">{t("to")}</label>
          </Col>
          <Col span={8}>
            <input
              min={0}
              type="number"
              id="to"
              name="to"
              placeholder="$"
              className="salary-input"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  to: e.target.value === "" ? null : e.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="select-row">
          <Col span={24}>
            <select
              className="filter-select"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  employment: e.target.value === "false" ? false : e.target.value,
                }));
              }}
            >
              <option selected disabled>
                {t("empType")}
              </option>
              <option value="Contract">Contract</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value={false}>Show all</option>
            </select>
          </Col>
          <Col span={24}>
            <select
              className="filter-select"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  location: e.target.value === "false" ? false : e.target.value,
                }));
              }}
            >
              <option selected disabled>
                {t("location")}
              </option>
              <option value="Erbil">Erbil</option>
              <option value="Duhok">Duhok</option>
              <option value="Halabja">Halabja</option>
              <option value="Kerkuk">Kerkuk</option>
              <option value="Sulaymaniyah">Sulaymaniyah</option>
              <option value={false}>Show all</option>
            </select>
          </Col>
          <Col span={24}>
            <select
              className="filter-select"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  gender: e.target.value === "false" ? false : e.target.value,
                }));
              }}
            >
              <option selected disabled>
                {t("gender")}
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value={false}>Show both</option>
            </select>
          </Col>
          <Col span={24}>
            <select
              className="filter-select"
              onChange={(e) => {
                e.persist();
                setFiltering((prev) => ({
                  ...prev,
                  type: e.target.value === "false" ? false : e.target.value,
                }));
              }}
            >
              <option selected disabled defaultValue={`${type}`}>
                {type === "1" ? "Employeer" : "Jobseeker"}
              </option>
              <option value="1">Employeer</option>
              <option value="2">Jobseeker</option>
              <option value={false}>Show both</option>
            </select>
          </Col>
        </Row>
      </form>
    </FilterContainer>
  );
};

export default PostFiltering;
