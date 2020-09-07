import React from 'react';
import { Typography, Grid, Card, Button, CardContent, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';




const PostDesign = (props) => {
  const { title, body, id } = props.data;

  return (
    <>
      <Grid item xs={12} md={6} >

        <Card >
          <CardContent align="center">

            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography variant="body2" component="p">
              {body}
            </Typography>

          </CardContent>

          <CardActions style={{ justifyContent: 'center' }}>
            <Link to={"/post/" + id} style={{ textDecoration: "none" }} >
              <Button variant="contained" color="primary">
                See Comment
                    </Button>
            </Link>
          </CardActions>

        </Card>
      </Grid>
    </>
  );
};

export default PostDesign;