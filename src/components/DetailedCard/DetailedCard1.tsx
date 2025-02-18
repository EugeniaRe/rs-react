// import { render, screen } from '@testing-library/react';
// import { BrowserRouter, MemoryRouter } from 'react-router';
// import userEvent from '@testing-library/user-event';
// import { ReactElement } from 'react';
// import '@testing-library/jest-dom';
// import DetailedCard from './DetailedCard';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// const result = {
//   url: 'https://swapi.dev/api/planets/1',
//   name: 'Tatooine',
// };

// const middlewares = [];
// const mockStore = configureStore(middlewares);
// describe('Card', () => {
//   it('should render card', () => {
//     const initialState = {};
//     const store = mockStore(initialState);

//     render(
//       <Provider store={store}>
//         <DetailedCard />{' '}
//       </Provider>
//     );
//     expect(screen.getByText(/planet/i)).toBeInTheDocument();
//   });
// });
