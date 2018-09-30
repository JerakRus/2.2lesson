import React from "react";
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';



class Menu extends React.Component {
    render() {
        // console.log(this.props);

        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>;
        });

        return (
            <div>
                <h1>{this.props.titleMenu}</h1>
                <ul className="nav navbar-nav">
                    {items}
                </ul>
                {this.props.children}
                
            </div>
        );
    }
}

Menu.defaultProps = {
    titleMenu: "Меню по умолчанию",
    items: []
};

//Проверка типов
Menu.propTypes = {
    titleMenu: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default Menu;