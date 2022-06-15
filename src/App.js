import './App.css'
import SlideButton from './components/buttons/check/slide-button/SlideButton';
import TickButton from './components/buttons/check/tick-button/TickButton';
import Search from './components/inputs/text/search/Search';


function App() {

  return (
    <div className="App">
      <SlideButton /> 
      <TickButton /> 
      <Search />  
    </div>  
  );
}

export default App;