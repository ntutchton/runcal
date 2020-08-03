import React from 'react'
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        margin: '0% 10%',
        background: theme.palette.grey[100],
        padding: theme.spacing(2),
        borderRadius: '2px'
    },
    title_text: {
        marginBottom: theme.spacing(3)
    },
});


const mapStateToProps = state => ({
    // trainingWeek: state.plans[state.system.activePlan].trainingWeek,
    // planIndex: state.system.activePlan
})
  
const mapDispatchToProps = dispatch => ({
    // updateTrainingWeek: (trainingWeek, index) => dispatch(updateTrainingWeek(trainingWeek, index))
})

class PresetPlanLoader extends React.Component {
    render() {
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Typography 
                    align="center"
                    variant="h6"
                    className={classes.title_text}>
                    Pick from a list of preset training plans
                </Typography>

                {/* <Typography 
                    align="center"
                    variant="h6"
                    className={classes.title_text}>
                    ...or...
                </Typography> */}
            </div>
        )
    }
}

export default withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PresetPlanLoader)));