const fs = require("fs");

const html = fs.readFileSync("./announcements.html");

const send = require("gmail-send")({
  user: process.env.GMAIL_USERNAME,
  pass: process.env.GMAIL_PASSWORD,
  from: "Regis High School <plzreply@regis.org>",
  subject: "Announcements for Friday, February 15, 2019",
  text: html,
  html
});
