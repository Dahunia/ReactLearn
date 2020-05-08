import React from 'react';
import './home-page.sass';

import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const HomePage = () => {
    return (
        <Box className="home-page">
            <Box className="logo-wrapper">
                <img width="70" src="/assets/logo.png" alt="logo"/>
                <Typography component="h1">
                    Reactivities
                </Typography> 
            </Box> 
            <Typography component="h2">
                Welcome to Reactivities
            </Typography>  
            
            <Typography component="h3">
                <Link to='/activities/'>
                    Take me to the activities!
                </Link>
            </Typography>
            
        </Box>
    );
};


export default observer(HomePage);