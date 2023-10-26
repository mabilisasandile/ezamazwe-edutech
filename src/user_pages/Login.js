import React, { useState } from 'react';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import { TextField, InputLabel, Link, Grid, Typography, Box } from '@mui/material';
=======
import { TextField, InputLabel, makeStyles } from '@mui/material';
>>>>>>> 72b5861661b0b446afc02cdf4238f2d1172cc14e
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

<<<<<<< HEAD
=======
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
>>>>>>> 72b5861661b0b446afc02cdf4238f2d1172cc14e

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
        <div >
            <Button variant="outlined" color="primary" onClick={handleOpen}>
<<<<<<< HEAD
                Login To Continue
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle component='h1' variant='h4' sx={{ textAlign: 'center', mt: 5 }}>
                    EZAMAZWE EDUTECH
                </DialogTitle>

                <DialogContent>

                    <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px' }}>
                        Login to your account
                    </Typography>

                    <Box sx={{ mt: 5 }}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            required
                            fullWidth
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{ borderRadius: 10, width: '456px', height: '113px' }}
                        />
                        <Typography sx={{ mt: -7, color: 'red' }}>
                            # email address is invalid
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 5 }}>
                        <InputLabel htmlFor="my-input">Your password</InputLabel>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            sx={{ borderRadius: 20, width: '456px', height: '113px' }}
                        />
                        <Typography sx={{ mt: -7, color: 'red' }}>
                            # email address is required
                        </Typography>
                    </Box>

=======
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
>>>>>>> 72b5861661b0b446afc02cdf4238f2d1172cc14e
                </DialogContent>
                <Grid container>
                    <Grid item xs>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -1, mr: 3 }}>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <DialogActions>
<<<<<<< HEAD
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            onClick={handleClose}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5, mb: 5, borderRadius: 30, backgroundColor: '#1C3F53', width: '455px', height: '55px' }}>
                            SIGN IN
                        </Button>
                    </Box>
=======
                    <Button onClick={handleClose} className={classes.button}>
                        SIGN IN
                    </Button>
>>>>>>> 72b5861661b0b446afc02cdf4238f2d1172cc14e
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;
