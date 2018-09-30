import React from 'react';
import Menu from "./Menu";
import Auth from "./Auth";
import MainText from './MainText';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false
        };

        this.handleShowAuth = this.handleShowAuth.bind(this);
    }

    handleShowAuth() {
        this.setState({
            display: true
        });
    }

    render() {
        const menuItems = [
            { href: "/", title: "Main" },
            { href: "/about", title: "About" },
            { href: "/service", title: "Seriveces" },
            { href: "/contacts", title: "Contacts" },
        ];


        return (
            <div>
                <div className="btnAuth">
                    <div type="submit" className="btn btn-primary" onClick={this.handleShowAuth}>AUTH</div>
                    { this.state.display ? <Auth /> : null }
                </div>
                <ul><Menu titleMenu="Main page" items={ menuItems } /></ul>
                <br />
                <MainText />
            </div>
        );
    }
}


export default App;