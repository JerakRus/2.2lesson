import React from 'react';

class DataDevelopers extends React.Component {
    constructor(props) {
        super(props);
        
        this.showTime = this.showTime.bind(this);
    }

    showTime = () => {
        const time = new Date();
        alert(time);
    }

    render() {
        return (
			<div>
				<h1>Name:</h1>
                <h1>Age: </h1>
                <button onClick={this.showTime}>Click me</button>
			</div>
        )
    }
}

export default DataDevelopers;