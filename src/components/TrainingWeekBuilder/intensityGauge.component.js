import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import GaugeChart from 'react-gauge-chart'
import TextField from '@material-ui/core/TextField';
import InfoButton from '../shared/infoButton.component'
import {NumberFormatIntensity} from '../shared/numberFormatInput.component'

  

const useStyles = makeStyles((theme) => ({
    root: {

    },
    title: {
        margin: `${theme.spacing(1)}px 0`
    },
    gauge:{
        margin: `${theme.spacing(3)}px 0`
    }
}));

function IntensityGauge(props){
    const classes = useStyles(props);
    
    const [intensity, setIntensity] = React.useState(props.trainingDay.intensityFactor);
    
    const handleChange = (event) => {
      setIntensity(event.target.value);
      props.updateDay(props.name, event.target.value, 'INTENSITY')
    };

    const label = (
         <div style={{
             width: '100%',
             display: 'flex'}}>
             <span style={{
                 marginRight: `${props.theme.spacing(1)}px`,
                 flexGrow:'1'}}>
             Intensity
            </span> 
            <span style={{marginTop: '-4px'}}>
                <InfoButton
                title="What is Intensity?"
                text="Intensity is a number 0-100 that indicates the effort of a run relative to your weekly distance goals.  
                You can think of intensity of a percentage of you biggest run of the week.
                Generally speaking, it is safest to only run once per week at 100% intensity."/>
            </span>
        </div> 
    )

    return(
    <div 
        style={{opacity: props.fade ? 0.5 : 1}}
        className={classes.root}>
        <GaugeChart id={props.name} 
            className={classes.gauge} 
            arcsLength={[.25, .25, .25, .25]}
            arcPadding={0.02} 
            cornerRadius={3} 
            colors={["#00ff00", "ffdd00", "#ffaa00", "#ff0000"]}
            hideText={true}
            percent={props.trainingDay.intensityFactor/100} />
        <TextField
                variant="standard"
                type="number"
                label={label}
                value={intensity}
                onChange={handleChange}
                name="numberformatinput"
                inputProps={{style: { 
                    textAlign: 'center',
                    fontSize: '40px'
                }}}
                InputProps={{
                    inputComponent: NumberFormatIntensity,
                }}
                InputLabelProps={{ shrink: true }}
            />
    </div>
    )

}

export default withTheme(IntensityGauge);
