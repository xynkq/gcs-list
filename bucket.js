require('dotenv').config();

const {Storage} = require('@google-cloud/storage');
const projectId = process.env.PROJECT_ID;
const keyFilename = process.env.KEY_FILE;
const storage = new Storage({projectId, keyFilename});

storage.getBuckets((err, buckets) => {
  if (err) {
    console.error(err);
    return;
  }
  if (! buckets.length) {
    console.log('buckets does not exist.');
    return;
  }
  buckets.forEach(bucket => {
    console.log(JSON.stringify(bucket.name, null, 2));
  });
});