import React from 'react';

class Footer extends React.Component {
    footerFun() {
        alert('Thank you to explore my starter react site')
    }
    render() {
        return (
            <div className="bg-secondary text-white">
                <p onClick={this.footerFun}>&copy; Abdelqader Al-Omari</p>

            </div>
        )
    }
}

export default Footer