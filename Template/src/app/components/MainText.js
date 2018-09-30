import React from 'react';

import { Navbar } from 'react-bootstrap'; 

// Nav, NavItem, NavDropdown, MenuItem

class MainText extends React.Component {

    render() {
        // Next step, get  data from api, send this variable to componentDidMount
        const dataForBlog = [
            { title: "test", text: "test" },
            { title: "test1", text: "test1" },
            { title: "test3", text: "test3" },
            { title: "test4", text: "test4" },
            { title: "test5", text: "test5" },
        ];

        let result = dataForBlog.map((items, index) => {
            return (
                <div key={index}>
                    <h1>{items.title}</h1>
                        <p>{items.text}</p>
                </div>
            ); 
        });
        

        return (
                <div className="title">
                    <Navbar>
                        { result }
                    </Navbar>
                </div>
        )
    };
}

export default MainText;