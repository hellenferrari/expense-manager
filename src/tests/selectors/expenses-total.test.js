import selectExpenseTotal from '../selectors/expenses-total.test';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpenseTotal([expense[0]]);
    expect(res).toBe(195);
});

test('should correctly add up a multiple expense', () => {
    const res = selectExpenseTotal([expenses]);
    expect(res).toBe(114195);
});