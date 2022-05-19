import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import MyAppBar from "./components/MyAppBar";
import Loading from './components/Loading';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';




function App() {
  document.title = 'Launchpad Tracker';


  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={
            <PrivateRoute>
              <MyAppBar/>
              <MainPage />
            </PrivateRoute>
          }/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App;
