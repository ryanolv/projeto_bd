// Importando bibliotecas
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json')

const app = express();

// Configurando JSON response
app.use(express.json());

// Configurando rotas
const UserRoutes = require('./routes/UserRoutes');
app.use('/users', UserRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = 5000;
app.listen(PORT, () => console.log('Server is running!'));