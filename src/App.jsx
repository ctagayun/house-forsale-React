/*
  Task:
    Create React component Header.jsx and HouseLis.jsx

  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */

import * as React from 'react';
import './App.css'
import Header from "./header";
import HouseList from './houseList';

//================================================

const App = () => {

   const welcome = {
     greeting: "My",
     title: 'Houses for Sale',
     subject: 'Stories',
   };

   const houseArray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Switzerland",
      price: 500000,
    },
    {
      id: 3,
      address: "1916 Rustic Oak Road",
      country: "USA",
      price: 600000,
    },
  ];
  
  return (
    <>
     <Header  headerText={welcome} />   
     <hr/>
     
     <HouseList list={houseArray} /> 
    </>
  )
}

export default App
