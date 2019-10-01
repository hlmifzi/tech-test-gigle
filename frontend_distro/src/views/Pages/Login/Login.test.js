import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../../Landing_page/Landing_page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LandingPage/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
