/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from './Card';
import Button from './Button';
import Content from './Content';
import Title from './Title';
import Body from './Body';
import ImgCap from './ImgCap';


export default function Page(props) {
    return (
        <div>
          <Card>
          <div className="card" style={{width: '18rem'}}>
             <ImgCap><img src={ props.pic } className="card-img-top" alt="..." /></ImgCap>
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
        </div>
        )
}