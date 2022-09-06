import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination.tsx', () => {
  test('renders content', () => {
    const component = render(
      <Pagination counterPage={1} handleCounterNext={() => {}} handleCounterPrev={() => {}} />
    );
    component.getByText('#Page 1');
    component.getByText('Back');
    component.getByText('Next');
  });
});
