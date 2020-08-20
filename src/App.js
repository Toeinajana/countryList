import React, {Component} from 'react';
import CountryList from './components/CountryList';
import Search from './components/Search';
import CountryListWithFlag from './data/countrywithFlag.json';

class App extends Component {

  

  render() {
    return (

      <div className="container">
        <center><h1>Country Filter</h1></center>
        <Search/>
        <CountryList result ={Search.result} />
      </div>
    );
  }
}

export default App;
