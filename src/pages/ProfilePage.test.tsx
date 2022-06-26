import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Store';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => test('renders App component', () => {
    render(<Provider store={store}><ProfilePage /></Provider>);
    screen.debug();
}
));
