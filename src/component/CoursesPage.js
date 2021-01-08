import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import MediaCard from './CourseCard';
import courses from '../Static/static';
import useWindowPosition from '../hooks/useWindowPosition';


const useStyles=makeStyles((theme)=>({
root:{
    minHeight:'100vh',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg-11.jpg'})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
}
}))
const CoursePage=()=>{
    const classes=useStyles();
    const checked=useWindowPosition('header');
    return(
        <div className={classes.root} id='course-to-know'>
            <MediaCard course={courses[0]} checked={checked} />
            <MediaCard course={courses[1]} checked={checked}/>

        </div>
    )
}
export default CoursePage;