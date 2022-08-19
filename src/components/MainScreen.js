import {Box, Button, Grid, Paper, Stack, Typography} from "@mui/material";

const MainScreen = () => {
  return (

    <Paper
      align={'center'}
      sx={{
        width: "100% ",
        height: "600px",
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://oir.mobi/uploads/posts/2021-06/thumbs/1623096033_53-oir_mobi-p-rzhanoe-pole-priroda-krasivo-foto-57.jpg)'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.5)',
        }}
      >
        <Stack sx={{
          mt: 15,
          mb: 15,
          maxWidth: 500,
        }}>
          <Typography sx={{pl: 1, pr: 1}} variant={"h3"} color={'secondary'}>
            Test assignment for front-end developer
          </Typography>
          <Typography sx={{pl: 1, pr: 1}} color={'secondary'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae numquam provident quaerat quis rem
            reprehenderit sunt voluptatum. Natus, repudiandae, vel. Optio repellat tempore ut. Aut eius facere in
            nesciunt nisi non obcaecati officia quos tempora voluptatum? Beatae eum excepturi hic itaque iure laborum
            magnam reiciendis tempore tenetur ut!
          </Typography>
          <Grid align={'center'}>
            <Button sx={{mt: 5}} variant={'main'}>Show more</Button>
          </Grid>
        </Stack>
      </Box>
    </Paper>


  );
};

export default MainScreen;