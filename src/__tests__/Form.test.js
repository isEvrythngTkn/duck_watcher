import React from "react";
import { shallow, mount, render } from 'enzyme';
import FeedingForm from "../components/FeedingForm";

describe("<FeedingForm />", () => {
  it("renders the correct number of form groups", () => {
    expect(mount(<FeedingForm />).find('.form-group').length).toBe(6);
  });

  it("calls the right function on submit", () => {
    // todo
  });

  it("has the correct form values on submit", () => {
    // todo
  });
});