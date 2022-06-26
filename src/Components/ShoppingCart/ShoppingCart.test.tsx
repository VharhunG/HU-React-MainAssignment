import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Store';

import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => test('renders shopping cart component', () => {
    render(<Provider store={store}><BrowserRouter><ShoppingCart /></BrowserRouter></Provider>);
    userEvent.click(screen.getByRole("checkout"))
    screen.debug();
}
));
