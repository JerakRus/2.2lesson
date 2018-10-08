import React from 'react';
import { createStore } from "redux";

import changePostReducer from "../../reducers/reducer";

// import addPosts from "../../actions/add";
// import deletePostaction from "../../actions/delete";
import changePost from "../../actions/change";

import { Navbar } from 'react-bootstrap'; 

// Nav, NavItem, NavDropdown, MenuItem

let store = createStore(changePostReducer);

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
        console.log(store.getState);

        store.dispatch(changePost("add Posts"));

        store.subscribe(() => {
            console.log('subscibe', store.getState());
            return store.getState();
        }) 



        // Next step, get  data from api, send this variable to componentDidMount
        const dataForBlog = this.state.blogPosts;

        let result = dataForBlog.map((items, index) => {
            return (
                <div id={items.id} /* userId={items.userId} */ key={index}>
                    <h1>{items.title}</h1>
                        <p>{items.body}</p>
                </div>
            ); 
        });
        

        return (
                <div>
                    {/* <Navbar> */}
                        { result }
                    {/* </Navbar> */}
                </div>
        )
    };
}

export default MainText;