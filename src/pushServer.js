const express = require('express');
const webpush = require('web-push');

const publicVapidKey = "BLWFaLuaYID7_znFlkLrdDbyYlXiZUbSfYwJBZKXtFcyPPGr77nVv0CT0dHNhvrmjLhuJgr_M3USdb5iR8N8qFQ";
const privateVapidKey = "Wzpg80GnGZAqUrHzDw_ftsOvlrbdJ2msUd9UWG8dA7c";

// Replace with your email
webpush.setVapidDetails('mailto:glennfaison@gmail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(5000);
