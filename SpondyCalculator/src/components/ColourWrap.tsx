import { useAppSelector } from "../app/hooks";
import { selectScore } from "../features/calculator/calculatorSlice";
import * as chroma from 'chroma.ts'

export declare interface ColourWrapProps {
    children: React.ReactNode;
}

const flatGreen = '#0be881';
const flatOrange = '#ffc048';
const flatRed = '#ff5e57';

export default function ColourWrap({ children }: ColourWrapProps) {
    const score = useAppSelector(selectScore);
    var fraction = score / 10;
    var colour = chroma.scale(flatGreen, flatOrange, flatRed).mode("lrgb")(fraction).css();
    let colourStyle = {
        background: colour,
        minHeight: '100vh',
        margin: '-8px'
    };
    return (
        <div style={colourStyle}>{children}</div>
    )
}