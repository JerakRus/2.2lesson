import React from 'react';

import { Navbar } from 'react-bootstrap'; 

// Nav, NavItem, NavDropdown, MenuItem

class MainText extends React.Component {
    constructor() {
        super();
        
        this.state = {
            blogPosts: []
        };

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts") 
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    blogPosts: result
                })
            }
        )
    }

    render() {
        console.log(this.state.blogPosts);

        // Next step, get  data from api, send this variable to componentDidMount
        const dataForBlog = this.state.blogPosts;

        let result = dataForBlog.map((items, index) => {
            return (
                <div id={items.id} userId={items.userId} key={index}>
                    <h1>{items.title}</h1>
                        <p>{items.body}</p>
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