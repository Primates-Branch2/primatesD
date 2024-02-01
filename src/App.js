import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Route, Router, Routes } from 'react-router-dom';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Student from './Components/Student/StudentDetails';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div >
     
     
      <Routes>
      <Route path='/' element={<Dashboard/>}>Dashboard</Route>
      <Route path='/student' element={<Student/>}>Student</Route>
      <Route path='/profile' element={<Profile/>}>Profile</Route>
    </Routes>
      
    </div>
  );
}

export default App;
