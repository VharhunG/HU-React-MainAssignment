import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Store';

import Wishlist from './Wishlist';

describe('Wishlist', () => test('renders Wishlist component', () => {
    render(<Provider store={store}><BrowserRouter><Wishlist /></BrowserRouter></Provider>);

    userEvent.click(screen.getByText('Course Price'))
    userEvent.click(screen.getByText('High to Low'))
    userEvent.click(screen.getByText('Low to High'))
    screen.debug();
}
));
