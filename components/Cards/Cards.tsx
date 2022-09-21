import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Cards() {
    return (
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Image
                    </Typography>
                </CardContent>
            </Card>
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Image
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
