// JokeDisplay.jsx
import React from 'react';

function JokeDisplay({ joke }) {
    if (!joke) {
        return <p>No joke to display.</p>; // Handle case where joke is null/undefined
    }

    return (
        <div className="joke-container">
            {joke.category && <p className="joke-category">Category: {joke.category}</p>}
            {joke.setup && <p className="joke-setup">{joke.setup}</p>}
            <p className="joke-punchline">{joke.delivery || joke.punchline}</p>
        </div>
    );
}

export default JokeDisplay;
