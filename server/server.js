 const path = require('path');
// const express = require('express');
// const app = express();
 const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 3000;

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// app.listen(port, () => {
//   console.log('Server is up!');
// });

const express = require('express');
//const path = require('path');
const app = express();

app.use(express.static(path.join(publicPath, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
  console.log('server is up!');
});
