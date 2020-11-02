import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';



const App = () => {
    const [ loading, setLoading ] = useState(true);
    // [ jobs, setJobs ] = useState([]);
    // [ value, setValue ] = useState(0);

    if(loading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        );
    }

    return <h1>App</h1>
};

export default App;