import React from 'react';
import ResList from './components/resList';
import './styles.css';



const App = () => {
    return (
        <div>
          
            <h1>Top 10 Restaurants in Wooster</h1>
            <ResList/>
        </div>
    );
}

export default App;