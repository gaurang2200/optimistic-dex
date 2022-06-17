import { Box, Button, ButtonGroup, IconButton, List, ListItemButton, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import React from "react";

const classes = {
    root: {
        position:'absolute', 
        width:'100%', 
        display:'grid', 
        gridTemplateColumns:'3fr 2fr', 
        color:'white', 
        backgroundColor:'transparent', 
        padding:'0.5em 0 0.5em 0'
    },
    menuItemsStyle: {
        display:'flex', 
        alignItems:'center'
    },
    logoStyle: {
        margin: '0 3em 0 4em'
    }
};

function Navbar() {
    return (
        <Box style={classes.root}>
            <Box style={classes.menuItemsStyle}>
                <Typography variant="h5" style={classes.logoStyle}>Optimistic DEX</Typography>
                <List disablePadding sx={{fontWeight:'bold', display:'flex', flexDirection:'row'}}>
                    <ListItemButton disableRipple href="#swap" sx={{px:4, '&:hover': { color:'#166AC6' }}}>
                        Swap
                    </ListItemButton>
                    <ListItemButton disableRipple href="#liquidity-pool" sx={{px:4, py:2, '&:hover': { color:'#266AC6' }}}>
                        Liquidity
                    </ListItemButton>
                </List>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', pr: 12}}>
                <IconButton aria-label="account" disableRipple size="large" sx={{color:'white', px:4}}>
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <ButtonGroup>
                    <Button variant="contained" sx={{borderRadius:'2em', px:3, bgcolor:'#2C2D3A'}}><CircleIcon sx={{fontSize:8, color:'#52F2C3'}} />&nbsp;BSC</Button>
                    <Button variant="contained" sx={{fontWeight:'bold', px: 4, borderRadius:'2em', bgcolor:'#3A3C4F'}}>Connect Wallet</Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}

export default Navbar;