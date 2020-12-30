/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react'
import pic from './img/2020.jpg'
import './bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the cards content.' textButton='Go to somewhere'>
      <img src={ pic } className="card-img-top" alt="..." />
    </Card>
    <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the cards content.' textButton='Go to somewhere'/>
    </div>
  )  
}

export default App;
