import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';


const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
});

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main />
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="left" gutterBottom>
                    Gravitying Cia.
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="left"
                    color="text.secondary"
                    component="p"
                >
                    We are Gravitying, we love what we do ❤️
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}