import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent';
import {
  Jumbotron,
  UncontrolledCarousel,
} from 'reactstrap';

const items = [
  {
    src: 'images/photo1.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'images/photo2.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'images/photo3.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const CarouselComponent = () => <Jumbotron>
<UncontrolledCarousel items={items} />
</Jumbotron>;

export default CarouselComponent;














