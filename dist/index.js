"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _TestController = _interopRequireDefault(require("./controllers/TestController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Test = new _TestController["default"]();
var app = (0, _express["default"])();
var PORT = 3951;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.get('/test', Test.index); //app.get('/test/id=:id',Test.read)
//app.get('/test/v1=:v1&v2=:v2', Test.create);

app.post('/test', Test.create); //app.delete('/test/:id',Test.delete);

/* FIXME:
*   Изменить ip-адресс сервера при тестирование и деплое
*/

app.listen(PORT, 'localhost', function () {
  console.log('server running . . . ');
});