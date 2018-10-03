import React from "react";
import UsersList from "./UserList"


class PageUsers extends React.Component {



    render() {
        return (
            <div>
                {(!this.props.children) ? 
                    (<UsersList />) :
                    (this.props.children)}
            </div>
        )
    }
}


export default PageUsers