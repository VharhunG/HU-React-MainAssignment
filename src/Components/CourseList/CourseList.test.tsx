import { render, screen } from '@testing-library/react';

import CourseList from './CourseList';

import { Provider } from 'react-redux'; 
import store from '../../Store';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('CourseList', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><CourseList searchKey={''} /></BrowserRouter></Provider>);
    userEvent.click(screen.getByText('Course Price'))
    userEvent.click(screen.getByText('High to Low'))
    userEvent.click(screen.getByText('Low to High'))
    userEvent.click(screen.getByRole('1'))
    userEvent.click(screen.getByRole('2'))
    screen.debug();
}
));
