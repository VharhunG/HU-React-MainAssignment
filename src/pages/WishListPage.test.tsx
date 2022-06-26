import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Store';

import WishListPage from './WishListPage';

describe('WishListPage', () => test('renders WishListPage component', () => {
    render(<Provider store={store}><BrowserRouter><WishListPage /></BrowserRouter></Provider>);
    screen.debug();
}
));
