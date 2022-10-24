import { renderHook } from '@testing-library/react';

import useSalaryText from './useSalaryText';

describe('useSalaryText', () => {
  it('should format salary without hundredth', () => {
    const { result } = renderHook(() =>
      useSalaryText({
        min: 1000,
        max: 10000,
        currency: 'USD',
      })
    );

    expect(result.current).toBe('1K – 10K USD');
  });

  it('should format salary with hundredth', () => {
    const { result } = renderHook(() =>
      useSalaryText({
        min: 1525,
        max: 10575,
        currency: 'USD',
      })
    );

    expect(result.current).toBe('1.5K – 10.5K USD');
  });

  it('should use provided currency', () => {
    const { result } = renderHook(() =>
      useSalaryText({
        min: 1000,
        max: 10000,
        currency: 'PLN',
      })
    );

    expect(result.current).toContain('PLN');
  });
});
