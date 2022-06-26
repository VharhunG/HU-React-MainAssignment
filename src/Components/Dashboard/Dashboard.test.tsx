import { render, screen } from '@testing-library/react';

import Dashboard from './Dashboard';

import { Provider } from 'react-redux'; 

import {BrowserRouter} from 'react-router-dom';

import store from '../../Store';

describe('Dashboard', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><Dashboard /></BrowserRouter></Provider>);
    screen.debug();
}
));
