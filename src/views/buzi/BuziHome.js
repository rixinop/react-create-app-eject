import React, { Component } from "react";

import Head from "../../component/Head";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
            globla: ""
        };
    }

    componentDidMount() {
        this.setState({
            globla: global.state
        });
    }

    // shouldComponentUpdate(nextProps, nextState) {}

    // componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    change() {
        this.setState({
            color: "red"
        });
    }

    render() {
        return (
            <div>
                <Head main={"业务子页面"} right={false} />
                <div className="h-body">
                    <div
                        onClick={this.change.bind(this)}
                        style={{ color: this.state.color }}>
                        业务子页面
                    </div>
                    <div>global:</div>
                    <div>{this.state.globla}</div>
                </div>
            </div>
        );
    }
}

export default Page;
