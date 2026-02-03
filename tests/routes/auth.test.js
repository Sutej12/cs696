const request = require('supertest');

const app = require('../../server');

describe('Auth routes', () => {
    // Endpoint under test: GET /api/auth/me
    test('GET /api/auth/me returns 401 when not authenticated', async () => {
        const res = await request(app).get('/api/auth/me');

        expect(res.status).toBe(401);
        expect(res.body).toEqual({error: 'Unauthenticated'});
    });
});

