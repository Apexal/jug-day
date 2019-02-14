const cheerio = require("cheerio");
const fs = require("fs");

const file = fs.readFileSync("./student_list.html");
const $ = cheerio.load(file);

const emails = [];
$("a.directory-Entry_FieldLink[href^='mailto:'][href$='@regis.org']").each(
  function() {
    const href = $(this).attr("href");
    const email = href.split(":")[1];
    console.log(email);
    emails.push(email);
  }
);

fs.writeFileSync("./emails.txt", JSON.stringify(emails));
