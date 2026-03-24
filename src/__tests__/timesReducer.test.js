import { timesReducer, weekdayTimes, weekendTimes } from '../BookingForm'

describe('timesReducer', () => {

  test('returns weekday times for a Monday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-07' }
    const result = timesReducer([], action)
    expect(result).toEqual(weekdayTimes)
  })

  test('returns weekend times for a Saturday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-05' }
    const result = timesReducer([], action)
    expect(result).toEqual(weekendTimes)
  })

  test('returns weekend times for a Sunday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-04-06' }
    const result = timesReducer([], action)
    expect(result).toEqual(weekendTimes)
  })

  test('returns current state for unknown action', () => {
    const action = { type: 'UNKNOWN' }
    const result = timesReducer(weekdayTimes, action)
    expect(result).toEqual(weekdayTimes)
  })

})