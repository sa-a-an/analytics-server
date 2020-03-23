"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Test = _interopRequireDefault(require("../models/Test"));

var _mysql = _interopRequireDefault(require("mysql2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*Test Controller*/
var connection = _mysql["default"].createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "testwrite",
  password: ""
});

var TestController = /*#__PURE__*/function () {
  function TestController() {
    _classCallCheck(this, TestController);
  }

  _createClass(TestController, [{
    key: "index",

    /* GET /test */
    value: function index(req, res) {
      var sql = "SELECT * FROM params";
      connection.query(sql, function (err, data) {
        console.log(data); //console.log(field);

        res.json(data);
      });
    } // POST /test

    /* TODO: 
    *  Переписать запрос под MySQL
    */

  }, {
    key: "create",
    value: function create(req, res) {
      console.log(req.params);
      var test = new _Test["default"]({
        valueone: req.params.v1,
        valuetwo: req.params.v2,
        created: req.params.date
      });
      test.save().then(function () {
        res.send({
          status: 'ok'
        });
      });
    }
    /* TODO: 
    *  Переписать запрос под MySQL
    */

  }, {
    key: "read",
    value: function read(req, res) {
      _Test["default"].findOne({
        _id: req.params.id
      }).then(function (test) {
        if (!test) {
          res.send({
            error: "Not Found"
          });
        } else {
          res.json(test);
        }
      });
    }
    /* TODO: 
    *  Переписать запрос под MySQL
    */

  }, {
    key: "delete",
    value: function _delete(req, res) {
      _Test["default"].remove({
        _id: req.params.id
      }).then(function (post) {
        if (post) {
          res.json({
            status: 'deleted'
          });
        } else {
          res.json({
            status: 'error'
          });
        }
      });
    }
  }]);

  return TestController;
}();

var _default = TestController;
exports["default"] = _default;