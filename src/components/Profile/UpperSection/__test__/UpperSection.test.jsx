import * as React from "react";
import * as renderer from "react-test-renderer";
import UpperSection from "../UpperSection";

it("renders Profile upper section correctly", () => {
  const tree = renderer.create(<UpperSection />).toJSON();
  expect(tree).toMatchSnapshot();
});