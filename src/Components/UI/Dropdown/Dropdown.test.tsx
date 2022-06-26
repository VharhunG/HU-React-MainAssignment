import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Dropdown from './Dropdown';

import { Provider } from 'react-redux'; 

import {BrowserRouter} from 'react-router-dom';

import store from '../../../Store';

    describe('Dropdown', () => test('renders App component', () => {
        render(<Provider store={store}><BrowserRouter><Dropdown changeSort={() => {}} /></BrowserRouter></Provider>);
        userEvent.click(screen.getByText('Course Price'))
        userEvent.click(screen.getByText('High to Low'))
        userEvent.click(screen.getByText('Low to High'))
        screen.debug();
    }
    
));
