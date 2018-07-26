import React from 'react';
import Services from '../pages/Services';
import ServiceCard from '../components/ServiceCard';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();
renderer.render(<Services />);
const result = renderer.getRenderOutput();
const service = {
  _id: 1234,
  name: "haircut",
  description: "good one",
  duration: 2,
  price: 200,
  image: "http://localhost:420"
}
expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <ServiceCard services={service} />
]);