require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { PersonalInfoRoute, CredentialsRoute, LoginRoute, HomeRoute, DatasRoute, EditDatasRoute, ChangePasswordRoute, NotFoundRoute } = require('./src/views/index.js');
const SignModelRoute = require('./src/controllers/signController.js');
const LoginModelRoute = require('./src/controllers/loginController.js');
const DatasModelRoute = require('./src/controllers/datasController.js');
const DeleteUserModelRoute = require('./src/controllers/deleteUserController.js');
const EditDatasModelRoute = require('./src/controllers/editDatasController.js');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup/personalinformations', PersonalInfoRoute);
app.get('/signup/credentials', CredentialsRoute);
app.get('/login', LoginRoute);
app.get('/home', HomeRoute);
app.get('/home/datas', DatasRoute);
app.get('/home/datas/edit', EditDatasRoute);
app.get('/home/datas/changepassword', ChangePasswordRoute);


app.use(bodyParser.json());

app.post('/model/signup', SignModelRoute)
app.post('/model/login', LoginModelRoute)
app.get('/model/datas', DatasModelRoute)
app.delete('/model/deleteuser', DeleteUserModelRoute)
app.patch('/model/editdatas', EditDatasModelRoute)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
