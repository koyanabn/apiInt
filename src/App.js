import React, { useState } from 'react'; //react hook, allows us to track state in a function component
import { chartDiv } from './chart.js';

function App() {
  // State to store the fetched data
  const [data, setData] = useState(null); //initial state of useState is 'null' (by default) 
  //then it will be 'data' , 'setData' is the function which will update the state of useState

  const fetchData = async () => { //function to fetch data from the server
    try {
      const response = await fetch('https://wild-cyan-bream.cyclic.app/api/koyana');
      // const response = await fetch('https://ill-plum-frog-robe.cyclic.app/api/yash');
      //fetch starts a request and returns a promise
      //if the request gets completed, the promise is resolved with the Response object
      //if the request fails, the promise is rejected.
      const jsonData = await response.json(); //returns a promise resolved to a JSON object

      setData(jsonData); //update state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error); //if it gets error, the error will be handled here
    }
  };
  const fetchGraphData = async () => { //function to fetch data from the server
    try {
      const response = await fetch('https://wild-cyan-bream.cyclic.app/api/koyana');
      // const response = await fetch('https://ill-plum-frog-robe.cyclic.app/api/yash');
      //fetch starts a request and returns a promise
      //if the request gets completed, the promise is resolved with the Response object
      //if the request fails, the promise is rejected.
      const jsonGraphData = await response.json(); //returns a promise resolved to a JSON object

      setData(jsonGraphData); //update state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error); //if it gets error, the error will be handled here
    }
  };

  return (
    <div>
      <h1>API trial using cyclic(backend) and Netlify(frontend)</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick = {fetchGraphData}>Fetch Graph Data</button>
      {/* function call to fetch data */}
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          {/* When sending data to a web server, the data has to be a string.
          Convert a JavaScript object into a string with JSON.stringify(). */}
        </div>
      )}
      <div id="chartDiv" style="width:50%; height:300px; margin:0 auto;"></div>
    </div>
  );
}

export default App;
// export default chart;
// it's used to export functions, objects, classes or expressions from script files or modules