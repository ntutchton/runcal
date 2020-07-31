import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    button: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}));

function InfoButton(props) {
    const classes = useStyles(props);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  

    return (
        <div className={classes.root}>
          <InfoIcon 
            className={classes.button}
            fontSize="small" 
            onClick={handleClickOpen}/>

          <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Got it!
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withTheme(InfoButton);
