import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from './component/Header';
import CoursePage from './component/CoursesPage';
const useStyles=makeStyles((theme)=>({
 root:{
   minHeight:'100vh',
   backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg-13.jpg'})`,
   backgroundRepeat:'no-repeat',
   backgroundSize:'cover'
 }

}));

const HomeScreen=()=>{
  const classes=useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <CoursePage />
    </div>
  )
}
export default HomeScreen;