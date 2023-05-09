import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { themeontecx } from "../../theme";

export const Parts = (props) => {
    const value = useContext(themeontecx);
    const textColor =  {color:value.p.bgcolor};
    let counter = 0;
    return(
        <Box>
            <Typography sx={{color:'white' , fontWeight:'bolder' , marginTop:'20px'}}>{props.titre}</Typography>
            <Box>
                {props.links.map((items) => {
                    counter +=1 ;
                    return <Typography key={counter} sx={{paddingTop:'5px', color:textColor.color}}><Link underline="none" sx={{ color:'white',  cursor:'pointer'}} >{items}</Link></Typography>
                })}
            </Box>
        </Box>
    )
}