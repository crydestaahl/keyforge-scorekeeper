import React from 'react'; 
import Player from './keyforge';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import backgroundImage from './img/keyforge-bg.jpg';

const logoUrl = 'https://images-cdn.fantasyflightgames.com/filer_public/15/91/15912457-5917-474f-8ce3-9dd24e1659e3/kf01_logo.png'

const setBackgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: '0 auto',    
}

const height = {
    height: '50px'
}

const center = {
    width: '400px',
    margin: '0 auto',
    textAlign: 'center',    
    paddingLeft: '23px',
    paddingRight: '23px'
}

const logoStyle = {
    width: '300px',
    height: '250' 
}

const opacity = {
    backgroundColor: 'rgba(255, 255, 255, .1)'
}

function TheGame( props ) {

    return (
        <Grid container spacing={24} style={setBackgroundImg}>   
            <Grid item style={height} sm={12} >
                <img src={logoUrl} style={logoStyle} alt="Keyforge Logo" title="Keyforge Logo" />
            </Grid>     
            <Grid item sm={6} style={center}>
                <Paper style={opacity}>
                    <Player name="Player 1" id='1' />            
                </Paper>
            </Grid>
            
            <Grid item sm={6} style={center}>
                <Paper style={opacity}>
                    <Player name="Player 2" id='2' />
                </Paper>
            </Grid>            
        </Grid>
    );
}

export default TheGame; 