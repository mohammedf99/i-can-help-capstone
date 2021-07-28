import * as React from "react";
import * as renderer from "react-test-renderer";
import JobPostingForm from "../JobPostingForm";

it("renders Navbar correctly", () => {
  const tree = renderer.create(<JobPostingForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
