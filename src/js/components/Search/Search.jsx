/* eslint-disable max-len */
import React from 'react';
import { searchCity, getWeather } from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
  }

  handleSearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  }

  handleSubmit() {
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    // These values were provided by connect()
    const { value } = this.props;
    return (
      <div style={ { marginTop: '20px', marginBottom: '20px' } }>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-primary' onClick={ this.handleCity } value='San Diego' name='San Diego'>San Diego</button>
          <button type='button' className='btn btn-primary' onClick={ this.handleCity } value='New York' name='New York'>New York</button>
          <button type='button' className='btn btn-primary' onClick={ this.handleCity } value='Washington' name='Washington'>Washington D.C.</button>
          <button type='button' className='btn btn-primary' onClick={ this.handleCity } value='London' name='London'>London</button>
          <button type='button' className='btn btn-primary' onClick={ this.handleCity } value='Tokyo' name='Tokyo'>Tokyo</button>
        </div>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Enter Your City' value={ value } onChange={ this.handleSearch } />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSubmit }>Go!</button>
          </div>
        </div>
      </div>
    );
  }
}
