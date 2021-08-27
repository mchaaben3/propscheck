import './App.css';
import React from 'react';
import Profile from './profile/profile';

const alertMyInput = name => alert(name);

function App() {
  return (
    <div className="App">
       <Profile
       name="Mahdi Chaaben" 
       bio= " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at doloremque accusamus repudiandae repellat! Eligendi minus quidem commodi illum amet et, labore dolores facilis magnam possimus, est sit non beatae!"
       profession="Junior web developer"
       alertMyInput={alertMyInput}
       
       >
   
          <img src="/unnamed.jpg" className="ProfilePic" />
         
          </Profile>
       
    </div>
  );
}

export default App;
