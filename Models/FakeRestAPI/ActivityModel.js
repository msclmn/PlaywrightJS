// Testing from this Swagger UI: https://fakerestapi.azurewebsites.net/index.html
const {test, expect} = require('playwright')
class ActivityModel {
    constructor(id, title, dueDate, completed) {
        this.id = id;
        this.title = title;
        this.dueDate = new Date(dueDate);
        this.completed = completed;
    }

    static fromApiResponse(response) {
        return new ActivityModel(response.id, response.title, response.dueDate, response.completed);
    }
}

module.exports = { ActivityModel };