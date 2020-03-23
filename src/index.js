import express from 'express'
import bodyParser from 'body-parser'
import TestController from './controllers/TestController'

const Test = new TestController();




 
const app = express();
const PORT = 3951;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


app.get('/test', Test.index);
//app.get('/test/id=:id',Test.read)
//app.get('/test/v1=:v1&v2=:v2', Test.create);
app.post('/test', Test.create);
//app.delete('/test/:id',Test.delete);

/* FIXME:
*   Изменить ip-адресс сервера при тестирование и деплое
*/
app.listen(PORT,'localhost', () => {
    console.log('server running . . . ');
})