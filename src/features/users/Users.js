import {Box, Button, Grid, Typography} from "@mui/material";
import User from "./User";
import {useGetUsersQuery} from "./usersApi";
import {useState} from "react";

const Users = () => {
  const [params, setParams] = useState({
    page: 1,
    count: 6
  })

  const {data, isLoading, isSuccess} = useGetUsersQuery(params)

  const handleClick = () => {
    setParams({...params, count: data.count + 6})
  }

  return (
    <Box id={'users-section'}>
      <Typography sx={{mt: 15, mb: 6}} variant={'h3'} align={'center'}>
        Working with GET request
      </Typography>
      {isLoading && <div>Loading...</div>}
      <Grid container
            alignItems="center"
            justifyContent="center">
        {isSuccess && data?.users.map(u =>
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            sx={{m: 2}}
            key={u.id}>
            <User key={u.id} user={u}/>
          </Grid>
        )}
      </Grid>
      <Grid align={'center'}>
        <Button onClick={handleClick} sx={{mt: 5}} variant={'main'}>Show more</Button>
      </Grid>
    </Box>
  );
};

export default Users;