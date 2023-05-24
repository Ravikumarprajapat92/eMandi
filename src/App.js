import './App.scss';
import ECash from './components/eCash/ECash';
import Navbar from './components/navbar';
import StatBar from './components/statBar/StatBar';
import WelcomeEmandi from './components/welcomeEmandi/WelcomeEmandi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <StatBar/>
      <ECash/>
      <WelcomeEmandi/>
    </div>
  );
}

export default App;
