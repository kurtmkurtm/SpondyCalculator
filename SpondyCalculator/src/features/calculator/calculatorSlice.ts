import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
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
};

const SaveKey = "SpondyScore"

function SaveResponse(responses: IResponses) {
  var reponseString = JSON.stringify(responses);
  localStorage.setItem(SaveKey, reponseString);
}

function GetSavedOrDefault(): IResponses {
  var saved = localStorage.getItem(SaveKey);
  if (saved) {
    const parse = JSON.parse(saved);
    return parse as IResponses;
  }
  return zeroScore;
}

const zeroScore: IResponses = {
  q1: 0,
  q2: 0,
  q3: 0,
  q4: 0,
  q5: 0,
  q6: 0
};

const initialState: CalculatorState = {
  status: 'idle',
  ResponseValues: GetSavedOrDefault(),
  Score: calculate(GetSavedOrDefault()),
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.Score = action.payload;
    },
    setResponses: (state, action: PayloadAction<IResponses>) => {
      state.Score = calculate(action.payload);
      SaveResponse(action.payload);
    },
    resetResponses: (state) => {
      state.Score = 0;
      state.ResponseValues = { ...zeroScore};
      SaveResponse(zeroScore);
    },
  },
});

export const { setScore, setResponses, resetResponses } = calculatorSlice.actions;
export const selectResponseValues = (state: RootState) => state.calculator.ResponseValues;
export const selectScore = (state: RootState) => state.calculator.Score;
export default calculatorSlice.reducer;
