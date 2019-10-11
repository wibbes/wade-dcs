const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var nodeOutlook = require('nodejs-nodemailer-outlook')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  .get('/email', function (req, res) {

    nodeOutlook.sendEmail({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      auth: {
        user: "james.lyons@wade.co.uk",
        pass: "Sleepy1@"
      },
      tls: {
          ciphers:'SSLv3'
      },
      from: 'james.lyons@wade.co.uk',
      to: 'james.lyons@wade.co.uk',
      subject: 'Hey you, awesome!',
      html: '<b>This is bold text</b>',
      text: 'This is text version!',
      replyTo: 'james.lyons@wade.co.uk',
      onError: (e) => console.log(e),
      onSuccess: (i) => console.log(i)
      });  

    });
