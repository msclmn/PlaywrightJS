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

    for (let id =1 ; id <= 30; id++){
        test(`Get Activity by Id = ${id}`, async () => { 
            const activityById = await activitiesClient.getActivityById(id); 
            expect(activityById).not.toBeNull(); 
            expect(activityById).toHaveProperty('id', id); 
            expect(activityById).toHaveProperty('title', `Activity ${id}`); 
            expect(activityById).toHaveProperty('dueDate'); 
            
            //'completed' property even = true, odd = false
            if (id %2 ===0)
            {
                expect(activityById).toHaveProperty('completed', true); 
            }
            else
            {
                expect(activityById).toHaveProperty('completed', false); 
            }
    });
    }

    for (let id =1 ; id <= 30; id++){
        test(`Put Activity by Id = ${id}`, async () => { 
            const title = `Automation API Test ${id}`;
            const completed = id % 2 === 0; //true if id = even, odd if id == odd

            const putActivityById = await activitiesClient.putActivityById(id, title, completed); 
            
            expect(activityById).not.toBeNull(); 
            expect(activityById).toHaveProperty('id', id); 
            expect(activityById).toHaveProperty('title', title); 
            expect(activityById).toHaveProperty('dueDate'); 
            expect(activityById).toHaveProperty('completed', completed); 
    });
    }
});
