import React from 'react';
import User from "./User";


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    users: result
                });
            }
        )
    }

    render() {
        if(!this.state.users) {
            return null;   
        }

        let users = this.state.users.map((users, key) => {
            return <User key={key} {...users} />
        })

        return (
            <div>
                <h1>USERS</h1>
                    {users}
            </div>
        );
    }
}


export default UserList;