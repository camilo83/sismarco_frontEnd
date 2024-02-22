import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './homePage';

describe('Given ErrorPage component', () => {
  describe('When we instantiate', () => {
    render(<HomePage></HomePage>);

    test('It should be in the document', () => {
      const element = screen.getByText('This is HomePage');
      expect(element).toBeInTheDocument();
    });
  });
});
