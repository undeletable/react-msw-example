import React, { useState } from 'react';
import './App.css';
import { getAllProducts, getMultipleProducts, getSingleProduct } from './requests';

function App() {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const requestAndSetData = (requestFunction) => {
    setIsError(false);
    setIsLoading(true);
    requestFunction()
      .then(response => setOutput(response))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="App">
      <div className="App__buttons">
        <button onClick={() => requestAndSetData(getAllProducts)}>
          Fetch all products
        </button>
        <button onClick={() => requestAndSetData(getSingleProduct(1))}>
          Fetch product #1
        </button>
        <button onClick={() => requestAndSetData(getMultipleProducts(1, 2, 3))}>
          Fetch products #1, #2, #3
        </button>
      </div>
      <div className="App__result">
        {isLoading ? (
          'Loading...'
        ) : (
          <code>
            {isError ? 'Error' : JSON.stringify(output, null, 2)}
          </code>
        )}
      </div>
    </div>
  );
}

export default App;
