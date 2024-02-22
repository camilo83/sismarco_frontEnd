import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Router } from '../router/router';

jest.mock('../router/router');

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });

    test('renders App with List', () => {
      expect(Router).toHaveBeenCalled();
    });
  });
});
