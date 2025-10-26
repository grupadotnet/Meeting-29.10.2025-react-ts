import { useState } from 'react';

import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <button
                onClick={() => setCount((previousCount) => previousCount + 1)}
            >
                Click me
            </button>

            <p>Current count: {count}</p>
        </div>
    );
};

export default App;
