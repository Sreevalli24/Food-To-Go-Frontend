import React from "react";

export default function Mainpage() {

  return (
    <div classname="container-fluid h-auto">      
     <div className="bg-danger">        
      <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-info">         
       <div className="container-fluid">            
        <div className="navbar-header">   
          <img className = "logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" width="50" height="50"></img>  
            <a className="navbar-brand text-white" href="#"><b>Food-To-Go</b></a>            
        </div>   

        <div className="float-right">              
          <a className="mx-2" href="/register">Register</a>              
          <a className="mx-2" href="/login">Login</a>            
        </div>          
       </div>        
      </nav>      
    </div>    

    <div className="container bg-secondary text-white">        
      <header className="jumbotron">          
        <div className="display-1 text-center">            
         <br />            
         <b>Welcome to Food To Go!!!</b>       
        </div>          
        <br />          
        <br />          
        <br />        
      </header>      
     </div>    
    </div>  
  );
}