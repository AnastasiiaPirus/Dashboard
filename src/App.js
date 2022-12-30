//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <div className='Card-box'>
        <Header />
        <Card text = {"card1"} content ={"Graph"} />
        <Card text = {"card2"} /> 
        <Card text = {"card3"} />
        <Card text = {"card4"} />
        <Card text = {"card5"} />
        <Card text = {"card6"} />    
        <Card text = {"card7"} />          
      </div>
    </div>
  );
}

export default App;
