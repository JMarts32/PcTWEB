import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container className="mt-3">
  <Row>
    <Post author="Juanito" content="El post es para que paniz aprenda a jugar" likes={20} />
    <Post author="Paniz" content="Bobo malo" likes={300} />
    <Post author="Agui" content="STOP IP" likes={0} />
  </Row>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
