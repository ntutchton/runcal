import React from 'react'
import moment from 'moment'
import TrainingDay from './trainingDay.component'
import TrainingType from './trainingType.component'
import Training from '../../enums/training'
import { connect } from 'react-redux';
import { updateTrainingWeek } from '../../actions/planActions';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  });

const mapStateToProps = state => ({
    trainingWeek: state.plans[state.system.activePlan].trainingWeek,
    planIndex: state.system.activePlan
})
  
const mapDispatchToProps = dispatch => ({
    updateTrainingWeek: (trainingWeek) => dispatch(updateTrainingWeek(trainingWeek))
})

class TrainingWeekBuilder extends React.Component {

    state = {
        trainingWeek: this.props.trainingWeek,
        weekdays: moment.weekdays(),
        trainingTypes: Object.keys(Training)
    }

    updateTrainingDay = (event, newDay, index) => {
        this.setState({
            ...this.state,
            trainingWeek: this.state.trainingWeek.map((day, i) => {
                if (index === i) {
                    return newDay
                } else return day
            })
        })
    }

    updateTrainingWeek = (event) => {
        this.props.updateTrainingWeek(this.state.trainingWeek, this.props.planIndex);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                    this.state.trainingTypes.map(trainingType => (
                        <TrainingType 
                            key={trainingType}
                            type={trainingType}/>
                    ))
                }
                {
                    this.state.weekdays.map((name, index) => (
                        <TrainingDay 
                            name={name} 
                            key={name}
                            updateDay={this.updateTrainingDay}
                            trainingDay={this.state.trainingWeek.days[index]}
                            index={index} />
                    ))
                }
                <Button 
                    onClick={this.updateTrainingWeek}
                    variant="contained" 
                    color="primary">
                    Save Changes
                </Button>
            </div>
        )
    }
}

export default withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrainingWeekBuilder)));