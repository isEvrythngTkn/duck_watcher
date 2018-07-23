import axios from 'axios';
import { 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  //FORM_RESET
} from '../../constants/ActionTypes';

export function formSubmitRequest() {
  return {
    type: FORM_SUBMIT,
    payload: {}
  }
}

export function formSubmitSuccess(response) {
  return {
    type: FORM_SUBMIT_SUCCESS,
    payload: {}
  }
}

export function formSubmitFailure(error) {
  return {
    type: FORM_SUBMIT_FAILURE,
    payload: {error}
  }
}

export const formSubmit = (formValues) => {
  console.log('here we are');
  return (dispatch) => {
    dispatch(formSubmitRequest());
    // console.log('about to post', formValues);
    // should add some authorization token here
    axios.post('/feeding', formValues);
  };
};
