import React from 'react';
import HornedBeast from './HornedBeasts';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PostData: this.props.PostData
        };
    }

    render() {
        return (
            <CardGroup id='group'>
                {
                    !this.props.filtered ? this.props.PostData.map((element, index) => (
                        <HornedBeast
                            title={element.title}
                            source={element.image_url}
                            description={element.description}
                            name={element.keyword}
                            key={index}
                            horns={element.horns}
                            showCard={this.props.showCard}
                        />
                    )) : this.props.filtered.map((element, index) => (
                        <HornedBeast
                            title={element.title}
                            source={element.image_url}
                            description={element.description}
                            name={element.keyword}
                            key={index}
                            horns={element.horns}
                            showCard={this.props.showCard}
                        />
                    ))
                }
            </CardGroup>
        );
    }
}


export default Main;