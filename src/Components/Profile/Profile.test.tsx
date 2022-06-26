import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../Store';

import Profile from './Profile';

describe('Profile', () => test('renders App component', () => {
    render(<Provider store={store}><Profile /></Provider>);
    userEvent.click(screen.getByRole("submit"))
    fireEvent.change(screen.getByRole('handle-dname'), {
    target: { value: 'joey' },
    });
    fireEvent.change(screen.getByRole('handle-fname'), {
    target: { value: 'joey' },
    });
    fireEvent.change(screen.getByRole('handle-lname'), {
    target: { value: 'joey' },
    });
    fireEvent.change(screen.getByRole('handle-about'), {
    target: { value: 'joey' },
    });
    screen.debug();
}
));

