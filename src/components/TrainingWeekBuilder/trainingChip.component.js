import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    chip: {
        color: props => theme.palette.training[props.type].text,
        background:  props => theme.palette.training[props.type].main
    },
}));

function TrainingChip(props) {
    const classes = useStyles(props);

    return (
        <Typography variant="body1" component="div">
            <Chip   
                draggable
                className={classes.chip} 
                label={props.type} />
        </Typography>
    );
}

export default withTheme(TrainingChip);
