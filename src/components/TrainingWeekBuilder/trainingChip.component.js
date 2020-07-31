import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useDrag } from 'react-dnd'
import { DragItems } from './constants'


const useStyles = makeStyles((theme) => ({
    chip: {
        margin: `0 ${theme.spacing(1)}px`,
        color: props => theme.palette.training[props.type].text,
        background:  props => theme.palette.training[props.type].main
    },
}));

function TrainingChip(props) {
    const classes = useStyles(props);

    const [{isDragging}, drag] = useDrag({
        item: { 
            type: DragItems.TRAINING_TYPE,
            value: props.type
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <Typography variant="body1" component="div">
            {   
                props.draggable
                ?
                <Chip   
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: 'grab',
                    }}
                    ref={drag}
                    className={classes.chip} 
                    label={props.type} />
                :
                <Chip 
                    className={classes.chip} 
                    style={{
                        opacity: props.fade ? 0.5 : 1,
                    }}
                    label={props.type} 
                />
            }
        </Typography>
    );
}

export default withTheme(TrainingChip);
