import './App.scss';
import ECash from './components/eCash/ECash';
import EMandiTv from './components/eMandiTv/EMandiTv';
import EMandiNews from './components/eMandiNews/EMandiNews';
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
      <EMandiTv/>
      <EMandiNews/>
    </div>
  );
}

export default App;
