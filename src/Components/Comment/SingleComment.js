import React,{ useState , useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, Grid} from '@material-ui/core';

const SingleComment = (props) => {
    const [getImage,setImage] = useState([]);
    const {name,email,body,id} = props.comment;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then(res => res.json())
          .then(image => setImage(image))
    }, [id]);
    const imgSource = getImage.url
    return (
        <>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container alignItems="center">
                            <Avatar alt="user-image" src={imgSource} />  
                            <CardHeader title={name} subheader={email} />
                        </Grid>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {body}{id}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default SingleComment;