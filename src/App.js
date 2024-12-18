import './App.css';
import LoginForm from './components/loginForm';
import Home from './components/home'
import AddChores from './components/addChores';
import ReviewChores from './components/reviewChores';
import CompletedChores from './components/completedChores';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<LoginForm/>} /> 
        <Route path='/home/*' element = {<Home/>} />
        <Route path='/addChores' element = {<AddChores/>} />
        <Route path='/reviewChores' element = {<ReviewChores/>} />
        <Route path='/completedChores' element = {<CompletedChores/>} />
      </Routes> 
    </BrowserRouter>
  );
}



export default App;
