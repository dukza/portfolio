import React, { useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';

// style
import {GlobalStyles} from "assets/css/globalStyles";


// Component
import AppRoute from 'utils/AppRoute';

// Views 
import About from 'views/About';
import Projects from 'views/Projects';
import Work from 'views/Work';


//hooks
import LayoutProvider from 'hooks/context';


// Layouts
import Index from 'layouts/Index';
import Sub from 'layouts/Sub';



const App = () => {
  let location = useLocation();
  // const header = document.querySelector("#header");

  useEffect(() => {
  
      const page = location.pathname;
      setTimeout(()=>{
       document.body.classList.add('is-ready'); 
      },1000)
      
      // console.log(page)
  }, [location]);  
  // useEffect(()=>{
  //   header.style.setProperty("position", `absolute`);
  // }, [header])
  return (
    <LayoutProvider>
      <GlobalStyles/>
      <Switch>
        <AppRoute exact path="/" component={About} layout={Index} />
        <AppRoute exact path="/projects" component={Projects} layout={Index}/>
        <AppRoute exact path="/projects/:workID" component={Work} layout={Sub}/>
      </Switch>
    </LayoutProvider>
  );
}

export default App;