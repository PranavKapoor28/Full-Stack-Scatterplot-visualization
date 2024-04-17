import React, { useEffect, useState } from 'react';
import MyScatterPlot from './components/MyScatterPlot';
import './App.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080', {
      headers: {
        // Include the custom header as required
        'ngrok-skip-browser-warning': 'anyValue'
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Single Cell RNA Visualization</h1>
        {data ? (
          <div className="scatter-plot-container">
            <MyScatterPlot data={data} />
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
