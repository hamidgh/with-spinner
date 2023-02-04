import React from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {hideSpinner, showSpinner} from '../../redux/sharedSlices/spinnerSlice';
import withSpinner from '../withSpinner/withSpinner';


const HomePage = () => {
  const dispatch = useDispatch();

  const _gotoPAccountPage = () => {
    dispatch(showSpinner());
    setTimeout(() => dispatch(hideSpinner()), 2000);
  };

  return (
    <Button onClick={_gotoPAccountPage}>Account</Button>
  );
};

export default withSpinner(HomePage);