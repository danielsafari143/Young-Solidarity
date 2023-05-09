import { Typography , Box, Button} from "@mui/material";
import TextField from "@mui/material/TextField";
import yous from '../../assets/img/yous.png';
import yousB from '../../assets/img/YousB.png';
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Register = () => {
    const location = useLocation();
    const values = location.state;
    const isExisted = (values ===null);
    return(
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            marginTop='60px' 
            padding='80px 40px 80px 40px'
            
        >
        <Box
            display='flex'
            flexDirection={isExisted ? 'row' : 'row-reverse'}
            height='auto'
            boxShadow='0px 6px 20px 0px rgba(177,177,183,0.3)'
            width='70%'
        >
            <Box
                 width='50%'
                 display='flex'
                 flexDirection='column'
                 padding='40px'
                
                >
                    <Box 
                        paddingBottom='20px'
                    >
                        <img className='headlogo' src={yousB}/>
                        <Box
                            marginTop='50px'
                            display='flex'
                            flexDirection='column'
                            gap='20px'
                        >
                            <Typography  sx={{color:'rgba(2, 117, 238, 1)' , fontSize:'13px' ,fontWeight:'bolder' }}>
                               Register now and prepare your future
                            </Typography>
                            <Typography  sx={{color:'rgba(0, 0, 0, 0.6)', fontSize:'15px' }}>Welcome  back! Please login to your account.</Typography>
                        </Box>
                    </Box>

                    <TextField sx={{width:'100%'}} helperText=" " id="demo-helper-text-aligned-no-helper" placeholder="Email"type="email"/>
                    <TextField sx={{width:'100%' ,zIndex:'2'}} placeholder="Password" type="password" />  
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        marginTop='10px'
                    >
                         <Typography  sx={{color:'rgba(0, 0, 0, 0.6)', fontSize:'14px' }}>Remember me</Typography>
                         <Typography  sx={{color:'rgba(0, 0, 0, 0.6)', fontSize:'14px' }}>Forgot password</Typography>
                    </Box>
                    <Box   
                        marginTop='20px'
                    >
                         <Button variant="outlined">Sign In</Button>
                        <Button  variant="solid">Sign Up</Button>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                        marginTop='30px'
                    >
                        <Typography  sx={{color:'rgba(0, 0, 0, 0.6)', fontSize:'15px' }}>Or login with</Typography>
                        <Typography  sx={{color:'rgba(2, 117, 238, 1)', fontSize:'15px' }}>Facebook</Typography>
                        <Typography  sx={{color:'rgba(2, 117, 238, 1)', fontSize:'15px' }}>Linkdin</Typography>
                        <Typography  sx={{color:'rgba(2, 117, 238, 1)', fontSize:'15px' }}>Google</Typography>
                    </Box>
            </Box>
            <Box
                backgroundColor="rgba(2, 117, 238, 1)"
                height='auto'
                width='50%'
                display='flex'
               alignItems='center'
               justifyContent='center'
            >
                <img className='headlogo' src={yous}/>
                
            </Box>   
        </Box>
        </Box>
    )
}

export default Register; 