import logo from './logo.svg';
import './App.css';
import react, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState ('');
  const [count, setCount] = useState (0);

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => 
        setQuote(response.data[0]))
  }, [count])

  return (
    <div className="App">
      <p>{quote.quote}</p>
      <p>{quote.characters}</p>
      <img src={quote.image}></img>
      <button type="button" onClick={() => setCount((count) => count+1)}>NewQuoteSimpsooons</button>
    </div>
  );
}

export default App;
