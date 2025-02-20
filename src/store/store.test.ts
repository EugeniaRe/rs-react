import { describe, it, expect } from 'vitest';
import { store } from './store';
import { api } from './api/api';

describe('store', () => {
  it('should be defined', () => {
    expect(store).toBeDefined();

    const state = store.getState();
    expect(state).toHaveProperty('selectedItems');
    expect(state).toHaveProperty(api.reducerPath);
  });

  it('should have middleware defined', () => {
    const middleware = store.dispatch;

    expect(middleware).toBeDefined();
  });
});
