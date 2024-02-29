const { After } = require('@cucumber/cucumber')
const request = require("supertest");

After(async function () {
    const response = await request('https://petstore.swagger.io').delete('/v2/pet/123')
})