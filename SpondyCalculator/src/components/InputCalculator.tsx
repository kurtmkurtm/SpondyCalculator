import QuestionSchema from "../resources/questionSchema.json"
import UiSchema from "../resources/uiSchema.json"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DefaultEffects, IStackItemStyles, Stack } from '@fluentui/react';
import { withTheme } from '@rjsf/core';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { JSONSchema7 } from "json-schema";
import FloatRange from "./widgets/FloatRange";
import { selectResponseValues, setResponses } from "../features/calculator/calculatorSlice";
import TimeRange from "./widgets/TimeRange";

const Form = withTheme(FluentUITheme);
const inputStyles: IStackItemStyles = ({
    root: {
        background: 'rgb(255 255 255 / 80%)',
        boxShadow: DefaultEffects.elevation8,
        padding: '48px',
        '@media screen and (max-width: 768px)': { paddingTop: '18px'},
    }
});

export default function InputCalculator() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectResponseValues);
    const widgets = {
        FloatRange: FloatRange,
        TimeRange: TimeRange
    };
    return (
        <Stack styles={inputStyles}>
            <Form
                schema={QuestionSchema as JSONSchema7}
                uiSchema={UiSchema}
                widgets={widgets}
                onChange={({ formData }) => dispatch(setResponses(formData))}
                formData={data}>
                <div> </div>
            </Form>
        </Stack>
    )
}
