import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination.tsx', () => {
  test('renders content', () => {
    const component = render(<Pagination season={1} setSeason={() => {}} />);
    // component.getByText('Season 1');
    component.getByText('Season 1');
  });
});
