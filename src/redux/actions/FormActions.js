import axios from 'axios';
import { 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  //FORM_RESET
} from '../../constants/ActionTypes';

export function formSubmitRequest(values) {
  return {
    type: FORM_SUBMIT,
    payload: { values }
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
    dispatch(formSubmitRequest(formValues));
    // console.log('about to post', formValues);
    // should add some authorization token here
    axios.post('/feeding', formValues)
      .then((response) => {
        console.log('this is the response from the api', response.data);
        const data = response.data;
        if (data.error) {
          dispatch(formSubmitFailure(data.error));
        } else {
          dispatch(formSubmitSuccess(data));  
        }
      })
      .catch((error) => {
        dispatch(formSubmitFailure(error))
      });
  };
};
