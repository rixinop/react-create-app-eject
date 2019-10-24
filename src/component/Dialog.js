import React from 'react'

export default class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cancel: this.props.cancelText,
            sure: this.props.sureText,
            content: this.props.cententText,
            subtext: this.props.subtext || '',
            title: this.props.title || ''
        };
    }

    componentDidMount() {

    }


    onCancelClick(e) {
        if (this.props.onCancelClick) {
            this.props.onCancelClick(e);
        }
    }

    onSureClick(e) {
        if (this.props.onSureClick) {
            this.props.onSureClick(e);
        }
    }

    render() {
        const { cancel, sure, content, subtext, title } = this.state;
        return (
            <div className="dialog-root-style">
                <div className="dialog-bg"></div>
                <div className="dialog-parent-style">
                    <div className="content-div-style">
                        <span className="tip-title">{title}</span>
                        <span className="content">{content}</span>
                        <span className="subtext">{subtext}</span>
                    </div>
                    <div className="dialog-line"></div>
                    <div className="dialog-action-button">
                        <span className="dialog-cancel" onClick={this.onCancelClick.bind(this)}>{cancel}</span>
                        <div className="dialog-line-2"></div>
                        <span className="dialog-sure" onClick={this.onSureClick.bind(this)}>{sure}</span>
                    </div>
                </div>

            </div>
        );
    }
}