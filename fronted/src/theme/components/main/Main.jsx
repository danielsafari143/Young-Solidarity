import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { themeontecx } from "../../theme";
import './index.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {Card} from '../../assets/img/card/Card';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import PaidIcon from '@mui/icons-material/Paid';
import bgg from '../../assets/img/bgg.png';
import useMediaQuery from "@mui/material/useMediaQuery";

export function Main () {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const media = useMediaQuery('(min-width : 688px)');
    //<img className="groupe" src={groupe}/>

   
    return (
        <Box
            width='100%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            zIndex='2'
            height='auto'>

            <Box 
                className= 'main' 
                backgroundColor = {value.primary.bgcolor}>
            
            {media && <img className="imgbg" alt='bacimage' src={bgg}/>}
            <Box 
                className = "textSection"
            >
                <Typography  sx={{color:value.p.bgcolor , fontSize:'35px' ,fontWeight:'bolder' }}  variant="h1">A revolutionary way <br/> to invest.</Typography>

               <Box>
                    <Typography  sx={{color:value.p.bgcolor}}>
                            “Online education is electronically supported learning that relies on <br/>the Internet for teacher/student interaction and the distribution of class materials.”
                    </Typography>
                    <Box
                        sx={
                           {
                             display:'flex',
                             paddingTop : '10px',
                             alignItems:'center'
                            
                            }
                        }
                    >
                        <PlayCircleFilledIcon  sx={{color:value.p.bgcolor}}/>
                        <Typography variant="subtitle2"  sx={{color:value.p.bgcolor}}>What's Yous</Typography>
                    </Box>
               </Box>
           </Box>
         
        </Box>
        <Box
                display={media ? 'flex' : 'none'}
                flexDirection='row'
                gap='50px'
                width='auto'
                position='relative'
                bottom='80px'
               >
              {
                [[<PaidIcon sx={colorIcon}/>,10000,'Money'],[<PeopleIcon sx={colorIcon}/>,500,'Members'],[<PublicIcon sx={colorIcon}/>,5,'Provinces']].map((items)=> {
                    return <Card names={items[2]} icon={items[0]} count={items[1]}/>
                })
              }
           </Box>
        </Box>
    )
}