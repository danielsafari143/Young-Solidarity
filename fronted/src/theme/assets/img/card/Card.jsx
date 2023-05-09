import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { themeontecx } from "../../../theme";

export function Card (props) {
    const [counter , setCounter] = useState(0);
    const value = useContext(themeontecx);
    const colorText = value.primary.bgcolor;

    useEffect(()=> {
       let counterPerSecond = 0;
       let isCounterSecondInferior = true ;

        const texte = setInterval(() => {
            setCounter(() => {
                isCounterSecondInferior = counterPerSecond < props.count;
                return isCounterSecondInferior ? counterPerSecond++ : props.count;
            })
        }, 1000/40);
       
    },[]); 

    return(
        <Paper
           sx={{
            width :'105px',
            height :'107px',
            display:'flex',
            flexDirection : 'column',
            alignItems:'center',
            justifyContent:'center',
            gap:'0px',
            
           }}
           elevation = {3}
        >
            <Typography> {props.icon}</Typography>
            <Typography  gutterBottom sx={{color:colorText,fontWeight:'bolder'}}>{counter}+</Typography>
            <Typography sx={{color:colorText}}>{props.names}</Typography>
        </Paper>
    )
}