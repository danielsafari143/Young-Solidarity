import { useContext } from 'react';
import Box from '@mui/material/Box';
import { themeontecx} from '../../theme';
import yous from '../../assets/img/yous.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import './index.css';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';

export function Navbar()  {
    const value = useContext(themeontecx);
    const media = useMediaQuery('(min-width : 688px)');
    
    return(
        <Box 
            className='headClass' 
            backgroundColor =  {value.primary.bgcolor}
            position='fixed'
            width='100%'
            zIndex='3'
         >
            <div>
                <img className='headlogo' src={yous}/>
            </div>
            <Box className='headList'>
                {
                    media ?  ['Register','Platform' ,'Resources','About'].map((items) => { return <NavLink key={items} to={`/${items}`} className='links'>{items}</NavLink>}) : <MenuIcon sx={{color:value.p.bgcolor}}/>
                }
            </Box>
        </Box>
    )
}

