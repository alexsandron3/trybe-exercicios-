import React from 'react';
import { cleanup, getByText } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('Verify if when you click in the button, the number of clicks increase', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(queryByText('6')).toBeInTheDocument();
  });
  test('a reducer manipulation should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(queryByText('5')).toBeInTheDocument();
  });
});
