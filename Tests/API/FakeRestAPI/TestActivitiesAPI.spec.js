// Testing from this Swagger UI: https://fakerestapi.azurewebsites.net/index.html

const { ActivityModel } = require('../../../Models/FakeRestAPI/ActivityModel');
const { test, expect } = require('@playwright/test');
const { ActivitiesClient } = require('../../../Utilities/APIClient/FakeRestAPI/ActivitiesClient');

test.describe('Activities API Tests', () => {

    // test.beforeAll(async () => {
    //     activitiesClient = new ActivitiesClient();
    //     await activitiesClient.initialize(); // Initialize the client before using it
    // });

    test('Get all activities', async () => {
        const activitiesClient = new ActivitiesClient();
        await activitiesClient.initialize();
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
            const activitiesClient = new ActivitiesClient();
            await activitiesClient.initialize();
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
            const activitiesClient = new ActivitiesClient();
            await activitiesClient.initialize();
            const title = `Automation API Test ${id}`;
            const completed = id % 2 === 0; //true if id = even, odd if id == odd

            const putActivityById = await activitiesClient.updateActivity(id, title, completed);
            
            expect(putActivityById).not.toBeNull(); 
            expect(putActivityById).toHaveProperty('id', id); 
            expect(putActivityById).toHaveProperty('title', title); 
            expect(putActivityById).toHaveProperty('dueDate'); 
            expect(putActivityById).toHaveProperty('completed', completed); 
           
    });
    }
});
