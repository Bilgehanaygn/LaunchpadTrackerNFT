import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from "./components/MainPage";
import MyAppBar from "./components/MyAppBar";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';




function App() {
  document.title = 'Launchpad Tracker';


  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
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
