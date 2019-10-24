
import React, { Component } from "react";
import {
    BrowserRouter,
    Link,
    withRouter,
    Route,
    Switch
} from "react-router-dom";

// import PropTypes from "prop-types";
import Home from "./views/home/Home";
import BuziHome from "./views/buzi/BuziHome";
import { hot } from 'react-hot-loader';

class router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/buzi" component={BuziHome} />
            </Switch>
        );
    }
}

// router.propTypes = {};
export default hot(module)(router);
// export default router;
