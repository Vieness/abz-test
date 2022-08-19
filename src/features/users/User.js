import React from 'react';
import {Avatar, CardContent, Stack, Typography} from "@mui/material";

const User = ({user}) => {
  return (
    <React.Fragment>
      <CardContent
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
        }}
        align={'center'}
      >
        <Avatar src={user.photo} />
        <Typography sx={{mt: 2, mb: 2,overflowX:'hidden'}} component="div">
          {user.name}
        </Typography>
        <Stack sx={{mt: 2, mb: 2}} component="div">
          <Typography>
            {user.position}
          </Typography>
          <Typography sx={{overflowX:'hidden'}}>
            {user.email}
          </Typography>
          <Typography>
            {user.phone}
          </Typography>
        </Stack>
      </CardContent>
    </React.Fragment>
  );
};

export default User;