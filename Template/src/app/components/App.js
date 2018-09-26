import React from 'react';
import Menu from "./Menu";
import MainText from "./MainText";
import Auth from "./Auth";


class App extends React.Component {
    render() {
        const menuItems = [
            { href: "/", title: "Main" },
            { href: "/about", title: "About" },
            { href: "/service", title: "Seriveces" },
            { href: "/contacts", title: "Contacts" },
        ];

        return (
            <div>
                <Auth />
                <ul><Menu titleMenu="Menu" items={ menuItems } /></ul>
                <br />
            </div>
        );
    }
}


export default App;