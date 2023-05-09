import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import insor from '../../assets/img/insor.png';
import { useContext } from "react";
import { themeontecx } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Invest = () => {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const textColor =  {color:value.p.bgcolor};
    const media = useMediaQuery('(min-width : 688px)')

    return(
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            marginTop={media ? '140px' : '40px'}
            padding='0px 40px 0 40px'
            gap='40px'
        >
            
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='flex-start'
                gap='20px'
            >
                <Typography variant="h5" sx={{color : colorIcon.color , fontWeight:'bolder'}} >Become an Investissor</Typography>
                <Typography sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci</Typography>
                <Button variant="outlined" >Click here to apply</Button>
            </Box>
           
            {media &&  <img width='120%' src={insor}/>}
            
        </Box>
    )
}