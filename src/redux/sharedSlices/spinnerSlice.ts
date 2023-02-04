import {createSlice} from '@reduxjs/toolkit';

export type SpinnerStateType = {
  shouldShowSpinner: boolean
}

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: {shouldShowSpinner: false},
  reducers: {
    showSpinner(state: SpinnerStateType) {
      state.shouldShowSpinner = true;
    },
    hideSpinner(state: SpinnerStateType) {
      state.shouldShowSpinner = false;
    }
  }
});

export const {showSpinner, hideSpinner} = spinnerSlice.actions;
export default spinnerSlice.reducer;