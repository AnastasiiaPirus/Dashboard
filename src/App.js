//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Child2 from './Card/Childs/Child2';
import Child3 from './Card/Childs/Child3';
import Child4 from './Card/Childs/Child4';
import Child5 from './Card/Childs/Child5';
import Child6 from './Card/Childs/Child6';
import Child7 from './Card/Childs/Child7';
import Child8 from './Card/Childs/Child8';

function App() {
  return (
    <div className="App">
      <div className='Card-box'>
        <Header />
        <div className='image-container'>
          <Card text={"card1"} content={Child2} objHeight={1} />
          </div>
        
        <Card text={"card2"} content={Child3} objHeight={1} />
        <Card text={"card3"} content={Child4} objHeight={2} />
        <Card text={"card4"} content={Child5} objHeight={3} />
        <Card text={"card5"} content={Child6} objHeight={3} />
        <Card text={"card6"} content={Child7} objHeight={3} />
        <Card text={"card7"} content={Child8} objHeight={3} />
      </div>
    </div>
  );
}

export default App;
