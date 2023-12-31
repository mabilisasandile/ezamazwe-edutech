import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, InputLabel, Link, Grid, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';


function Login() {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Login To Continue
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    borderRadius: '20px',
                }}
            >
                <DialogTitle component='h1' variant='h4' sx={{ textAlign: 'center', mt: 3 }}>
                    EZAMAZWE EDUTECH
                </DialogTitle>

                <DialogContent sx={{ height: '360px' }}>

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
                            * email address is invalid
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
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Button
                            onClick={handleClose}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 5, mb: 5,
                                borderRadius: 30,
                                backgroundColor: '#1C3F53',
                                width: '300px',     // Default width for larger screens
                                height: '55px',
                                [theme.breakpoints.down('sm')]: {
                                    // Use 456px width on screens smaller or equal to 'sm' breakpoint
                                    width: '456px',
                                },
                            }}
                        >
                            SIGN IN
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;
