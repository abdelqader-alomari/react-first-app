import React from 'react'

class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.allData.title}</h2>
                <img src={this.props.allData.source} alt={this.props.allData.title} title={this.props.allData.title} />
                <p>{this.props.allData.description}</p>
            </div >
        )
    }
}
export default HornedBeasts