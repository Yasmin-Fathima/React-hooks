import './App.css';
import {Routes,Route, Link} from 'react-router-dom';
import AddSubtract from './Components/AddSubtract';
import Color from './Components/Color';
import Counter from './Components/Counter';
import PrevElement from './Components/PrevElement';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Link to='/'><h1>React Hooks</h1></Link>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/color' Component={Color}/>
        <Route path='/counter' Component={Counter}/>
        <Route path='/prevElement' Component={PrevElement}/>
        <Route path='/addSubtract' Component={AddSubtract}/>
      </Routes>
    </div>
  );
}

export default App;
