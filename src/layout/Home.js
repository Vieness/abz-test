import {Box, Container} from "@mui/material";
import Header from "../components/Header";
import MainScreen from "../components/MainScreen";
import Users from '../features/users/Users'
import SingUp from '../features/singUp/SingUp'
import {useEffect} from "react";


const Home = () => {
  useEffect(() => window.scrollTo(0, 0 ), []);
  return (
    <Box sx={{
      backgroundColor: '#f8f8f8'
    }}
    >
      <Header/>
      <MainScreen/>
      <Container>
        <Users/>
        <SingUp/>
      </Container>
    </Box>
  );
};

export default Home;