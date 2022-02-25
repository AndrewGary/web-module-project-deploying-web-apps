import './App.css';
import GameBoard from './components/GameBoard';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <StyledApp>
      <GameBoard />
    </StyledApp>
    
  );
}

export default App;
