import TestModel from "../models/Test";
import mysql from 'mysql2';



/*Test Controller*/

const connection = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "testwrite",
    password: ""
  });

class TestController {
    /* GET /test */
    index(req,res){

        const sql = `SELECT * FROM params`;
        
        connection.query(sql, function(err,data){

            console.log(data);
            //console.log(field);
            res.json(data);
        })
    }

    // POST /test
    /* TODO: 
    *  Переписать запрос под MySQL
    */
    create(req, res){
        console.log(req.params);
        const test = new TestModel({
            valueone: req.params.v1,
            valuetwo: req.params.v2,
            created: req.params.date,
        });
        test.save().then(() => {
            res.send({status:'ok'});
        });
    }
    
    /* TODO: 
    *  Переписать запрос под MySQL
    */
    read(req, res){
        TestModel.findOne({_id: req.params.id}).then( test =>{
            if(!test){
                res.send({error: "Not Found"});
            }else{
                res.json(test);
            }
        })
    }

    /* TODO: 
    *  Переписать запрос под MySQL
    */
    delete (req,res){
        TestModel.remove({
            _id: req.params.id
        }).then(post =>{
            if(post){
                res.json({status: 'deleted' });
            }
            else{
                res.json({status: 'error'});
            }
        })
    }
}

export default TestController