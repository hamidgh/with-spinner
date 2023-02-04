import {configureStore} from '@reduxjs/toolkit';
import spinnerReducer, {SpinnerStateType} from './sharedSlices/spinnerSlice';

export type AppStateType = {
  spinner: SpinnerStateType
}
export default configureStore({
  reducer: {
    spinner: spinnerReducer
  }
});