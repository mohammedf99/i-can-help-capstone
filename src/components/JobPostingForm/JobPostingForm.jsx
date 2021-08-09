import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { toast } from "react-toastify";
import { JobPostingContainer } from "./JobPostingForm.styled";
import { post } from "../../Utilities/FirebaseUtilities";
import AuthContext from "../../Utilities/Contexts/AuthContext";
import DataContext from "../../Utilities/Contexts/DataContext";

const JobPostingForm = () => {
  const { currentUser } = useContext(AuthContext);
  const { userData, getPosts } = useContext(DataContext);
  const [values, setValues] = useState({
    price: null,
    type: null,
    jobType: null,
    employment: null,
    location: null,
    title: null,
    jobDescription: null,
    picture: null,
    createdDate: Date.now(),
    gender: userData?.gender || null,
  });

  useEffect(() => {
    if (userData) setValues((prev) => ({ ...prev, gender: userData?.gender }));
  }, [userData]);

  const onImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setValues((prev) => ({ ...prev, picture: file }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setValues(null);
    }
  };

  const hasNull = () => {
    for (const value in values) {
      if (values[value] === null) return true;
    }

    return false;
  };

  const handlePost = () => {
    if (!hasNull()) {
      if (currentUser) post(values, currentUser.uid, () => getPosts());
    } else {
      toast.error("Please fill the Form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <JobPostingContainer>
      <form action="">
        <Row>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Job title"
            onChange={(e) => {
              e.persist();
              setValues((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </Row>
        <Row>
          <Col>
            <textarea
              name="post"
              id="post"
              cols="140"
              rows="3"
              placeholder="Job description..."
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  jobDescription: e.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
            <input
              type="number"
              name="salary"
              id="salary"
              placeholder="Salary in USD"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  price: e.target.value,
                }));
              }}
            />
          </Col>
          <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
            <select
              className="post-select"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  type: Number(e.target.value),
                }));
              }}
            >
              <option selected disabled>
                You are a(n)
              </option>
              <option value={1}>Employer</option>
              <option value={2}>Jobseeker</option>
            </select>
          </Col>
          <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
            <select
              className="post-select"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  jobType: e.target.value,
                }));
              }}
            >
              <option selected disabled>
                Job type
              </option>
              <option value="Babysitter">Babysitter</option>
              <option value="Cleaner">Cleaner</option>
              <option value="Design">Design</option>
              <option value="Gardner">Gardner</option>
              <option value="Marketing">Marketing</option>
              <option value="Production">Production</option>
              <option value="TranslatorTranslator">Translator</option>
              <option value="Worker">Worker</option>
              <option value="open">open</option>
              <option value="Others">Others</option>
            </select>
          </Col>
          <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
            <select
              className="post-select"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  employment: e.target.value,
                }));
              }}
            >
              <option selected disabled>
                Employment
              </option>
              <option value="Contract">Contract</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </Col>
          {values.employment === "Contract" && (
            <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
              <input
                className="post-select"
                placeholder="Time"
                onChange={(e) => {
                  e.persist();
                  setValues((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }));
                }}
              />
            </Col>
          )}
          <Col style={{ flex: 1, minWidth: "120px", margin: "10px" }}>
            <select
              className="post-select"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  location: e.target.value,
                }));
              }}
            >
              <option selected disabled>
                Location
              </option>
              <option value="Erbil">Erbil</option>
              <option value="Duhok">Duhok</option>
              <option value="Halabja">Halabja</option>
              <option value="Kerkuk">Kerkuk</option>
              <option value="Sulaymaniyah">Sulaymaniyah</option>
            </select>
          </Col>
        </Row>
        <Row justify="space-between" align="middle" className="btn-row">
          <input type="file" onChange={(e) => onImageChange(e)} />
          <button
            className="post-btn"
            type="button"
            onClick={() => handlePost()}
          >
            Post
          </button>
        </Row>
      </form>
    </JobPostingContainer>
  );
};

export default JobPostingForm;
