import axios from 'axios';

describe('REST API', () => {
  it('returns a single entity with specific properties', async () => {
    const response = await axios.get('http://localhost:3000/entity');
    const entity = response.data;
    expect(entity).toEqual({
      id: 1001,
      firstName: 'Abe',
      lastName: 'Lincoln',
      age: 25,
      height: 176,
      weight: 84.15
    });
  });
});
