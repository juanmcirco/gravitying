import React from 'react';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cards from '../Cards/Cards';



const Main = () => {
    return (
        <main>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                    pb: 16,
                }}
            >
                <Container maxWidth="lg" >
                    <Typography
                        component="h4"
                        variant="h5"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        About Us!
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary" paragraph>
                        We are specialized Trampwall acrobats and pioneers in developing this activity in Argentina. It is a trampoline combined with a wall used to launch ourselves into the air, perform flights and stunts.
                        Our shows are of a high artistic and acrobatic level and we seek to surprise the spectators with our jumps and the adrenaline of the discipline. The numbers we do are high-risk, innovative and keep the public expectant.
                    </Typography>
                    <Cards />
                </Container>
            </Box>
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 6,
                pb: 16,
            }}>
                <Container maxWidth="lg">
                    <Typography
                        component="h4"
                        variant="h5"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >

                        What is tramp wall?
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary" paragraph>
                        Trampwall combines a trampoline with a 4 meter high wall. From the edge of the wall we launch ourselves towards the trampoline, where we bounce lying on our backs and rise with our bodies in a horizontal position to walk along the wall and bite against it. In this way we give ourselves momentum to fall back on the trampoline, which pulls us higher and higher. In the seconds of flight and falling from the wall to the bed, we perform pirouettes and acrobatics that add difficulty to the discipline and are the main attraction of the shows.
                    </Typography>
                    <Cards src='http://1.bp.blogspot.com/-N6IOjKyFDTI/UH0boXYaIHI/AAAAAAAAK6U/b5z1QWi6hI8/s1600/Gravitying+4.jpg' />
                </Container>
            </Box>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                    pb: 16,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h4"
                        variant="h5"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >

                        What are Gravitying shows about?
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary" paragraph>
                        Trampwall combines a trampoline with a 4 meter high wall. From the edge of the wall we launch ourselves towards the trampoline, where we bounce lying on our backs and rise with our bodies in a horizontal position to walk along the wall and bite against it. In this way we give ourselves momentum to fall back on the trampoline, which pulls us higher and higher. In the seconds of flight and falling from the wall to the bed, we perform pirouettes and acrobatics that add difficulty to the discipline and are the main attraction of the shows.
                    </Typography>
                    <Cards />
                </Container>
            </Box>

        </main>
    )
}

export default Main