import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
}));

function TrainingGoalsBuilder(props) {
    const classes = useStyles(props);

    return (
        <Typography align="center" variant="h4" component="div">
            Training Goals
        </Typography>
    );
}

export default withTheme(TrainingGoalsBuilder);
