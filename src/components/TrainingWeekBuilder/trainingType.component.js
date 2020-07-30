import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    test: {
    //   color: theme.palette.primary.main,
    }
}));

function TrainingType(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.test} variant="body1" component="p">
            {props.type}
        </Typography>
    );
}

export default withTheme(TrainingType);
