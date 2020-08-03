import NumberFormat from 'react-number-format';
import React from 'react'

export function NumberFormatIntensity(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: parseInt(values.value),
            },
          });
        }}
        isAllowed={(values) => {
          return values.value <= 100
        }}
        thousandSeparator
        isNumericString
        allowNegative={false}
      />
    );
}


export function NumberFormatDistance(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: parseInt(values.value),
            },
          });
        }}
        suffix={props.distance}
        thousandSeparator
        isNumericString
        allowNegative={false}
      />
    );
  }