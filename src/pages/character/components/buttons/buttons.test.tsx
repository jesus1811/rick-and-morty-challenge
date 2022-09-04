import { useCounterPage } from '@/hooks';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Buttons from './Buttons';

describe('Buttons.tsx', () => {
  test('renders content', () => {
    const component = render(<Buttons counterPage={1} handleCounter={() => {}} />);
    component.getByText('Back');
    component.getByText('Next');
    component.getByText('#Page 1');
  });
});
