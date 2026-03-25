import { updateTimes, initializeTimes, weekdayTimes, weekendTimes } from '../BookingPage'

describe('initializeTimes', () => {

  test('returns weekday times as initial state', () => {
    const result = initializeTimes()
    expect(result).toEqual(weekdayTimes)
  })

})

describe('updateTimes', () => {

  test('returns the same state when unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN' }
    const result = updateTimes(weekdayTimes, action)
    expect(result).toEqual(weekdayTimes)
  })

  test('returns weekday times for a Monday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-07' }
    const result = updateTimes([], action)
    expect(result).toEqual(weekdayTimes)
  })

  test('returns weekend times for a Saturday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-05' }
    const result = updateTimes([], action)
    expect(result).toEqual(weekendTimes)
  })

  test('returns weekend times for a Sunday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-06' }
    const result = updateTimes([], action)
    expect(result).toEqual(weekendTimes)
  })

})