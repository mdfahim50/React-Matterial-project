import React,{ useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ShowComment from '../Comment/ShowComment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Container, Grid, Collapse,
       Typography, Card, Button, CardContent, CardActions }from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        marginTop:"100px",
        marginBottom: "100px",
        boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
        border: "2px solid black"
    },
    centering:{
        justifyContent: 'center'
    },
    rotate:{
        transform:"rotate(180deg)"
    },
    reRotate:{
        transform: "rotate(0)"
    }

  }));

const PostDetails = () => {
    let {postKey} = useParams();
    const [expanded, setExpanded] = useState(false);
    const [getPost,setPost] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postKey}`)
          .then(res => res.json())
          .then(post => setPost(post))
    }, [postKey]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const classes = useStyles();
    
    return (
        <>
        <Container maxWidth="md">
            <Grid item xs={12} className={classes.root}>
                <Card>
                    <CardContent align="center">
                        <Typography gutterBottom variant="h5" component="h2">
                            {getPost.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {getPost.body}
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.centering}>
                        <Button 
                            variant="outlined" 
                            color="primary"
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >Comment
                          <ExpandMoreIcon className={expanded?classes.rotate:classes.reRotate} />
                        </Button>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                           <ShowComment key={postKey}></ShowComment>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Container>
        </>
    );
};

export default PostDetails;