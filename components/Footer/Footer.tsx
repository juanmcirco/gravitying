import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        < Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" >
            <Typography align="left" gutterBottom>
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
        </Box >
    );
}