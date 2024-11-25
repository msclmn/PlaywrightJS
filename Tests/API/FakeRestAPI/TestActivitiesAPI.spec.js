// Testing from this Swagger UI: https://fakerestapi.azurewebsites.net/index.html

const { ActivityModel } = require('../../../Models/FakeRestAPI/ActivityModel');
const { test, expect } = require('@playwright/test');
const { ActivitiesClient } = require('../../../Utilities/APIClient/FakeRestAPI/ActivitiesClient');

test.describe('Activities API Tests', () => {
    let activitiesClient;

    test.beforeAll(async () => {
        activitiesClient = new ActivitiesClient();
        await activitiesClient.initialize(); // Initialize the client before using it
    });

    test('Get all activities', async () => {
        const activities = await activitiesClient.getActivities();
        expect(activities).not.toBeNull();
        expect(Array.isArray(activities)).toBeTruthy();
        expect(activities.length).toBeGreaterThan(0);

        activities.forEach(activity => {
            expect(activity).toHaveProperty('id');
            expect(activity).toHaveProperty('title');
            expect(activity).toHaveProperty('dueDate');
            expect(activity).toHaveProperty('completed');
        });
    });

    // Add more API tests as needed
});
