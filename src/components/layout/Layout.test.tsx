import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout.tsx', () => {
  test('renders content', () => {
    const component = render(
      <Layout title="home" description="decription test">
        <h1>hello world</h1>
      </Layout>
    );
    component.getByText('hello world');
  });
});
