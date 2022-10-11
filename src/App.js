import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  
  const [deals, setDeals] = useState (data);
  const removeDeal = (id) => {
    let newDeals = deals.filter(deal => deal.id !==id);
    setDeals (newDeals);
  }

  return (
    <div>
      <div className='container'>
        <h1>My Bucket List of {deals.length} Deals</h1>
      </div>
      {deals.map((element => {
        const {id, deal, image} = element;
        return(
          <div className='main' key = {id}>
            <div className='container'>
              <h2>{id} - {deal}</h2>
            </div>
            <div className='container'>
              <img src={ image } alt={deal} width="400px"/>
            </div>
            <div className='container'>
              <button className='btn remove' onClick={() => removeDeal(id)}>REMOVE</button>
            </div>
          </div>
        )
      }))
      }
      <div className='container'>
        <button className='btn delete' onClick={()=> setDeals([])}>DELETE ALL</button>
      </div>
    </div>
  );
}

export default App;
