import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from './reducers';
import * as reactRedux from 'react-redux';
import App from './App';

const store = createStore(rootReducer);

test('renders React Redux Expense Manager paragraph', () => {
  render(
    <reactRedux.Provider store={store}>
      <App />
    </reactRedux.Provider>
 );
  const paragraphElement = screen.getByText(/React Redux Expense Manager/i);
  expect(paragraphElement).toBeInTheDocument();
});
