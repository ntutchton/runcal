import React from 'react'
import moment from 'moment'
import TrainingDay from '../../classes/trainingDay'
import TrainingDayComponent from './trainingDay.component'
import TrainingChip from './trainingChip.component'
import Training from '../../enums/training'
import { connect } from 'react-redux';
import { updateTrainingWeek } from '../../actions/planActions';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core'
import TouchIcon from '@material-ui/icons/TouchAppTwoTone';

const styles = theme => ({
    root: {
        margin: '0% 10%'
    },
    title:{
        marginBottom: theme.spacing(5)
    },
    training_chip_wrapper: {
        background: theme.palette.grey[100],
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
        borderRadius: '2px'
    },
    training_chip_text: {
        marginBottom: theme.spacing(3)
    },
    touchIcon: {
        marginRight: theme.spacing(1)
    },
    training_chips: {
        display: 'flex',
        transform: 'scale(1.2)',
        justifyContent: 'center',
        margin: theme.spacing(1)
    },
    training_days: {
        display: 'flex',
        alignItems: 'stretch',
        
    },
    save_button_wrapper: {
        textAlign: 'right',
        padding: theme.spacing(5)
    },
  });

const mapStateToProps = state => ({
    trainingWeek: state.plans[state.system.activePlan].trainingWeek,
    planIndex: state.system.activePlan
})
  
const mapDispatchToProps = dispatch => ({
    updateTrainingWeek: (trainingWeek, index) => dispatch(updateTrainingWeek(trainingWeek, index))
})

class TrainingWeekBuilder extends React.Component {

    state = {
        trainingWeek: this.props.trainingWeek,
        weekdays: moment.weekdays(),
        trainingTypes: Object.keys(Training),
        showDragTargets: false
    }

    //weekday name, training day type ('TYPE' or 'INTENSITY), and new value
    updateTrainingDay = (name, value, type) => {
        let index = this.state.weekdays.indexOf(name)
        this.setState({
            ...this.state,
            trainingWeek: {
                ...this.state.trainingWeek,
                days: this.state.trainingWeek.days.map((day, i) => {
                    if (index === i) {
                        switch(type){
                            case 'TYPE':
                                return new TrainingDay(Training[value], day.intensityFactor)
                            case 'INTENSITY':
                                return new TrainingDay(day.type, value)
                            default:
                                return new TrainingDay()
                        }
                    } else return day
                })
            }
        })
    }

    toggleDragTargets = () => {
        this.setState({
            ...this.state,
            showDragTargets : !this.state.showDragTargets
        })
    }

    updateTrainingWeek = (event) => {
        this.props.updateTrainingWeek(this.state.trainingWeek, this.props.planIndex);
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                 {/* <Typography className={classes.title} align="center" variant="h4" component="div">
                    Training Schedule
                </Typography> */}

                <div className={classes.training_chip_wrapper}>
                    {/* <Typography 
                        align="center"
                        variant="h6"
                        className={classes.training_chip_text}>
                        – OR –
                    </Typography> */}
                    <Typography 
                        align="center"
                        variant="h6"
                        className={classes.training_chip_text}>
                        <TouchIcon style={{ fontSize: 30 }} className={classes.touchIcon}/>
                        Drag and drop to customize your weekly schedule!
                    </Typography>
                    <div className={classes.training_chips}>
                    {
                        this.state.trainingTypes.map(trainingType => (
                            <TrainingChip
                                key={trainingType}
                                draggable={true}
                                toggleDragTargets={this.toggleDragTargets}
                                type={trainingType}/>
                        ))
                    }
                    </div>
                </div>
                <div className={classes.training_days}>
                {
                    this.state.weekdays.map((name, index) => (
                        <TrainingDayComponent 
                            name={name} 
                            key={name}
                            updateDay={this.updateTrainingDay}
                            trainingDay={this.state.trainingWeek.days[index]}
                            index={index} />
                    ))
                }
                </div>
                <div className={classes.save_button_wrapper}>
                    <Button 
                        onClick={this.updateTrainingWeek}
                        variant="contained" 
                        disabled={this.state.trainingWeek === this.props.trainingWeek}
                        color="primary">
                        Save Schedule
                    </Button>
                </div>
            </div>
        )
    }
}

export default withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrainingWeekBuilder)));