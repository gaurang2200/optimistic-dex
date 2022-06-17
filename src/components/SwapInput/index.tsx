import { Box, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import { coinData } from "../../utils/coinData";
import { makeStyles } from '@mui/styles'

const styles = {
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
    }
}

const useStyles = makeStyles({
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white !important',
    },
    coinInputStyle: {
        backgroundColor: 'transparent',
        border: 0,
        fontSize: '1.3em',
        textAlign: 'right',
        padding: '0 1em 0 1em',
        color:'white',
        width: 'auto',
        fontWeight: 'bold'
    },
})


function SwapInput({ coin, handleCoin, value, handleValue }: InferProps<typeof SwapInput.propTypes>){
    const classes = useStyles();

    return(
        <Box style={styles.inputBoxStyle}>
            <FormControl style={styles.formControlStyle}>
                <Select
                    value={coin}
                    onChange={handleCoin}
                    displayEmpty
                    style={styles.coinSelectStyle}
                    className={classes.select}
                    inputProps={{
                        classes: {
                            icon: classes.icon
                        }
                    }}
                >
                    {
                        coinData.map((coin, idx) => (
                            <MenuItem key={idx} value={coin.symbol} >
                                <img src={coin.image} style={styles.inputImageStyle} />
                                &nbsp;&nbsp;{coin.symbol}
                            </MenuItem>
                        ))
                    }
                </Select>
                <input className={classes.coinInputStyle} placeholder="0" type="number" value={value} 
                onChange={handleValue}  />
            </FormControl>
        </Box>
    );
}

SwapInput.propTypes = {
    coin: PropTypes.string.isRequired,
    handleCoin: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    handleValue: PropTypes.func.isRequired
}

export default SwapInput;