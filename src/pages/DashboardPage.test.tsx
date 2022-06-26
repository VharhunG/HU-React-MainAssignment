import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

import store from '../Store';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => test('renders App component', () => {
    render(<Provider store={store}><BrowserRouter><DashboardPage /></BrowserRouter></Provider>);
    screen.debug();
}
));
