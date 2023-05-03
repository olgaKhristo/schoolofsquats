import './App.css';
import AddSquatsButton  from './AddSquatsButton';
import { useState } from 'react';


function App() {
  const [squatCount, setSquatCount] = useState(0);
function addSquart(squatNum){
  const newCount = squatCount + squatNum;
  setSquatCount(newCount)
}

  return (
    <div className="App">
      <h1>Heading here</h1>
      <img id='logo' src="https://i.ibb.co/ZfnfqHP/school-of-suats.png" style={{height:200, width:200}} alt='some img here' />
    <h2 className='squats-number-display'>You done {squatCount} squats so far. Keep it going!</h2>
      <section className='bth-here'>
     <AddSquatsButton numberOfSquats={1}/>
     <AddSquatsButton numberOfSquats={5}/>
     <AddSquatsButton numberOfSquats={10}/>
      <button className='reset-butn'>Reset button</button>


      </section>
    
    </div>
  );
}

export default App;
