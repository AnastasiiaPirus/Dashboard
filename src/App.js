//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Child from './Card/Child/Child';
import Child2 from './Card/Child/Child2';

function App() {
  return (
    <div className="App">
      <div className='Card-box'>
        <Header />
        <Card text={"card1"} content={Child2} objHeight={1} />
        <Card text={"card2"} content={Child2} objHeight={1} />
        <Card text={"card3"} content={Child2} objHeight={2} />
        <Card text={"card4"} content={Child} objHeight={3} />
        <Card text={"card5"} content={Child2} objHeight={3} />
        <Card text={"card6"} content={Child2} objHeight={3} />
        <Card text={"card7"} content={Child2} objHeight={3} />
      </div>
    </div>
  );
}

export default App;
