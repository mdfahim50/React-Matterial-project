import React, { useState, useEffect } from 'react';
import PostDesign from './PostDesign';
import { makeStyles, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        // marginTop: "100px",
        // marginBottom: "100px"
    }
}));

const PostData = () => {
    const [getData, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => alert("sorry, data didn't found"))
    }, []);

    const classes = useStyles();
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
                    {
                        getData.map(post => <PostDesign key={post.id} data={post}></PostDesign>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default PostData;