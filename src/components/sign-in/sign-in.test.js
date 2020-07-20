import renderer from "react-test-renderer";
import React from "react";

import SignIn from "./sign-in.jsx";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
