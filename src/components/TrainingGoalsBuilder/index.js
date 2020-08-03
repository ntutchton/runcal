import React from 'react'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withTheme, withStyles } from '@material-ui/core/styles';
import {NumberFormatDistance} from '../shared/numberFormatInput.component'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import InfoButton from '../shared/infoButton.component'
import moment from 'moment'
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import Switch from '@material-ui/core/Switch';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import { updateTrainingPlan } from '../../actions/planActions';
// import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        background: theme.palette.grey[100],
        margin: '0 10%',
        borderRadius: '2px',
        paddingBottom: theme.spacing(5)
    },
    centered: { justifyContent: 'center'},
    form_wrapper: {
        margin: '0 20%',
        display: 'flex',
        flexDirection: 'column',
    },
    text_field: {
        margin: theme.spacing(2)
    },
    checkbox_label: {
        marginRight: 0,
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    date_picker_label: {
        paddingLeft: `5px`,
        paddingRight: '5px',
        position: 'absolute',
        transform: 'translate(20px, -9px) scale(0.95)',
        zIndex: 999,
        color: 'rgba(0, 0, 0, 0.54)',
        background: theme.palette.grey[100]
    },
    cancel_icon: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    date_picker_container: {
        marginLeft: theme.spacing(2),
        border: '1px solid #c4c4c4',
        borderRadius: '4px 0 0 4px',
        borderRight: 'none',
    },
    icon_button_container: {
        border: '1px solid #c4c4c4',
        borderRadius: '0 4px 4px 0',
        borderLeft: 'none',
    },
    switch_container:{
        marginLeft: 'auto',
        alignSelf: 'center'
    },
    helperText: {
        marginLeft: '28px',
        marginRight: '14px',
        color: 'rgba(0, 0, 0, 0.54)',
        marginTop: '3px',
    },
    // save_button_wrapper: {
    //     textAlign: 'right',
    //     padding: theme.spacing(5),
    //     margin: '0 10%'
    // },
});


const mapStateToProps = state => ({
    // trainingWeek: state.plans[state.system.activePlan].trainingWeek,
    activePlan: state.system.activePlan,
    plan: state.plans[state.system.activePlan],
    unit: state.system.preferredUnit
})
  
const mapDispatchToProps = dispatch => ({
    updateTrainingPlan: (trainingPlan,  index) => dispatch(updateTrainingPlan(trainingPlan, index))
})


class TrainingGoalsBuilder extends React.Component {

    state = {
        plan: this.props.plan,
        focusedInput: null,
        openEnded: false
    }

    componentDidUpdate(prevProps, prevState){
        //if the state has changed from previous not is not equal to the current (or default) props
        if ((this.state !== this.prevState) && (this.props.plan !== this.state.plan)){
            this.updateTrainingPlan()
        }

    }

    //specific handler because toggling on openended wasnt nulling out the enddate in state
    toggleOpenEnded = e => {
        if (!this.state.openEnded){
            this.setState({
                ...this.state,
                plan: {
                    ...this.state.plan,
                    term: {
                        startDate: this.state.plan.term.startDate, 
                        endDate: null
                    }
                }, 
                openEnded: !this.state.openEnded
            })
        } else {
            this.setState({
                ...this.state, 
                openEnded: false
            })
        }
    }

    //where key is the main key in state object, (ie "term", "goal", "current")
    updatePlan = (e, key) => {
        if (key){
            this.setState({
                ...this.state,
                plan:{
                    ...this.state.plan,
                    [key]: {
                        [e.target.name]: e.target.value
                    }
                }
            })
        } else {
            this.setState({
                ...this.state,
                plan: {
                    ...this.state.plan, 
                    [e.target.name]: e.target.value
                }
            })
        }
    };

    updateTrainingPlan = event => {
        this.props.updateTrainingPlan(this.state.plan, this.props.activePlan)
    }   

    //specifc for date (term) changes because of weirdness with the date picker event
    updateDates = e => {
        this.setState({
            ...this.state,
            plan: {
                ...this.state.plan,
                term: e
            }
        })
    }

    //specific for doing boolean changes in state.plan, as getting weird erros when trying to do the
    //same actions through 'updatePlan'
    toggleChange = e => {
        this.setState({
            ...this.state,
            plan: {
                ...this.state.plan,
                [e.target.name]: !this.state.plan[e.target.name]
            }
        })
    }
    
