const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/myform/public/index.html');
});

const validate = [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 8, max: 16 }).withMessage('Invalid Password, password must 8-16 characters'),
  body('tel').isMobilePhone('th-TH').withMessage('Invalid Tel'),
];

app.post('/register', validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    res.send(errorMessages.join('\n'));
  }

  const email = req.body.email;
  const tel = req.body.tel;
  res.send(`Email: ${email}<br>Tel: ${tel}`);
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
