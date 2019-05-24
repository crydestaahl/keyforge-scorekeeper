import React, {useState} from 'react'; 
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const btnStyle = {
    margin: '8px 8px 15px 8px',         
}

const op = {
    opacity: '1',
}

const opZ = {
    opacity: '0',
    maxHeight: '0 px',
    margin: '0'
}

const padding = {
    padding: '15px'
}

const CheckText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Cute+Font|Lato&display=swap');
    color: white;
    background: red; 
    border-radius: 5px; 
    font-size: 30px;
    font-family: 'Cute Font', cursive;
`

const WinnerText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Cute+Font|Lato&display=swap');
    color: white;
    background: green; 
    border-radius: 5px; 
    font-size: 30px;
    font-family: 'Cute Font', cursive;
`

const H2 = styled.h2`
   
    font-size: 30px;
    font-family: 'Cute Font', cursive;
    text-transform: uppercase;
    color: #330;
    margin: 0;
    padding-bottom: 0;  
`

function Player( props ) {
    const [gems, setGems] = useState(0); 
    const [keys, setKeys] = useState(0); 

    return (
            <div className="wrapper"> 
                <div style={op}>
                    <H2 style={padding}>{ props.name }</H2>
                    
                    <CheckText style={gems >= 6 ? op : opZ }>&nbsp;CHECK!</CheckText>                                        
                    
                    <H2> Gems: {gems} </H2>                    

                    <Button style={btnStyle} variant='contained'color='primary' 
                    onClick={() => setGems(gems + 1)}>
                    +
                    </Button>     
                
                    <Button style={btnStyle} variant='contained' color='secondary' onClick={() => setGems(gems - 1)}>
                    -
                    </Button>       
                    
                    <WinnerText style={keys >= 3 ? op : opZ} >&nbsp;WINNER!</WinnerText>

                    <H2> Keys: {keys}</H2>
                    
                    <Button style={btnStyle} variant='contained'color='primary' 
                    onClick={() => setKeys(keys + 1)}>
                        +
                    </Button>        
                    <Button style={btnStyle} variant='contained' color='secondary' onClick={() => setKeys(keys - 1)}>
                        -
                    </Button>                    
                </div>                       
            </div>
    );
}

export default Player; 