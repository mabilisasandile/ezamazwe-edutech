// PopupForm.js
import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { TextField, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function Login() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Open Login Form
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>EZAMAZWE EDUTECH</DialogTitle>
                <DialogContent>
                    {/* Your form fields go here (e.g.TextFields, Select, etc. from Material-UI) */}
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <TextField id="outlined-basic" variant="outlined" /> 
                    <br></br>
                    <br></br>
                    <InputLabel htmlFor="my-input">Your password</InputLabel>   
                    <TextField id="outlined-basic" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;
