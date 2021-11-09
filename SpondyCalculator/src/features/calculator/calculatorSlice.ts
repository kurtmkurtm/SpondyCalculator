import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { RootState } from '../../app/store';
import { GetSavedOrDefault, SaveResponse, ZeroScore } from './persistScore';
import { calculate } from './scoreCalculator';

export interface CalculatorState {
  ResponseValues: IResponses;
  Score: number;
  status: 'idle' | 'loading' | 'failed';
}

export interface IResponses {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
}

const initialState: CalculatorState = {
  status: 'idle',
  ResponseValues: GetSavedOrDefault(),
  Score: calculate(GetSavedOrDefault()),
};

const debouncedSave = _.debounce(SaveResponse, 250, { 'maxWait': 1000 });

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.Score = action.payload;
    },
    setResponses: (state, action: PayloadAction<IResponses>) => {
      state.Score = calculate(action.payload);
      debouncedSave(action.payload);
    },
    resetResponses: (state) => {
      state.Score = 0;
      state.ResponseValues = { ...ZeroScore};
      debouncedSave(ZeroScore);
    },
  },
});

export const { setScore, setResponses, resetResponses } = calculatorSlice.actions;
export const selectResponseValues = (state: RootState) => state.calculator.ResponseValues;
export const selectScore = (state: RootState) => state.calculator.Score;
export default calculatorSlice.reducer;
