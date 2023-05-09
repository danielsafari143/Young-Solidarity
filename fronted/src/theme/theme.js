import { createContext } from "react";
export const themeontecx = createContext({});

export const theme = {
    white : {
        h1 : {
            bgcolor:'#FFFFFF',
            size : '64px',
        },
        primary : {
            bgcolor : '#0275EE'
        },
        button : {
            btnColor : '#0275EE'
        },
        p : {
            bgcolor:'#FFFFFF',
        }
        
    },
    
    dark : {
        h1 : {
            bgcolor:'#FFFFFF',
            size : '64px',
        },
        primary : {
            bgcolor : 'rgba(2, 117, 238, 1)'
        },
        button : {
            btnColor : 'rgba(2, 117, 238, 1)'
        }
    }
}