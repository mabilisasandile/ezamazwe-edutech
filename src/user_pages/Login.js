import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, InputLabel, makeStyles } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const useStyles = makeStyles({
    button: {
        backgroundColor: 'blue',
        color: 'white',
    },
    customTextStyle: {
        color: 'blue',
        fontSize: '16px',
    },
    dialog: {
        width: '456px',
        height: '500px',
    },
});

function Login() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Login Now
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ ...classes.dialog }}>
                <DialogTitle>EZAMAZWE EDUTECH</DialogTitle>
                <DialogContent>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                    <br></br>
                    <br></br>
                    <InputLabel htmlFor="my-input">Your password</InputLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.button}>
                        SIGN IN
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;
