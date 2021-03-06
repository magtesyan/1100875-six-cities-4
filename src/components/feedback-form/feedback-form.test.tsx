import * as React from "react";
import * as renderer from "react-test-renderer";
import FeedbackForm from "./feedback-form";

const feedbackFormStatus = ``;
const hotelId = ``;

it(`Render Feedback Form`, () => {
  const tree = renderer
    .create(
        <FeedbackForm
          onSubmitFeedback={jest.fn()}
          hotelId={hotelId}
          feedbackFormStatus={feedbackFormStatus}
          onFeedbackFormChange={jest.fn()}
          feedbackSubmitBtnStatus={true}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
