import { vi } from 'vitest';
import { bar } from './bar';

afterEach(() => {
  vi.resetAllMocks();
});

describe('bar', () => {
  it('should work', () => {
    expect(bar()).toEqual('bar');
  });
});
