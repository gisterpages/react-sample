import React from 'react';
import Home from './components/home'
import { connect } from 'react-redux';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Home users={this.props}></Home>
    </div>
  );
  }
}

const mapStatetoProps = (state) => {
  return {
    users: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({
        type: 'GET_USERS',
        payload: {}
      })
    },
    getRandom: (user) => {
      dispatch({
        type: 'GET_RANDOM_USER',
        payload: user
      })
    },
    addUser: (data) => {
      dispatch({
        type: 'ADD_USER',
        payload: data
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: 'DELETE_USER',
        payload: index
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)
