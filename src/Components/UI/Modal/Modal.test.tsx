import { render, screen } from '@testing-library/react';

import Modal from './Modal';
import "./Modal.css"

import { Provider } from 'react-redux'; 
import store from '../../../Store';
import userEvent from '@testing-library/user-event';

describe('Modal', () => test('renders App component', () => {
    render(<Provider store={store}><Modal /></Provider>);
    userEvent.click(screen.getByRole('close'))
    screen.debug();
}
));
