import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css';
import {
  Jumbotron,
  UncontrolledCarousel,
} from 'reactstrap';

const items = [
  {
    src: 'images/photo1.jpeg',
    caption: ''
  },
  {
    src: 'images/photo2.jpeg',
    caption: ''
  },
  {
    src: 'images/photo3.jpeg',
    caption: ''
  }
];

const CarouselComponent = () => <Jumbotron>
<UncontrolledCarousel items={items} />
</Jumbotron>;

export default CarouselComponent;














