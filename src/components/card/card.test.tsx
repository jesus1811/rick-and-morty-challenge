import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card.tsx', () => {
  test('renders content', () => {
    const component = render(
      <Card>
        <h1>title</h1>
      </Card>
    );
    component.getByText('title');
  });
});
