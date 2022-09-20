const express = require('express')
const path = require('path');
const cfg = require('dotenv');
const app = express();
const { PORT_EXPRESS } = cfg.config().parsed || 5000;

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(PORT_EXPRESS, () => {
	console.log(`Server was started on port ${PORT_EXPRESS}`);
})
