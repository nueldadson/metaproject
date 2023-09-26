import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';

describe('../src/pages/Homepage', () => {
  describe('<HomePage />', () => {
    it('Rendered in the DOM', () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );
      const mainEl = screen.getByRole('region');
      expect(mainEl).toBeInTheDocument();
    });
  });
});

