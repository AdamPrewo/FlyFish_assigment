const request = require("supertest");
const { Given, When, Then, And } = require('@cucumber/cucumber')
const { expect } = require('expect');

Given('user want to create a pet', function () {
    this.pet = {
        "id": 123,
        "category": {
            "id": 20,
            "name": "fish"
        },
        "name": "sharky",
        "tags": [
            {
                "id": 12,
                "name": "shark"
            }
        ],
        "status": "available"
    }
});

When('they add the pet to the store', async function () {
    this.response = await request('https://petstore.swagger.io').post('/v2/pet').send(this.pet)
});

Then('pet is created', function () {
    this.petCreated = this.pet = {
        "id": 123,
        "category": {
            "id": 20,
            "name": "fish"
        },
        "name": "sharky",
        "photoUrls": [],
        "tags": [
            {
                "id": 12,
                "name": "shark"
            }
        ],
        "status": "available"
    }
    expect(this.response._body).toEqual(this.petCreated)
});

Then('added to the store', async function () {
    const getResponse = await request('https://petstore.swagger.io').get('/v2/pet/findByStatus?status=available')
    expect(getResponse._body).toContainEqual(this.petCreated)
});