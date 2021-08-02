import * as React from "react";
import * as renderer from "react-test-renderer";
import Footer from "../Footer";

it("renders Navbar correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
