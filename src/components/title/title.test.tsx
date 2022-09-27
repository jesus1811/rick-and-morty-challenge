import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title.tsx', () => {
  test('renders content', () => {
    const component = render(<Title primary>hola mundo</Title>);
    component.getByText('hola mundo');
  });
});
