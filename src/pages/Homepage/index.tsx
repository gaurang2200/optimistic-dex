import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormHelperText, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material";
import { makeStyles, withStyles, styled } from '@mui/styles'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { coinData } from '../../utils/coinData';
import homeLogic from "./homeLogic";
import SwapInput from "../../components/SwapInput";

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
    inputBoxStyle: {
        border:'1px solid #3B3C4E', 
        borderRadius:'1em', 
        padding: 0,
    },
    inputImageStyle: {
        width:'1em', 
        height:'1em',
    },
    formControlStyle: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr'
    },
    coinSelectStyle: {
        color: 'white', 
        fontWeight:'bold',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '1em 0 0 1em'
    },
    coinInputStyle: {
        backgroundColor: 'transparent',
        border: 0,
        fontSize: '1.2em',
        textAlign: 'right',
        padding: '0 1em 0 1em',
        color:'white',
        width: 'auto'
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
    const { fromCoin, handleFromCoin, fromValue, handleFromValue,
    toCoin, handleToCoin, toValue, handleToValue } = homeLogic();

    return (
        <Container style={classes.root}>
            <Box style={classes.homeStyle}>
                
            </Box>
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
                        <Box style={classes.inputBoxStyle}>
                            <FormControl style={classes.formControlStyle}>
                                <Select
                                    value={fromCoin}
                                    onChange={handleFromCoin}
                                    displayEmpty
                                    style={classes.coinSelectStyle}
                                >
                                    {
                                        coinData.map((coin, idx) => (
                                            <MenuItem key={coin.id} value={coin.symbol} >
                                                <img src={coin.image} style={classes.inputImageStyle} />
                                                &nbsp;&nbsp;{coin.symbol}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                                <input placeholder="0" type="number" value={fromValue} 
                                onChange={handleFromValue} style={classes.coinInputStyle} />
                            </FormControl>
                        </Box>
                        <ArrowCircleDownRoundedIcon fontSize="large" sx={{ my: 3 }} />
                        <Box style={classes.balanceBoxStyle}>
                            <Typography variant="subtitle1">Recieve (Estimated)</Typography>
                            {
                                // Show only if wallet is connected
                                //false &&
                                <Typography variant="subtitle1"><u>Available: 100</u></Typography>
                            }
                        </Box>
                        <Box style={classes.inputBoxStyle}>
                            <FormControl style={classes.formControlStyle}>
                                <Select
                                    value={toCoin}
                                    onChange={handleToCoin}
                                    displayEmpty
                                    style={classes.coinSelectStyle}
                                >
                                    {
                                        coinData.map((coin, idx) => (
                                            <MenuItem key={idx} value={coin.symbol} >
                                                <img src={coin.image} style={classes.inputImageStyle} />
                                                &nbsp;&nbsp;{coin.symbol}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                                <input placeholder="0" type="number" value={toValue} 
                                onChange={handleToValue} style={classes.coinInputStyle} />
                            </FormControl>
                        </Box>
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
        </Container>
    );
}

export default Homepage;