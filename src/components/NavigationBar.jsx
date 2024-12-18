import React from 'react';
import '../styles/NavigationBar.css';
import { Routes, Route, Link } from 'react-router-dom';
import AddChores from './addChores';
import ReviewChores from './reviewChores';
import CompletedChores from './completedChores';

function NavigationBar(){
    return (
        <div id = "sidenav" className = "navbar">
            <nav>
                <ul>
                    <li><Link to="/addChores">Add Chores</Link></li>
                    <li><Link to="/reviewChores">Review Chores</Link></li>
                    <li><Link to="/completedChores">Completed Chores</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/addChores' element={<AddChores/>}/>
                <Route path='/reviewChores' element={<ReviewChores/>}/>
                <Route path='/completedChores' element={<CompletedChores/>}/>
            </Routes>
        </div>
    );
}

export default NavigationBar;