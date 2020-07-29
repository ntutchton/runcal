import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeUnits } from './actions/settingsActions';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  changeUnits: (unit) => dispatch(changeUnits(unit))
})

class App extends React.Component {

  changeUnits = (event) => {
    this.props.changeUnits('mi');
   }

  render(){
    return (
      <div className="app_global">
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.changeUnits}>Test redux action</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

