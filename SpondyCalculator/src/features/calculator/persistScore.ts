import { IResponses } from "./calculatorSlice";

const SaveKey = "SpondyScore";

export const ZeroScore: IResponses = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0
  };

export function SaveResponse(responses: IResponses) {
  var reponseString = JSON.stringify(responses);
  localStorage.setItem(SaveKey, reponseString);
}

export function GetSavedOrDefault(): IResponses {
  var saved = localStorage.getItem(SaveKey);
  if (saved) {
    const parse = JSON.parse(saved);
    return parse as IResponses;
  }
  return ZeroScore;
}