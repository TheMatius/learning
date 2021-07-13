import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get('/.netlify/functions/helloWorld');
    return data.message;
  };

  useEffect(() => {
    fetchData()
      .then(setMessage);
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
