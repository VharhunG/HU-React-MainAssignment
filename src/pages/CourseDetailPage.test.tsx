import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Store';

import CourseDetail from './CourseDetailPage';

describe('CourseDetail', () => test('renders CourseDetail component', () => {
    render(<Provider store={store}><BrowserRouter><CourseDetail /></BrowserRouter></Provider>);
    screen.debug();
}
));
