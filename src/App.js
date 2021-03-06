import React from 'react';
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
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Splash } from './components/Splash'
import { PlanBuilder } from './components/PlanBuilder'
import { PlanViewer } from './components/PlanViewer'

//react-dates stuff
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './themes/react-dates-overrides.css';

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
          <DndProvider backend={HTML5Backend}>
            <div>
              <ul>
                <li>
                  <Link to="/">Welcome</Link>
                </li>
                <li>
                  <Link to="/plan-builder">Build Plan</Link>
                </li>
                <li>
                  <Link to="/plan-viewer">View Plan</Link>
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
                <Route path="/plan-viewer">
                  <PlanViewer />
                </Route>
              </Switch>
            </div>
        </DndProvider>
      </ThemeProvider>
    </Router>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

