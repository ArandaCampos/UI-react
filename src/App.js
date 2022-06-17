import './App.css'
import SlideButton from './components/buttons/check/slide-button/SlideButton';
import TickButton from './components/buttons/check/tick-button/TickButton';
import Search from './components/inputs/text/search/Search';
import Password from './components/inputs/password/Password';
import Typing from './components/texts/typing/Typing';
import DarkCard from './components/cards/dark/DarkCard';
import InputLabel from './components/inputs/text/labelAnimation/InputLabel';

function App() {

  return (
    <div className="App">
      <SlideButton /> 
      <TickButton /> 
      <Search /> 
      <Password />
      <Typing text="Bem-vindo(a) ao site!" /> 
      <DarkCard title="Título 1" description="Características *** "/>
      <InputLabel label="Username"/>
    </div>  
  );
}

export default App;