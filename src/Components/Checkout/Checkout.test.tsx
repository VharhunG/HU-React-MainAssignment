import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Store';

import Checkout from './Checkout';

describe('Checkout', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><Checkout /></BrowserRouter></Provider>);

    userEvent.click(screen.getByRole("checkout"))
    screen.debug();
}
));
