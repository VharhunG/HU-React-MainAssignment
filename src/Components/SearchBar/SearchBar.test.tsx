import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => test('renders App component', () => {
    render(<SearchBar updateSearchKey={() => {}} />);
    fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'JavaScript' },
    });
    screen.debug();
}
));
