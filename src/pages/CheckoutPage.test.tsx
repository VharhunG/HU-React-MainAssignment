import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Store';

import CheckoutPage from './CheckoutPage';

describe('CheckoutPage', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><CheckoutPage /></BrowserRouter></Provider>);
    screen.debug();
}
));
