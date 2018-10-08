import React from "react";
import { Link } from "react-router";

import Input from "../presentational/Input";

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);        
    }

    handleChangeUsername(event) {
        this.setState({ 
            username: event.target.value
        });    
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    
    saveToLocalStorage() {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        // console.log(data)
        const localStr = JSON.stringify(data);
        localStorage.setItem('UsersData', localStr)
    }

    render() {
        const { username, password } = this.state;
        return (
                <div>
                    <Link to="auth">
                        <form className="form-signin" role="form" style={{float: "right"}}>
                            <Input
                                text="USERNAME"
                                label="username"
                                type="text" 
                                id="username"
                                name="username"
                                value={username}
                                handleChange={this.handleChangeUsername}
                            />
                            <Input
                                text="PASSWORD"
                                label="password"
                                type="text"
                                id="password"
                                name="password"
                                value={password}
                                handleChange={this.handleChangePassword}
                            />
                            <button type="submit" className="btn btn-primary" onClick={this.saveToLocalStorage}>
                                Sign in
                            </button>
                        </form>
                    </Link>
                </div>
        );
    }
}

export default Auth;