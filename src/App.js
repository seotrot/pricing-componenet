import { Box, CssBaseline } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import styled from 'styled-components'
import './App.css'
import Pricing from './components/Pricing/Pricing'

function App() {
  return (
    <>
      <ScopedCssBaseline>
        <AppContainer>
          <Box display={'flex'} justifyContent='center'>
            <Pricing />
          </Box>
        </AppContainer>
      </ScopedCssBaseline>
    </>
  )
}

export default App

const AppContainer = styled.div`
  background: url('images/bg-pattern.svg');
  background-repeat: no-repeat;
  background-size: contain;
`
