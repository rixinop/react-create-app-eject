import React from "react";
// import { Link } from "react-router-dom";
// import tools from "../utils/tools";
import backIcon from "../images/head/back.png";

class Head extends React.Component {
    static defaultProps = {
        onLeftClick: () => {
            console.log(">>>> onLeftClick");
            window.history.go(-1);
        },
        onRightClick: () => {
            console.log(">>>> onRightClick");
        },
        onMainClick: () => {
            console.log(">>>> onMainClick");
        },
        left: backIcon,
        main: false,
        right: false
    };

    render() {
        return (
            <div className="m-head">
                {this.props.left ? (
                    <div className="head-l" onClick={this.props.onLeftClick}>
                        <img src={this.props.left} alt="" />
                    </div>
                ) : null}
                {this.props.main ? (
                    <div className="head-m" onClick={this.props.onMainClick}>
                        {this.props.main}
                    </div>
                ) : null}
                {this.props.right ? (
                    <div className="head-r" onClick={this.props.onRightClick}>
                        {this.props.right.length < 100 ? (
                            <span>{this.props.right}</span>
                        ) : (
                            <img src={this.props.right} alt="" />
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Head;
