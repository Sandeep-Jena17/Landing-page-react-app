import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background:'rgba(0,0,0,0.5)',
    margin:'20px'
  },
  media: {
    height: 340,
  },
  title:{
      fontFamily:'Nunito',
      fontWeight:'bold',
      fontSize:'2rem',
      color:'#fff'
  },
  description:{
     fontFamily:'Nunito',
     fontSize:'.9rem',
     color:'#ddd'
  },

});

 function MediaCard({course,checked}) {
  const classes = useStyles();

  return (
      
      
  <Collapse in={checked}  {...(checked?{ timeout:2000}:{})}
  collapsedHeight={70}>    
    <Card className={classes.root}>
      
      {/* <CardActionArea> */}
        
        <CardMedia
          className={classes.media}
          image={course.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
           className={classes.title}>
            {course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {course.description}
          </Typography>
        </CardContent>
     
     {/*  </CardActionArea> */}
     
     {/*  <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    </Collapse>
  );
}

export default MediaCard;