import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';


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

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}