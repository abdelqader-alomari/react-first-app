import React from 'react'
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicks: 0 }
    }

    clicking = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    render() {
        return (

            <div className="card" style={{
                width: "18rem", margin: "10px"
            }} >
                <h2>{this.props.title}</h2>
                <img onClick={this.clicking} src={this.props.source} alt={this.props.title} title={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p> Number of clicks "favored" 🧡 : {this.state.clicks}</p>
                    <button onClick={this.clicking} className="btn btn-primary">I like this horned Animal </button>
                </div>
            </div>

            //     <div className="container">
            //         <div className="card" style={{ width: "18rem" }}>
            //             <div className="card">
            //                 <h2>{this.props.title}</h2>
            //                 <div className="card-reader">
            //                     <img style={{ maxWidth: '100%' }} src={this.props.source} alt={this.props.title} title={this.props.title} />
            //                 </div>
            //             </div>
            //             <p className="card-body">{this.props.description}</p>
            //         </div>
            //     </div>
        )
    }
}
export default HornedBeasts