import React from "react";
import axios from "axios/index";


import UserProfile from "./User";


class PageUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
                this.setState({user: response.data});
            });
    }

    render() {
        return (
            <div>
                {this.state.user && <UserProfile {...this.state.user} />}
            </div>
        )
    }
}


export default PageUser;