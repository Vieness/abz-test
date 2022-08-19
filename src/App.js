import {HashRouter} from "react-router-dom";
import Home from "./layout/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "./features/singUp/slice/singUpSlice";
import {useLazyGetTokenQuery} from "./features/singUp/singUpApi";

function App() {
  const accessToken = localStorage.getItem('access_token')
  const dispatch = useDispatch()
  const [fetchToken] = useLazyGetTokenQuery()

  useEffect(() => {
    if (accessToken) {
      dispatch(setToken(accessToken))
    } else {
      fetchToken()
    }
  }, [dispatch, accessToken])

  return (
    <HashRouter>
      <Home/>
    </HashRouter>
  );
}

export default App;
