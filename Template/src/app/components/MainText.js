import React from 'react';
import { connect } from "react-redux";

import { Navbar } from 'react-bootstrap'; 
import addPost from '../../actions/add';
import deletePost from '../../actions/delete';
import changePost from '../../actions/change';


import store from "./store";

// Nav, NavItem, NavDropdown, MenuItem

// let store = createStore(changePostReducer);

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
                    blogPosts: result,
                })
            }
        )
    }

    render() {
        // console.log(store);
        const dataForBlog = this.state.blogPosts;
        // console.log("props", this.props);



        store.dispatch(addPost(dataForBlog));
        store.dispatch(deletePost("delete"));
        store.dispatch(changePost("change"));

        console.log(this.props);


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

function mapStateToProps(store) {
    // Не получается получить данные
    return {
        posts: store.addPost
    };
}


export default connect(mapStateToProps)(MainText);