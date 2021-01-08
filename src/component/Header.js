import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link  as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
   root:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:"100vh",
       fontFamily: 'Nunito'
   },
    appbar: {
        background: 'none'
        
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto'
    },
    icon:{
        color:'#fff',
        fontSize:'1.9rem'
    },
    appbarTitle:{
     flexGrow:'1'   
    },
    colorText:{
        color:"#5AFF3D"
    },
    container:{
        textAlign:"center"
    },
    title:{
        color:'#fff',
        fontSize:"3rem"
    },
    goDown:{
        color:"#5AFF3D",
        fontSize:'4rem'
    }
    
}))
const Header = () => {
    const classes = useStyles();
    
    const [checked,setChecked]=useState(false);
    
    useEffect(()=>{
        setChecked(true)
    },[])

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Sandeep <span className={classes.colorText}>
                    Academy</span> </h1>
                    <IconButton>
                        <AppsIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked}
            {...(checked?{ timeout:2000}:{})}
            collapsedHeight={70}
            >
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Courses <br /> I will<span className={classes.colorText}>Teach </span>
                </h1>
                <Scroll to='course-to-know' smooth={true}>
                <IconButton>
                   <KeyboardArrowDownIcon className={classes.goDown} />
                </IconButton>
                </Scroll>
                
            </div>

            </Collapse>
            
        </div>
    )
}
export default Header;