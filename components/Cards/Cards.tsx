import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

type CardsProps = {
    src?: string
}

export default function Cards({ src }: CardsProps) {

    const path = src || "https://picsum.photos/id/859/2000";

    return (
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Card component="li" sx={{ maxHeight: 500, flexGrow: 1 }}>
                <CardContent sx={{ justifyContent: 'center', gap: 1, p: 0, m: 0 }} >
                    <img
                        src={path}
                        style={{ marginBottom: -34 }}
                    />
                    <img
                        src={path}
                        style={{ marginBottom: -34 }}
                    />
                </CardContent>
            </Card>

        </Box>
    );
}
