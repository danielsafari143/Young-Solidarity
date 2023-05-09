import { Box, Typography } from "@mui/material";
import { Parts } from "./Parts";
import { useContext } from "react";
import { themeontecx } from "../../theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from'../../assets/img/logo.png';
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Footer = () => {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const textColor =  {color:value.p.bgcolor};
    const breakPoints = useMediaQuery('(max-width :880px)')
    console.log(breakPoints)

    return(
        <Box
            display='flex'
            flexDirection={breakPoints ? 'row' : 'row'}
            gridAutoColumns='auto auto'
            alignContent='center'
            justifyContent='space-between'
            padding='40px'
            marginTop='40px'
            flexWrap='wrap-reverse'
            backgroundColor={colorIcon.color}
            gap='30px'
        >
            <Box
                 display='flex'
                 flexDirection='column'
                 alignContent='center'
                 justifyContent='flex-end'
                 gap='20px'
            >
                <img width='20%' src={logo}/>
                <Typography sx={{color:'white'}}>
                    Nous sommes une communaute <br/>de jeunes entrepreuneurs
                </Typography>
                <Box
                    display='flex'
                    flexDirection='row'
                    gap='10px'
                >
                    <Link ><WhatsAppIcon sx={{color:'white', cursor:'pointer'}}/></Link>
                    <Link><LinkedInIcon  sx={{color:'white', cursor:'pointer'}}/></Link>
                    <Link><FacebookIcon  sx={{color:'white', cursor:'pointer'}}/></Link>
                </Box>
            </Box>
            
                <Parts titre ='Company' links={['About us' ,'Services' , 'Community', 'Testimonial']} />
                <Parts titre ='Support' links={['Help Center' ,'Tweet @ us' , 'Webians', 'Feedbck']} />
                <Parts titre ='Company' links={['About us' ,'Services' , 'Community', 'Testimonial']} />
                <Parts titre ='Contact us' links={['+243 852745271' ,'youthsolidarity@gmail.com' ]} />
            </Box>
       
    )
}