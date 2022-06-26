import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './Store';

describe('App', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    screen.debug();
}
));
