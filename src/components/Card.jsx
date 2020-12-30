/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Card(props) {
    const { title, text, textButton } = props;
    return (
        <div>
          <div className="card" style={{width: '18rem'}}>
              { props.children }
              <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ text }</p>
                <a href="#" className="btn btn-primary">{ textButton }</a>
              </div>
          </div>
        </div>
    )
};
