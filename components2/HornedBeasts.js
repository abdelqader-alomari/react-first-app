import React from 'react'
class HornedBeasts extends React.Component {

    showBeastInModal = () => {
        this.props.showBeastInModal(this.props.title);
    };

    // constructor(props) {
    //     super(props);
    //     this.state = { clicks: 0 }
    // }

    // clicking = () => {
    //     this.setState({
    //         clicks: this.state.clicks + 1
    //     });

    //     this.props.handleClick({
    //         title: this.props.title,
    //         description: this.props.description,
    //         image_url: this.props.source
    //     })
    // }


    render() {
        return (
            <div className="col mb-4">
                <div onClick={this.showBeastInModal} className="card" style={{
                    width: "25rem", margin: "10px", height: "32rem"
                }} >
                    <h2>{this.props.title}</h2>
                    <img onClick={this.showBeastInModal} style={{ height: "15rem", width: "100%" }} src={this.props.source} alt={this.props.title} title={this.props.title} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p> Number of clicks "favored" 🧡 :</p>
                        <button className="btn btn-primary">I like this horned Animal </button>
                    </div>
                </div>
            </div >

        )
    }
}
export default HornedBeasts