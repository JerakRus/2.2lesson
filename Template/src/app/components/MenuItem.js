import React from "react";
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        return (
        <li>
            <a target="_blank" href={this.props.href}>{this.props.children}</a>
        </li>
        );
    }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    children: "Главная (страница по умолчанию)",
    href: "/"
};

export default MenuItem;