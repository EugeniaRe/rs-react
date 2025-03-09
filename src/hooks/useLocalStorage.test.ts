import '@testing-library/jest-dom/vitest';
import useLocalStorage from './useLocalStorage';
import { renderHook } from '@testing-library/react';

describe('useLocalStorage', () => {
  it('should set and get localStorage value', () => {
    renderHook(() => useLocalStorage('testKey', 'testValue'));

    expect(localStorage.getItem('testKey')).toBe('testValue');
  });
});
