import { handler } from '../src/function';

describe('[function]', () => {
  it('should return status 200', async () => {
    const res = await handler(null)
    expect(res).toEqual({
      status: 200
    });
  });
});