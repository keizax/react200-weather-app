import React from 'react';
import Search from './components/Search';
import City from './components/City';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div
          className='jumbotron bg-dark text-white'
          style={ { opacity: 0.9 } }
        >
          <h1 className='text-center'>
          SDCS Weather App
        </h1>
          <h4 className='text-center'>
          Always know if you'll need an umbrella!
        </h4>
        </div>

        <Search />

        <div
          className='row'
          id='spacing'
          style={ { padding: 20 } }
        >
          <City />
          <History />
        </div>

      </div>
    );
  }
}

