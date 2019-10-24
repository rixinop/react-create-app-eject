import React from "react";
import "../style/home.scss";

export default class Buttom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.btnText,
            btnCanClick: this.props.canClick,
        }
    }

    componentDidMount() {

    }

    buttonClickListener() {
        this.props.onClick;
    }

    render() {
        const {buttonText, btnCanClick} = this.state;
        let buttonStyle = btnCanClick ? "common-button-view-style button-select-bg" : "common-button-view-style";
        let textStyle = btnCanClick ? "button-text-style button-select-text-color" : "button-text-style button-default-text-color";
        return <div className="common-btn-root-style">
            <div className={buttonStyle} onClick={this.buttonClickListener.bind(this)}>
                <span className={textStyle}>{buttonText}</span>
            </div>
        </div>
    }
}


