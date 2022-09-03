import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph.tsx', () => {
  test('renders content', () => {
    const component = render(
      <Paragraph size="small" variant="primary">
        hello world
      </Paragraph>
    );
    component.getByText('hello world');
  });
});
