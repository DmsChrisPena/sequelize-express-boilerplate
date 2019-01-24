import app from './app.js';

import db from './db/models/index.js';

db.sequelize.sync().then(() => {
  console.log('Postgres was connected successfully!');
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log('Postgres connection failed: ', err);
});
