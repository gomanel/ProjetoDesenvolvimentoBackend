const fs = require('fs');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Consultas Médicas',
      version: '1.0.0',
      description: 'API RESTful para gerenciamento de pacientes, médicos e consultas'
    }
  },
  apis: ['./app.js']
});

fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec, null, 2));