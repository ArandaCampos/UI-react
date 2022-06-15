import './App.css'
import SlideButton from './components/buttons/check/slide-button/SlideButton';
import TickButton from './components/buttons/check/tick-button/TickButton';
import Search from './components/inputs/text/search/Search';
import Password from './components/inputs/password/Password';

function App() {

  return (
    <div className="App">
      <SlideButton /> 
      <TickButton /> 
      <Search /> 
      <Password /> 
    </div>  
  );
}

export default App;