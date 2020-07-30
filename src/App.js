import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import lightTheme from './themes/light.theme'
import { changeUnits } from './actions/settingsActions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Splash } from './components/Splash'
import { PlanBuilder } from './components/PlanBuilder'

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
      <Router>
        <ThemeProvider theme={lightTheme}>
          <div>
            <ul>
              <li>
                <Link to="/">Welcome</Link>
              </li>
              <li>
                <Link to="/plan-builder">Build Plan</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Splash />
              </Route>
              <Route path="/plan-builder">
                <PlanBuilder />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