    render(){
        const {classes} = this.props;


        return(                
            <div className={classes.root}>
                {/* <Typography align="center" variant="h4" component="div">
                    Training Goals
                </Typography> */}
                <div className={classes.form_wrapper}>

                <FormGroup row className={classes.centered}>
                    <FormControlLabel
                        className={classes.checkbox_label}
                        control={
                        <Checkbox
                            checked={this.state.plan.recoveryWeeks}
                            onChange={this.toggleChange}
                            name="recoveryWeeks"
                            color="primary"
                        />
                        }
                        label="Use Recovery Weeks" />
                        <span>
                            <InfoButton
                            title="What are recovery weeks?"
                            text="Recovery weeks are periods where runners strategically decrease milage in order to prevent injury.  
                            Typically taken every 3 or 4 weeks, a recovery week adheres to the same schedule as a training week, but has less total intensity/milage than a normal week.  
                            Creating a training plan without recovery weeks puts the runner at serious risk of developing a stress-related injury."/>
                        </span>                    
                        
                    <FormControlLabel
                        className={classes.checkbox_label}
                        control={
                        <Checkbox
                            checked={this.state.plan.tenPercentRule}
                            onChange={(this.toggleChange)}
                            name="tenPercentRule"
                            color="primary" />
                        }
                        label="Use the 10% Rule (10PR)" />
                        <span>
                            <InfoButton
                            title="What is the 10% Rule (10PR)?"
                            text="Under the 10PR, runners should never increase their total weekly milage by more than 10% of the previous week's total milage.
                            This is a good guideline for preventing injury when increaseing training milage, but for some runners the 10% rule can force 
                            runners to increase milage too fast or too slow for their specific needs.  
                            Very advanced or very novice runners shouldn't worry about following the 10PR too closely."/>
                        </span>
                </FormGroup>
                
                <FormGroup>

                    <TextField
                        className={classes.text_field}
                        variant="outlined"
                        label={"Goal Maximum Distance"}
                        value={this.state.plan.goal.distance}
                        onChange={(e) => {this.updatePlan(e, 'goal')}}
                        name="distance"
                        helperText="How far you want to run by the end of your training"
                        inputProps={{
                            distance: ` ${this.props.unit.abbr}`,
                        }}
                        InputProps={{
                            inputComponent: NumberFormatDistance,
                        }}
                        InputLabelProps={{ shrink: true }} />

                    <TextField
                        className={classes.text_field}
                        variant="outlined"
                        label={"Current Maximum Distance"}
                        value={this.state.plan.current.distance}
                        onChange={(e) => {this.updatePlan(e, 'current')}}
                        name="distance"
                        helperText="The farthest you've run in the past month"
                        inputProps={{
                            distance: ` ${this.props.unit.abbr}`,
                        }}
                        InputProps={{
                            inputComponent: NumberFormatDistance,
                        }}
                        InputLabelProps={{ shrink: true }} />

                </FormGroup>
                
                <FormGroup row style={{marginTop: `${this.props.theme.spacing(2)}px`}}>
                    <Typography className={classes.date_picker_label} variant="caption">Planned Training Dates</Typography>
                    {
                        this.state.openEnded
                        ? 
                        <div className={classes.date_picker_container}>
                            <SingleDatePicker
                                id="your_unique_id" // PropTypes.string.isRequired,
                                date={this.state.plan.term.startDate} // momentPropTypes.momentObj or null
                                placeholder="Start Date"
                                onDateChange={date => this.updateDates({ startDate: date, endDate: null })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                />
                        </div>
                        :  
                        <div className={classes.date_picker_container}>
                            <DateRangePicker
                                startDate={this.state.plan.term.startDate} // momentPropTypes.momentObj or null,
                                endDate={this.state.plan.term.endDate} // momentPropTypes.momentObj or null,
                                onDatesChange={this.updateDates} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                initialVisibleMonth={() => moment()} // PropTypes.func or null,
                                />
                        </div>
                    }
                    <div className={classes.icon_button_container}>
                        <IconButton onClick={()=>{this.updateDates({startDate:null, endDate: null})}}>
                            <CancelIcon className={classes.cancel_icon}/>
                        </IconButton>
                    </div>
                    <div className={classes.switch_container}>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={this.state.openEnded}
                                onChange={this.toggleOpenEnded}
                                name="openEnded"
                                color="primary"
                            />
                            }
                            label="Start Date Only"
                        />
                    </div>
                </FormGroup>
                <div className={classes.helperText}>
                        <Typography variant="caption" componet="p">
                            The dates (or start date) you plan on training
                        </Typography>
                </div>
            </div>
        </div>
        )

      }
}

export default withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrainingGoalsBuilder)));
