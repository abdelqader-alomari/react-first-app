import React from 'react';

class Header extends React.Component {
    headerFun() {
        alert("Hello to starter react App")
    }
    render() {
        return (
            <div className='bg-dark text-white'>
                <h1 onClick={this.headerFun}>Horned Animals</h1>
            </div>
        )
    }
}

export default Header;