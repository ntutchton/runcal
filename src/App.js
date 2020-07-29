import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { action } from './actions/action';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  d_action: () => dispatch(action())
})

class App extends React.Component {

  reduxAction = (event) => {
    this.props.d_action();
   }

  render(){
    return (
      <div className="app_global">
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.reduxAction}>Test redux action</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

