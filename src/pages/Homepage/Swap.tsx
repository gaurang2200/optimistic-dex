import React, { ReactFragment, useState } from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import homeLogic from "./homeLogic";
import SwapInput from "../../components/SwapInput";

const classes = {
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


function Swap(){
    const { fromCoin, handleFromCoin, fromValue, handleFromValue,
    toCoin, handleToCoin, toValue, handleToValue } = homeLogic();
    
    return (
        <Box style={classes.dexStyle}>
            <Box style={classes.dexBoxStyle}>
                <Box style={classes.iconsStyle}>
                    <IconButton style={classes.settingsIconStyle}>
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Box>
                <Box sx={{my:3}}>
                    <Box style={classes.balanceBoxStyle}>
                        <Typography variant="subtitle1">Pay</Typography>
                        {
                            // Show only if wallet is connected
                            //false &&
                            <Typography variant="subtitle1"><u>Available: 100</u></Typography>
                        }
                    </Box>
                    <SwapInput 
                        coin={fromCoin}
                        handleCoin={handleFromCoin}
                        value={fromValue}
                        handleValue={handleFromValue}
                    />
                    <ArrowCircleDownRoundedIcon fontSize="large" sx={{ my: 3 }} />
                    <Box style={classes.balanceBoxStyle}>
                        <Typography variant="subtitle1">Recieve (Estimated)</Typography>
                        {
                            // Show only if wallet is connected
                            //false &&
                            <Typography variant="subtitle1"><u>Available: 100</u></Typography>
                        }
                    </Box>
                    <SwapInput 
                        coin={toCoin}
                        handleCoin={handleToCoin}
                        value={toValue}
                        handleValue={handleToValue}
                    />
                    
                    <Box sx={{ my: 3}}>
                        <Typography variant="subtitle2" color="#8B8CA7">1 {fromCoin} &asymp; 1 {toCoin}</Typography>
                    </Box>
                </Box>
                <Button variant="contained" style={classes.submitButtonStyle}>Confirm Order</Button>
                <Box sx={{ mt: 2}}>
                    <Typography variant="subtitle1" color="#8B8CA7">Enter an amount to see more details</Typography>
                </Box>
            </Box>
        </Box>
    )
    
}

export default Swap;