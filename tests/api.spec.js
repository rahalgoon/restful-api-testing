const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://api.restful-api.dev';

test.describe('RESTful API Tests', () => {
  let createdObjectId;

  test.beforeAll(async ({ request }) => {
    const newObject = {
      name: 'Test Object',
      type: 'Test Type',
    };
    const response = await request.post(`${BASE_URL}/objects`, {
      headers: { 'Content-Type': 'application/json' },
      data: newObject,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    createdObjectId = responseBody.id; // Save for future tests
  });

  test('Get list of all objects', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/objects`);
    expect(response.ok()).toBeTruthy(); // Check for any 2xx status code
    if (response.status() === 404) {
      console.warn('Objects endpoint might be missing or incorrectly configured.');
    }
    const objects = await response.json();
    expect(Array.isArray(objects)).toBe(true);
  });

  test('Add an object using POST', async ({ request }) => {
    const newObject = {
      name: 'Test Object',
      type: 'Test Type',
    };
    const response = await request.post(`${BASE_URL}/objects`, {
      headers: { 'Content-Type': 'application/json' },
      data: newObject,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    createdObjectId = responseBody.id; // Save for future tests
  });

  test('Get a single object using the added ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/objects/${createdObjectId}`);
    expect(response.ok()).toBeTruthy(); // Check for any 2xx status code
    const object = await response.json();
    expect(object).toHaveProperty('id', createdObjectId);
  });

  test('Update the object using PUT', async ({ request }) => {
    const updatedData = {
      name: 'Updated Object',
      type: 'Updated Type',
    };
    const response = await request.put(`${BASE_URL}/objects/${createdObjectId}`, {
      headers: { 'Content-Type': 'application/json' },
      data: updatedData,
    });
    expect(response.ok()).toBeTruthy();
    const updatedObject = await response.json();
    expect(updatedObject.name).toBe(updatedData.name);
  });

  test('Delete the object using DELETE', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/objects/${createdObjectId}`);
    expect(response.ok()).toBeTruthy();

    const verifyResponse = await request.get(`${BASE_URL}/objects/${createdObjectId}`);
    expect(verifyResponse.status()).toBe(404); // Ensure the object is deleted
  });
});
