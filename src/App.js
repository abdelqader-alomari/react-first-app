import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import PostData from './components/data.json';
import DataForm from './components/DataForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PostData: PostData,
      show: false,
      chosen: null,
      filtered: null,
      selected: {}
    };
  }

  HornedCardShowing = (select) => {
    this.setState({
      show: true,
      selected: select
    });
  }
  hideCard = () => {
    this.setState({
      show: false,
    });
  }

  filterData = (form) => {
    if (form === 0) {
      this.setState({ filtered: null })
    } else {
      let filteredArr = this.state.PostData.filter(element => element.horns === form);
      this.setState({ filtered: filteredArr })
    }
  }

  render() {
    return (
      <div >
        <Header />
        < DataForm filterData={this.filterData} />
        <Main PostData={this.state.PostData} filtered={this.state.filtered} showCard={this.HornedCardShowing} />
        <SelectedBeast show={this.state.show} hide={this.hideCard} selected={this.state.selected} />
        <Footer />
      </div>
    );
  }
}

export default App;