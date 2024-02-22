import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Router } from './router';

describe('Given AppRoutes component', () => {
  describe('When we navigate to home page', () => {
    const MockedHomeComponent = jest.fn().mockReturnValue(<h1>home</h1>);
    jest.mock('../../pages/homePage/homePage', () => MockedHomeComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/home']} initialIndex={0}>
            <Router></Router>
          </MemoryRouter>
        );
      });
      element = screen.getByText('home');
    });
    test('Then the component should been called', () => {
      expect(MockedHomeComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to error page', () => {
    const MockedErrorComponent = jest.fn().mockReturnValue(<h1>error</h1>);
    jest.mock('../../pages/errorPage/errorpage', () => MockedErrorComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/error']} initialIndex={0}>
            <Router></Router>
          </MemoryRouter>
        );
      });
      element = screen.getByText('error');
    });
    test('Then the component should been called', () => {
      expect(MockedErrorComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
