import React, { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import SingleComment from './SingleComment';
import Grid from '@material-ui/core/Grid';

const ShowComment = () => {
    const [getComment,setComment] = useState([]);
    let {postKey} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postKey}`)
          .then(res => res.json())
          .then(comment => setComment(comment))
    }, [postKey]);
    return (
        <>
          <Grid container spacing={3}>
            {
                getComment.map(comment => <SingleComment comment={comment} key={comment.id}></SingleComment>)
            }
          </Grid>
        </>
    );
};

export default ShowComment;