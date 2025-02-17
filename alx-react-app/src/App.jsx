import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile';
const App = () => {
  return(
<div>
  <h1>Welcome to the User Profile App</h1>
  <UserProfile name="Alice"age={25} bio="Loves hiking and photography" />
</div>
  )
}
export default App;
