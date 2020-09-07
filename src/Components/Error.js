import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';



const Error = () => {

    return (
        <>
            <Card >
                <CardContent>
                    <Typography  >
                        404 error,Page not found.
                    </Typography>

                </CardContent>
            </Card>
        </>
    );
};

export default Error;