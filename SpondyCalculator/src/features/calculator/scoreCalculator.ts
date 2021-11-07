/*
Scoring the BASDAI
Measure each question from ‘None’ to the patient’s mark in centimetres.
Add Q5 and Q6 and divide by 2 = A
Add Q1, Q2, Q3 and Q4 = B
Add A and B and divide by 5 = Score

Source: https://www.servicesaustralia.gov.au/sites/default/files/pb073-2110en-f.pdf
*/

import { IResponses } from "./calculatorSlice";

export function calculate(input: IResponses): number {
    const A = (input.q5 + input.q6) / 2;
    const B = (input.q1 + input.q2 + input.q3 + input.q4);
    var Score = (A + B) / 5;
    return Score;
}