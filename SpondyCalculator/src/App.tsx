import InputCalculator from './components/InputCalculator';
import { IStackItemStyles, Stack, mergeStyleSets } from '@fluentui/react';
import Score from './components/Score';
import ColourWrap from './components/ColourWrap';
import Footer from './components/Footer';

const mainApp: IStackItemStyles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
};


const mainContentStyles: IStackItemStyles = mergeStyleSets({
  root: {
    minHeight: 'calc(100vh - 70px)',
    maxWidth: '768px',
    '@media screen and (min-width: 768px)': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  }
});

const stackFooterStyles: IStackItemStyles = mergeStyleSets({
  root: {
    height: '70px'
  }
});


function App() {
  return (
    <ColourWrap>
      <Stack horizontalAlign="center" styles={mainApp}>
        <Stack.Item grow styles={mainContentStyles}>
          <Stack horizontalAlign="center">
            <Stack.Item grow>
              <Score />
            </Stack.Item>
            <Stack.Item grow>
              <InputCalculator />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item styles={stackFooterStyles}>
          <Footer />
        </Stack.Item>
      </Stack >
    </ColourWrap >
  );
}

export default App;
