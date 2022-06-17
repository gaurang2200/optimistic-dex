import React from "react";
import { Box, Container } from "@mui/material";
import Swap from "./Swap";

const classes = {
    root: { 
        display:'grid', 
        color:'white', 
        gridTemplateColumns:'3fr 2fr',
        padding: 0,
        height:'100%', 
        minWidth:'100%'
    },
    homeStyle: {
        minHeight:'100vh', 
        height:'100%'
    },
    dexStyle: {
        display:'flex', 
        minHeight:'100vh', 
        height:'100%', 
        backgroundColor:'#23252E', 
        justifyContent:'center', 
        alignItems:'center'
    },
    dexBoxStyle: {
        backgroundColor:'#2D2C3A', 
        margin:'0 2em 4em 2em', 
        width:'100%', 
        borderRadius:'1em', 
        padding: '1.5em'
    },
    iconsStyle: {
        display:'flex', 
        justifyContent:'flex-end'
    },
    settingsIconStyle: {
        backgroundColor:'#3A3D4E', 
        color:'white', 
        borderRadius:'0.5em'
    },
    balanceBoxStyle: {
        display: 'flex', 
        justifyContent:'space-between',
        color: "#8B8CA7",
        marginBottom: '1em'
    },
    
    submitButtonStyle: {
        width: '100%',
        padding: '1em 0 1em 0',
        borderRadius: '1em',
        fontWeight: 'bold',
        marginTop: '1em'
    }
};


function Homepage(){
    return (
        <Container style={classes.root}>
            <Box style={classes.homeStyle}>
                
            </Box>
            <Swap />
        </Container>
    );
}

export default Homepage;