import React from 'react';

class Header extends React.Component {
    headerFun() {
        alert("Hello to starter react App")
    }
    render() {
        return (
            <h1 onClick={this.headerFun}>Horned Animals</h1>
        )
    }
}

export default Header;