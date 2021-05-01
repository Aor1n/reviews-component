import { ReviewCard } from './components'
import './styles/main.scss'

function App() {
  return (
    <div 
    className="App" 
    style={{ 
      background: '#E5E5E5', 
      width: '100%',
      padding: '40px',
      }}
    >
      <header className="App-header">
      </header>
      <ReviewCard />
    </div>
  );
}

export default App;
