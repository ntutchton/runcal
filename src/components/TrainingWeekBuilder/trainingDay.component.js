import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TrainingChip from './trainingChip.component'
import IntensityGauge from './intensityGauge.component'
import { DragItems } from './constants'
import { useDrop } from 'react-dnd'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1',
    },
    training_type: {
        marginTop: theme.spacing(3),
        textAlign: 'center'
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    drag_highlight:{
        border: '5px solid transparent'
    },
    hide_drag_highlight: {
        border: '5px solid transparent',
    },
    intensity_gauge:{

    }
}));

function TrainingDay(props) {
    const classes = useStyles(props);
    const [highlight, setHighlight] = useState('');

    const [{ isOver }, drop] = useDrop({
        accept: DragItems.TRAINING_TYPE,
        drop: (trainingType) => props.updateDay(props.name, trainingType.value, 'TYPE'),
        hover: (trainingType, monitor) => {
            setHighlight(props.theme.palette.training[trainingType.value].light)
        },
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return (
        <Card 
            variant="outlined"
            ref={drop}
            className={classes.root}>
            <CardContent  
                style={{
                    border: (highlight && isOver) ? `5px dashed ${highlight}` : null
                }} 
                className={clsx(classes.drag_highlight,{[classes.hide_drag_highlight]: !isOver})}>
                <Typography 
                    align="center" 
                    className={classes.title}
                    variant="h5">
                    {props.name}
                </Typography>
                <div className={classes.intensity_gauge}>
                    <IntensityGauge 
                        fade={isOver}
                        name={props.name}
                        updateDay={props.updateDay}
                        trainingDay={props.trainingDay}/>
                </div>
                <div className={classes.training_type}>
                    <TrainingChip 
                        fade={isOver}
                        draggable={false}
                        type={props.trainingDay.type}/>  
                </div>
            </CardContent>
        </Card>
    );
}

export default withTheme(TrainingDay);
