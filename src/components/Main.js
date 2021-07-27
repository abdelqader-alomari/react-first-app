import React from 'react'
import HornedBeasts from './HornedBeasts'
import PostData from './data.json'
class Main extends React.Component {
    constructor() {
        super()
        this.state = { PostData: PostData }

    }
    mapping(i) {
        const hornedAnimals = i.map(hornedAnimal => <HornedBeasts
            source={hornedAnimal.image_url}
            title={hornedAnimal.title}
            description={hornedAnimal.description}
        />);
        return hornedAnimals;
    }

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3">
                {this.mapping(this.state.PostData)}
            </div>
        )
    }
}

export default Main