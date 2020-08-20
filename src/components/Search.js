import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
// import countrylist from './CountryList';
import countrylist from '../data/countrywithFlag.json';



function Search(keyword) {

        console.log(keyword)


    
        return (
           
           <Input
           className="search-box"
           placeholder="Enter Country Name"
           onChange={(event) =>{Search(event.target.value)}}
        //    onChange={(event) =>{console.log(event.target.value)}}
           
           />
       
           
        );
    }

export default Search;