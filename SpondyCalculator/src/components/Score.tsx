import { DefaultEffects, IStackItemStyles, Stack } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import { useAppSelector } from '../app/hooks';
import { selectScore } from '../features/calculator/calculatorSlice';

const scoreStyles: IStackItemStyles = ({
  root: {
    width: '100vw',
    maxWidth: '768px',
    textAlign: 'center',
    padding: '16px',
    background: `linear-gradient(290deg,rgb(233 233 233 / 50%),rgb(233 233 233 / 0%))`,
    boxShadow: DefaultEffects.elevation8
  }
});

export default function Score() {
  const score = useAppSelector(selectScore);
  return (
    <Stack styles={scoreStyles}>
           <Text variant="medium">BASDAI Score</Text>
      <Text variant="mega">{`${score.toFixed(2)}`}</Text>      
    </Stack >
  );
}
