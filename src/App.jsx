// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokeDisplay from './JokeDisplay';
import './App.css'; // Import the CSS file


function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a new joke
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&safe-mode');
      setJoke(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // Initial joke fetch on component mount
  }, []);

  const handleNewJokeClick = () => {
    fetchJoke(); // Fetch a new joke when the button is clicked
  };

  if (loading) {
    return <div>Loading a joke...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <span className='font-link'>
      <div className="App">
        <JokeDisplay joke={joke} />
        <button onClick={handleNewJokeClick}>Get New Joke</button>
      </div>
    </span>
  );
}

export default App;
