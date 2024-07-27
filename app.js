const createApp = require('./app/createApp');
const config = require('./config/development');

const app = createApp(config);

const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
