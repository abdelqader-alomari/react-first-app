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
        const hornedAnimals = this.state.PostData.map(element => {
            return (
                <HornedBeast
                    title={element.title}
                    source={element.image_url}
                    description={element.description}
                    showCard={this.props.showCard}
                />
            );
        });
        return (<CardGroup id='group'>{hornedAnimals}</CardGroup>);

    }
}

export default Main;