import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import GaugeChart from 'react-gauge-chart'
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import InfoButton from '../shared/infoButton.component'


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        allowNegative={false}
      />
    );
  }

  

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
    
    const [values, setValues] = React.useState({
        numberformat: props.trainingDay.intensityFactor,
      });
    
    const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
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
                text="Intensity is a number 0-100 that indicates the distance of a run relative to your weekly training.  
                Intensity levels 0-10 are easy, short runs, while high intensity levels are longer and more difficult.
                Generally speaking, it is safest to keep intensity under 60-70 during normal training."/>
            </span>
        </div> 
    )

    return(
    <div 
        style={{opacity: props.fade ? 0.5 : 1}}
        className={classes.root}>
        <GaugeChart id={props.name} 
            className={classes.gauge} 
            arcsLength={[.1, .25, .30, .45]}
            arcPadding={0.02} 
            cornerRadius={3} 
            colors={["#00ff00", "ffdd00", "#ffaa00", "#ff0000"]}
            hideText={true}
            percent={props.trainingDay.intensityFactor/100} />
        <TextField
                variant="standard"
                type="number"
                label={label}
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                inputProps={{style: { 
                    textAlign: 'center',
                    fontSize: '40px'
                }}}
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
                InputLabelProps={{ shrink: true }}
            />
    </div>
    )

}

export default withTheme(IntensityGauge);
