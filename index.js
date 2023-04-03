// Importando bibliotecas
const express = require('express');
const app = express();

// Configurando JSON response
app.use(express.json());

// Configurando rotas
const UserRoutes = require('./routes/UserRoutes');
app.use('/users', UserRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log('Server is running!'));