import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Store';

import CourseItem from './CourseItem';

describe('CourseItem', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><CourseItem id="id" title="title" author="author" price={0} addToCart={() => { } } tags={[]} discount={0} /></BrowserRouter></Provider>);
    userEvent.click(screen.getByRole("navigate"))
    screen.debug();
}
));
