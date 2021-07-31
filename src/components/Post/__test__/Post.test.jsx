import * as React from "react";
import * as renderer from "react-test-renderer";
import Post from "../Post";

it("renders Post component correctly", () => {
  const tree = renderer.create(<Post />).toJSON();
  expect(tree).toMatchSnapshot();
});