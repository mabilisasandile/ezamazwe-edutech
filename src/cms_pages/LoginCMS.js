import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import logo from '../logo/EZAMAZWE-LOGO.png'
import { useTheme } from '@mui/material';



const defaultTheme = createTheme();

export default function LoginCMS() {

    const theme = useTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={logo} style={{ width: '500px', height: '300px' }} />
                </Grid>
                <Grid item xs={12} sm={8} md={7}
                    component={Paper}
                    elevation={6}
                    sx={{
                        backgroundColor: '#1C3F53',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: '20px'
                        }}
                    >
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
                            <Typography component='h1' variant='h4' sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
                                EZAMAZWE EDUTECH
                            </Typography>

                            <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px' }}>
                                Login to your account
                            </Typography>

                            <Box sx={{ mt: 5, ml: 5 }}>
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

                            <Box sx={{ mt: 5, ml: 5, mr: 5 }}>
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
                                    * email address is required
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -1, mr: 5 }}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button
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
                                            // Use 85% width on screens smaller or equal to 'sm' breakpoint
                                            width: '85%',
                                        },
                                    }}
                                >
                                    SIGN IN
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}