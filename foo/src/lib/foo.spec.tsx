import { vi } from 'vitest';
import { render } from '@testing-library/react';

import Foo from './foo';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Foo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Foo />);
    expect(baseElement).toBeTruthy();
  });
});
