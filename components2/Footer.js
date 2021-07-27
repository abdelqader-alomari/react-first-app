import React from 'react';

class Footer extends React.Component {
    footerFun() {
        alert('Thank you to explore my starter react site')
    }
    render() {
        return (
            <p onClick={this.footerFun}>&copy; By Abdelqader Al-Omari</p>
        )
    }
}

export default Footer