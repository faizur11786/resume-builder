import React from 'react'
import {
    Route,
} from "react-router-dom";
import Home from '../container/Home';

const Routing = () => {
    return (
        <>
            <Route path="/" component={Home} />
        </>
    )
}

export default Routing
