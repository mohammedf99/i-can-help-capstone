import * as React from "react";
import * as renderer from "react-test-renderer";
import ProfilePost from "../ProfilePost";

it("renders Navbar correctly", () => {
  const tree = renderer.create(<ProfilePost />).toJSON();
  expect(tree).toMatchSnapshot();
});
