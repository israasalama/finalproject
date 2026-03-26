import { initializeTimes, updateTimes } from '../Main';

describe('initializeTimes', () => {
  test('returns a non-empty array of available booking times', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('updateTimes', () => {
  test('returns the same state when unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN' };
    const initialState = ['17:00', '18:00'];
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('returns a non-empty array for a selected date', () => {
    const action = { type: 'UPDATE_TIMES', payload: '2026-05-10' };
    const result = updateTimes([], action);

    expect(result.length).toBeGreaterThan(0);
  });
});