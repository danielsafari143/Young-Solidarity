import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { themeontecx } from "../../theme";
import PaidIcon from '@mui/icons-material/Paid';
import {React} from 'react'
import { Fragment } from "react";
import PeopleIcon from '@mui/icons-material/People';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import comm from '../../assets/img/comm.png';
import useMediaQuery from "@mui/material/useMediaQuery";


export const Benefit = () => {
    const value = useContext(themeontecx);
    const colorIcon = {color:value.primary.bgcolor};
    const textColor =  {color:value.p.bgcolor};
    const media = useMediaQuery('(min-width : 688px)')

    return(
        <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            height='auto'
            backgroundColor = {colorIcon.color}
            marginTop='80px'
            padding='20px'
        >
           {media && (<Box><img width='70%' src={comm} alt="yous comunity" /></Box>)}
            <Box>
                <Typography sx={{color : textColor}} variant="h5">Benefits from our online<br/>community</Typography>
                {
                    [[<PeopleIcon sx={{color:colorIcon.color}}/> , 'Support of our large community' , ''],[<PaidIcon sx={{color:colorIcon.color}}/> , 'Contribution of our community'],[<BuildCircleIcon sx={{color:colorIcon.color}}/> ,'Build your future']].map((items)=> {
                        return (<Box>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar  >
                                                <Avatar  sx={{backgroundColor:'white'}}>
                                                    {items[0]}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText 
                                                primary={
                                                    <Fragment>
                                                       <Typography sx={{color : textColor}} >
                                                          {items[1]}
                                                       </Typography>
                                                    </Fragment>
                                                }
                                                 secondary={
                                                <Fragment>
                                                   <Typography sx={{color : textColor}} variant="subtitle2">
                                                        {items[1]}{items[1]}<br/>{items[1]}
                                                   </Typography>
                                                </Fragment>
                                            } />
                                        </ListItem>

                                    </List>
                                </Box>)
                    })
                }
            </Box>
        </Box>
    )
}