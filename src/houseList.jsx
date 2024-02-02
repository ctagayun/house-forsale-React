/* eslint-disable react/prop-types */ 
//import React, { useState } from "react";
import * as React from 'react';
import currencyFormatter from "../helpers/currencyFormatter";
//import HouseRow from "./houseRow";

const HouseList = (props) => {

  
 /* const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };*/

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
              <tr key={item.id}>
                 {Object.values(item).map((val) => (
                    <td>{val}</td>
               ))}
             </tr>
           )
           )}
        </tbody>
      </table>
      <button className="btn btn-primary position-relative" >
        Add
      </button>
    </>
  );
};

export default HouseList;
