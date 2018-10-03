import React from 'react';



import Menu from "./Menu";
import Auth from "./Auth";
import MenuItem from "./MenuItem";
import MainText from './MainText';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false
        };

        this.brand = "GLOB???!"

        this.handleShowAuth = this.handleShowAuth.bind(this);
    }

    handleShowAuth() {
        this.setState({
            display: true
        });
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        // const menuItems = [
        //     { href: "/", title: "Main" },
        //     { href: "/about", title: "About" },
        //     { href: "/service", title: "Seriveces" },
        //     { href: "/contacts", title: "Contacts" },
        // ];


        return (
            <div>
                <div className="btnAuth">
                    <div className="btn btn-primary" onClick={this.handleShowAuth}>AUTH</div>
                    { this.state.display ? <Auth /> : null }
                </div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>
                        Главная
                    </MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>
                        Пользователи
                    </MenuItem>
                    <MenuItem href="/posts" active={this.isActive('/posts')}>
                        Записи блога
                        {/* <MainText /> */}
                    </MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer>
                    <hr />
                    &copy: 2018
                </footer>
            </div>
        );
    }
}


export default App;