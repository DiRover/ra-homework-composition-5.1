/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react'
import Card from './components/Card';
import Button from './components/Button';
import Content from './components/Content';
import Title from './components/Title';
import Body from './components/Body';
import ImgCap from './components/ImgCap';
import pic from './img/2020.jpg'
import './bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Card>
      <div className="card" style={{width: '18rem'}}>
         <ImgCap><img src={ pic } className="card-img-top" alt="..." /></ImgCap>
          <Body><div className="card-body">
            <Title><h5 className="card-title">Card title</h5></Title>
            <Content><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></Content>
            <Button><a href="#" className="btn btn-primary">Go somewhere</a></Button>
          </div></Body>
      </div>
    </Card>
    <Card>
    <div className="card" style={{width: '18rem'}}>
          <Body><div className="card-body">
            <Title><h5 className="card-title">Card title</h5></Title>
            <Content><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></Content>
            <Button><a href="#" className="btn btn-primary">Go somewhere</a></Button>
          </div></Body>
      </div>
      <div><a href='https://www.freepik.com/vectors/background'>Background vector created by BiZkettE1 - www.freepik.com</a></div>
    </Card>
    </React.Fragment>
    
    )
}

export default App;
