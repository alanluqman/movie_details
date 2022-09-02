import store from '../Redux/configStore';

describe('Redux store', () => {
  it('It should create an empty store', () => {
    expect(store.getState().movies).toEqual([]);
  });
});
