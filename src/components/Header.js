import {AppBar, Box, Button, Stack, Toolbar, Typography} from "@mui/material";

const Header = () => {

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar color={'transparent'} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            TESTTASK
          </Typography>
          <Stack spacing={2} direction={"row"}>
            <Button variant={'main'} href={'/page#users-section'}>
              Users
            </Button>
            <Button variant={'main'} href={'/page#sing-up-section'}>
              Sing Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;