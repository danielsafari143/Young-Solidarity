import { Box } from "@mui/material"
import Typography from "@mui/material/Typography";
import testimonial from '../../assets/img/testimonial.png';
import { useContext } from "react";
import { themeontecx } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";


export const Testimonial = () => {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const textColor =  {color:value.p.bgcolor};
    const media = useMediaQuery('(max-width:905px)');

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            gap='100px'
            marginTop='100px'
            padding='20px'
        >
            <Typography variant="h5" sx={{color : colorIcon.color , fontWeight:'bolder'}}>Members Testimonials</Typography>
            <img width={media ? '105%' : '75%'} src={testimonial}/>
        </Box>
    )
}