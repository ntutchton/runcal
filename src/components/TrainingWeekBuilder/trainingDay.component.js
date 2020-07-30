import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TrainingChip from './trainingChip.component'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1',
        background: props => theme.palette.training[props.trainingDay.type].light,
    },
    trainging_type: {
        margin: `${theme.spacing(4)} 0`,
        textAlign: 'center'
    }
}));

function TrainingDay(props) {
    const classes = useStyles(props);

    return (
        <Card 
            variant="outlined"
            className={classes.root}>
            <CardContent >
                <Typography align="center" variant="h6">
                    {props.name}
                </Typography>
                <div className={classes.trainging_type}>
                    <TrainingChip 
                        type={props.trainingDay.type}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default withTheme(TrainingDay);
