//an example of Class Component
import React from "react";
export default class EvenCounter extends React.Component {

    //ctor
    constructor(props) {
        super(props);

        this.state = { clicks: 0 };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {

        const clickNew = this.state.clicks + 1;
        this.setState({ clicks: clickNew });
        if (clickNew % 2 === 0) {
            this.props.onEvenClick(clickNew);
        }
    }


    render() {
        return <div>
            <h5>Even Counter (Class)</h5>
            <div onClick={this.clickHandler}>
                Clicked {this.state.clicks} times.
            </div>
        </div>
    }
}