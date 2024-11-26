const { request } = require('@playwright/test');
const { ActivityModel } = require('../../../Models/FakeRestAPI/ActivityModel');

class ActivitiesClient {
    constructor() {
        this.client = null; // Initialize client as null
    }

    async initialize() {
        this.client = await request.newContext({
            baseURL: 'https://fakerestapi.azurewebsites.net',
        });
    }

    async getActivities() {
        if (!this.client) {
            throw new Error('Client is not initialized. Call initialize() before using this method.');
        }

        try {
            const response = await this.client.get('/api/v1/Activities');
            console.log('API Response Status:', response.status());
            if (response.ok()) {
                const activities = await response.json();
                console.log('Activities Data:', activities);
                return activities.map(ActivityModel.fromApiResponse);
            } else {
                console.error('Failed to fetch activities:', response.statusText());
                return null;
            }
        } catch (error) {
            console.error('Error while fetching activities:', error);
            return null;
        }
    }

    async getActivityById(id) {
        if (!this.client) {
            throw new Error('Client is not initialized. Call initialize() before using this method.');
        }

        try {
            const response = await this.client.get(`/api/v1/Activities/${id}`);
            console.log('API Response Status:', response.status());
            if (response.ok()) {
                const activity = await response.json();
                console.log('Activity Data:', activity);
                return ActivityModel.fromApiResponse(activity);
            } else {
                console.error(`Failed to fetch activity with id ${id}:`, response.statusText());
                return null;
            }
        } catch (error) {
            console.error(`Error while fetching activity with id ${id}:`, error);
            return null;
        }
    }

    async updateActivity(id, title, completed) {
        if (!this.client) {
            throw new Error('Client is not initialized. Call initialize() before using this method.');
        }

        const updatedActivity = {
            id: id,
            title: title,
            //dueDate: new Date().toISOString(),
            completed: completed
        };

        try {
            const response = await this.client.put(`/api/v1/Activities/${id}`, 
                {
                data: updatedActivity //This is the updated payload for the body section
                });
            console.log('API Response Status:', response.status());
            if (response.ok()) {
                const activity = await response.json();
                console.log('Updated Activity Data:', activity);
                return ActivityModel.fromApiResponse(activity);
            } else {
                console.error(`Failed to update activity with id ${id}:`, response.statusText());
                return null;
            }
        } catch (error) {
            console.error(`Error while updating activity with id ${id}:`, error);
            return null;
        }
    }
}

module.exports = { ActivitiesClient };
