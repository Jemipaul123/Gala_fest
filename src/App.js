import React from 'react';
import { Footer,New,Features,About,Header } from './containers';
import { Cta,Brand,Navbar } from './components';
import './App.css';


const App = () =>{
  return(
    <div className='App'>
      <div className="gradient">
<Navbar/>
<Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Cta/>
      <New/>
      <Footer/>

    </div>
  )
}




export default App;
