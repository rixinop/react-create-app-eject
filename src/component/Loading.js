import React from "react";
// import { Link } from "react-router-dom";
// import tools from "../utils/tools";
import LoadSvg from "../images/loading.svg";

class Cpt extends React.Component {
    static defaultProps = {};

    render() {
        return (
            <div className="loading">
                <div className="loading-main">
                    <img src={LoadSvg} alt="" />
                    <span>加载中...</span>
                </div>
            </div>
        );
    }
}

export default Cpt;
