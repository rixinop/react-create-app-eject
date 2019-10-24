import React, { Component } from "react";
import message from "../../component/message";
import Head from "../../component/Head";
import Loading from "../../component/Loading";
import tools from "../../utils/tools"

import rightIcon from "../../images/head/ic_edit_nickname.png";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
            loading: true
        };
    }

    componentDidMount() {

        tools.get('/international-master/international/app/get-note', undefined, (res) => {
            console.log(res);
            this.setState({
                loading: false
            });
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {}

    // componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() { }

    change() {
        this.setState({
            color: "red"
        });
    }

    setGlobal() {
        console.log("设置global");
        global.state = 10086;
    }

    tips() {
        message("tips");
    }

    loading() {
        this.setState({
            loading: true
        });
    }

    render() {
        const { color, loading } = this.state;
        return (
            <div>
                {loading ? <Loading /> : null}
                <Head main={"首页"} right={rightIcon} left={false} />
                <div className="h-body">
                    <div onClick={this.change.bind(this)} style={{ color }}>
                        首页
                    </div>
                    <div onClick={() => this.props.history.push("/buzi")}>
                        跳转
                    </div>
                    <div onClick={this.setGlobal.bind(this)}>设置global</div>
                    {/* <img src={LoadSvg} alt="" /> */}
                    <div onClick={this.tips.bind(this)}>弹出tips</div>
                    <div onClick={this.loading.bind(this)}>弹出loading</div>
                    <div>hello</div>
                </div>
            </div>
        );
    }
}

export default Home;
