import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import  Button from "@mui/material/Button";
import { useContext } from "react";
import { themeontecx } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

export const Form = (props) => {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const textColor =  {color:value.p.bgcolor};
    const navigate = useNavigate();
    
    const media = useMediaQuery('(min-width : 411px)');
    const [names , setNames] = useState('');
    const [email , setEmail] = useState('');

    function handleChange(e) {
        e.target.name === 'name' ? setNames(e.target.value) : setEmail(e.target.value)
    }

    return(
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='100%'
            marginTop='80px'
            height='auto'
        >
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                width='400px'
                gap='20px'
                padding='20px 40px 20px 40px'
                border={`1px solid ${media ? colorIcon.color : textColor.color}`}
                textAlign='center'
            >  
                <Typography sx={{color : colorIcon.color , fontWeight:'bolder'}}   variant="h4">Get Started Now!</Typography>
                <Typography >vel fringilla est ullamcorper eget nulla facilisi etiam dignissim</Typography>
                <TextField sx={{width:'80%'}} helperText=" " id="demo-helper-text-aligned-no-helper" onChange={handleChange} label="Name" type="name" name="name"/>
                <TextField sx={{width:'80%' ,zIndex:'2'}} label="Email" type="email" onChange={handleChange} name="email"/>
                <Button variant="contained" onClick={() => {navigate('register' , {state:{name:names , email:email}})}}>Submit</Button>
            </Box>
        </Box>
    )
}