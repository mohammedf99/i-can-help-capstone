import * as React from "react";
import * as renderer from "react-test-renderer";
import ProfilePost from "../ProfilePost";

it("renders Profile post correctly", () => {
  const tree = renderer.create(<ProfilePost />).toJSON();
  expect(tree).toMatchSnapshot();
});
