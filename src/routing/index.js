import React from 'react'
import {
    Route,
} from "react-router-dom";
import Home from '../container/Home';
import ViewResume from '../container/ViewResume';

const Routing = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/viewer" component={ViewResume} />
        </>
    )
}

export default Routing
