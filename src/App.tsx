import  { useState, useEffect } from 'react';
import {
  WelcomeScreen,
  PuzzleGame,
  RunnerGame,
  FinalQuestion,
  VictoryPage,
} from './components';
import { getUrlParams } from './utils/urlParams';

type GameState =
  | 'welcome'
  | 'puzzle'
  | 'runner'
  | 'final'
  | 'victory';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [senderName, setSenderName] = useState('Someone Special');
  const [receiverName, setReceiverName] = useState('My Love');

  useEffect(() => {
    const { senderName: sender, receiverName: receiver } = getUrlParams();
    setSenderName(sender);
    setReceiverName(receiver);
  }, []);

  const handleGameFlow = {
    startGame: () => setGameState('puzzle'),
    completePuzzle: () => setGameState('runner'),
    completeRunner: () => setGameState('final'),
    acceptProposal: () => setGameState('victory'),
  };

  return (
    <div className="w-full">
      {gameState === 'welcome' && (
        <WelcomeScreen
          senderName={senderName}
          receiverName={receiverName}
          onStart={handleGameFlow.startGame}
        />
      )}
      {gameState === 'puzzle' && (
        <PuzzleGame onComplete={handleGameFlow.completePuzzle} />
      )}
      {gameState === 'runner' && (
        <RunnerGame onComplete={handleGameFlow.completeRunner} />
      )}
      {gameState === 'final' && (
        <FinalQuestion
          senderName={senderName}
          receiverName={receiverName}
          onYes={handleGameFlow.acceptProposal}
        />
      )}
      {gameState === 'victory' && (
        <VictoryPage senderName={senderName} receiverName={receiverName} />
      )}
    </div>
  );
}

export default App;
