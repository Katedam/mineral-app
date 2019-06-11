import React, { PureComponent } from 'react';
import Minerals from './Minerals';
import { getMinerals } from './services/mineral-api';

class Home extends PureComponent {
  state = {
    minerals: []
  }

  componentDidMount() {
    getMinerals()
      .then(minerals => this.setState({ minerals }))
  }

  render() {
    const minerals = this.state.minerals;
    return(
      <Minerals minerals={minerals}/>
    )
  }
}

export default Home;
