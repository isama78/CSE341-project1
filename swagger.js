import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'CSE341 Project 1',
        version: '1.0.0',
        description: 'API for CSE341 Project 1',
    },
    host: 'https://cse341-project1-4z97.onrender.com/',
    basePath: '/',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointFiles = ['src/app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);