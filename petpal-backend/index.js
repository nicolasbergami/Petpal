const express = require('express');
const app = express();
const cors = require('cors');
const usuariosRoutes = require('./routes/usuariosRoutes');
const mascotasRoutes = require('./routes/mascotasRoutes');
const errorHandler = require('./utils/errorHandler');
const sequelize = require('./config/db'); // Importar la configuración de la base de datos
const Usuario = require('./models/Usuario'); // Importar el modelo Usuario
const Mascota = require('./models/Mascota'); // Importar el modelo Mascota
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/mascotas', mascotasRoutes);

// Endpoint de prueba para verificar la conexión a la base de datos
app.get('/api/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send('Connection has been established successfully.');
  } catch (error) {
    res.status(500).send('Unable to connect to the database:', error.message);
  }
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync(); // Sincronizar los modelos con la base de datos
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
});

