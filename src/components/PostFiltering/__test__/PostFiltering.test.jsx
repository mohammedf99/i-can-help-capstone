import * as React from "react";
import * as renderer from "react-test-renderer";
import PostFiltering from "../PostFiltering";

it("renders Post filtering correctly", () => {
  const tree = renderer.create(<PostFiltering />).toJSON();
  expect(tree).toMatchSnapshot();
});