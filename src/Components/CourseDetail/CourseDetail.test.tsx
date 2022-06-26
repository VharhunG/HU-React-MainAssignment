import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Store';

import CourseDetail from './CourseDetail';

describe('CourseDetail', () => test('renders CourseDetail component', () => {
    render(<Provider store={store}><BrowserRouter><CourseDetail /></BrowserRouter></Provider>);
    userEvent.click(screen.getByText("All Courses"))
    screen.debug();
}
));
