//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <div className='Card-box'>
        <Header />
        <Card text = {"1"} />
        <Card text = {"2"} /> 
        <Card text = {"3"} />
        <Card text = {"4"} />
        <Card text = {"5"} />
        <Card text = {"6"} />    
        <Card text = {"7"} />          
      </div>
    </div>
  );
}

export default App;
