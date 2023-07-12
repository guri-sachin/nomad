const express = require("express");
const path = require("path");
const app = express();
var nodemailer = require('nodemailer');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const fs = require('fs');
const { Route } = require("react-router-dom");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));



//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nomad'
});



//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

//multer
var imagename = '';


const storage = multer.diskStorage({
    destination: './public/images',
    filename: (req, files, cb) => {
        return cb(null, `${files.fieldname}_${Date.now()}${path.extname(files.originalname)}`)
    },

})
const upload = multer({ storage: storage });

var multipleUpload = upload.fields([{ name: 'filename', maxCount: 3 }, { name: 'filename1', maxCount: 3 }])



//route for Add categories
app.use("/filename", express.static("./public/images"))
app.post('/Savecate', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let data = { catename: req.body.name,room: req.body.room, image: `${reqFiles}`, status: req.body.status };
    console.log(data);
    let sql = "INSERT INTO categories SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for update categories
app.use("/filename", express.static("./public/images"))
app.post('/updatecate', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let sql ="UPDATE categories SET catename ='"+req.body.name +"',room ='"+req.body.room +"',image ='"+`${reqFiles}`+"',status='"+req.body.status+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for update subcategories
app.use("/filename", express.static("./public/images"))
app.post('/updatesubcate', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let sql ="UPDATE subcate SET catename ='"+req.body.categories +"',room ='"+req.body.room +"', subname ='"+req.body.subcategories +"',img ='"+`${reqFiles}`+"',status='"+req.body.status+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for Add sub categories
app.use("/filename", express.static("./public/images"))
app.post('/Savesubcate', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let data = { catename: req.body.categories,room: req.body.room, subname: req.body.categories, img: `${reqFiles}`, status: req.body.status };
    console.log(data);
    let sql = "INSERT INTO subcate SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for Add videos
app.use("/filename", express.static("./public/images"))
app.post('/addvideo', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let data = { title: req.body.title, dvideos: `${reqFiles}` };
    console.log(data);
    let sql = "INSERT INTO video SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});




//route for Add content
app.use("/filename", express.static("./public/images"))

app.post('/addcontent', multipleUpload, (req, res) => {

    console.log("hellow", req.files)
    console.log("hellow", req.files.filename[0].filename)

    //  const reqFiles1 = [];
    const url = req.protocol + '://' + req.get('host')
    const reqFiles = (url + '/filename/' + req.files.filename[0].filename)
    const reqFiles1 = (url + '/filename/' + req.files.filename1[0].filename)
    //  for (var i = 0; i < req.files.length; i++) {
    //  reqFiles.push(url + '/filename/' + req.files[i].filename)
    //  }
    //  for (var i = 0; i < req.files.length; i++) {
    //       reqFiles1.push(url + '/filename1/' + req.files[i].filename)
    //  }




    let data = { cate: req.body.categories, sub: req.body.subcategories, room: req.body.room, title: req.body.title, link: req.body.link, video: `${reqFiles}`, dsc: req.body.description, image: `${reqFiles1}` };
    console.log(data);
    let sql = "INSERT INTO content SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for admin login page
app.post('/userlog', (req, res) => {

    let sql = "select * from login where email='" + req.body.username + "' and password='" + req.body.password + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.status(500).json({ success: false });
        } else {
            res.status(200).json("success");
        }
    });
});




//route for list register  users
app.post('/register', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  register ";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});




//route for list paid  users
app.post('/paiduser', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  paiduser ";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list paid  users
app.post('/subscribed', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  subscribed ";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list categories 
app.get('/listcate', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  categories";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list repoted 
app.get('/reported', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  report";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for delete reports

app.get('/noia/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM report WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for delete register

app.get('/redelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM register WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});


//route for delete subscription

app.get('/subdelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM subscription WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});



//route for delete categories

app.get('/catedelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM categories WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});



//route for delete sub categories
app.get('/subcatedelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM subcate WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for delete message
app.get('/messagedelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM message WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for delete video
app.get('/videodelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM video WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});


//route for delete video
app.get('/ticketdelete/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM ticket WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for list details of users 
app.post('/listdetails', (req, res) => {

    let sql = "select * from details where email='" + req.body.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
    });
});

//route for admin login page
app.post('/subcatelist', (req, res) => {

    let sql = "select * from subcate where catename='" + req.body.categories + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
    });
});



//route for list audio and live sessions for paid

app.post('/stype',(req,res) =>{
 const type= (req.body.type);
    //console.log(name);
    let sql ="SELECT * FROM paiduser WHERE Stype LIKE ?"
    let value ="%"+type+"%"
     let query =conn.query (sql,[value],(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for subscription edit
app.get('/subedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM subscription WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//route for subscription update
app.post('/updatesubs',(req,res)=>{
    let sql ="UPDATE subscription SET subplan ='"+req.body.plan +"',subuser ='"+req.body.suser +"',trial='"+req.body.trial+"',subprice='"+req.body.subprice+"',up='"+req.body.up+"',status='"+req.body.status+"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    });


});

//route for message update
app.post('/updatemessage',(req,res)=>{
    let sql ="UPDATE message SET msg ='"+req.body.msg +"',time ='"+req.body.time +"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    });


});

//route for message edit
app.get('/messageedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM message WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for category edit
app.get('/cateedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM categories WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for subcategory edit
app.get('/subediton/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM subcate WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


app.post('/subtype',(req,res) =>{
    
    const type= (req.body.type);
    //console.log(name);
  
  let sql ="SELECT * FROM subscribed WHERE Stype LIKE ?"
 let value ="%"+type+"%"

    let query =conn.query (sql,[value],(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list transaction room3,corporate, and live sessions for transaction history
app.post('/liststatus', (req, res) => {
    let sql = "select * from transaction where status='" + req.body.type + "'";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list accept/reject corprate users
app.post('/listcorpratear', (req, res) => {
    let sql = "select * from corprate where status='" + req.body.status + "'";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list subscription 
app.get('/subscription', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  subscription";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list transaction 
app.get('/listtransaction', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  transaction";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for insert sub
app.post('/addsubscriptions', (req, res) => {
    let data = { subplan: req.body.plan, subuser: req.body.suser, trial: req.body.trial, subprice: req.body.subprice, up: req.body.up, status: req.body.status };
    console.log(data);
    let sql = "INSERT INTO subscription SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for insert participants
app.post('/addparticipants', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, email: req.body.email, phone: req.body.phone, gname: req.body.gname, gnumb: req.body.gnumb };
    console.log(data);
    let sql = "INSERT INTO participants SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list groups 
app.post('/partsocial', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  participants where gname='" + req.body.gname + "'";

    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results.length);
    });
});

//route for list groups admin 
app.post('/listsocial', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  participants where gname='" + req.body.gname + "'";

    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});


//route for ticket reply
app.post('/reply', (req, res) => {

    let sql = "UPDATE ticket SET reply='" + req.body.reply + "' WHERE id='" + req.body.id + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results)
    });


});


//route for insert message
app.post('/addmessage', (req, res) => {
    let data = { msg: req.body.msg, time: req.body.time };
    console.log(data);
    let sql = "INSERT INTO message SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for insert groups
app.post('/social', (req, res) => {
    let data = { gname: req.body.gname, gnumb: req.body.gnumb };
    console.log(data);
    let sql = "INSERT INTO social SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list groups 
app.get('/listgroups', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  social";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});




//route for list message 
app.get('/listmessage', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  message";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});


//route for list subcategore 
app.get('/subcategore', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  subcate";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list listenquery 
app.get('/listenquery', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  enquery";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list listticket 
app.get('/listticket', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  ticket";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list content 
app.get('/contentlist', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  content";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});


//route for list invoices 
app.get('/listinvoice', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  invoice";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});


//route for list videos 
app.get('/listvideosk', (req, res) => {
    console.log(req.body.status)
    let sql = "SELECT * FROM  video";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

//route for list corprate users 
app.get('/listcorpratein', (req, res) => {
    const status = "0";
    let sql = "SELECT * FROM  corprate where status='" + status + "'";;
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});


//route for categore update
app.post('/cateupdate/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.status;
    console.log(data);
    let sql = "UPDATE categories SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for categore update
app.post('/updateinvoice/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.status;
    console.log(data);
    let sql = "UPDATE invoice SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for delete product
app.post('/listinvoiceon',function(req,res){
    const id=req.body.id;
    console.log(id);
    
    let sql ="select *from invoice WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for insert invoices
app.post('/addinvoice', (req, res) => {
    let data = { member: req.body.member, price: req.body.price , email: req.body.email, date: req.body.date, Edate: req.body.Edate, status: req.body.status};
    console.log(data);
    let sql = "INSERT INTO invoice SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for corprate user status update 
app.post('/coreupdate/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.status;
    console.log(data);
    let sql = "UPDATE corprate SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});



//route for sub categore update
app.post('/subupdate/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.status;
    console.log(data);
    let sql = "UPDATE subcate SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});








//app apis

// ------------email send -------------------------
app.get("/api/sendforgotmail/:email",(req, res) => {
    try {
      const email = req.params.email;
      console.log(req.params);
    //   const result = passwordChangingMail(email);
    let sql = "select*from register where email='"+req.params.email+"'";
    
    let query = conn.query(sql,(err, results) => {
        console.log(results)
         if (results.length != 0) {
        res.status(200).json(true);
       
        
          var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            // auth: {
            //     // must provide server name, otherwise TLS certificate check will fail
            //     user:
            // }
            auth: {
               user: "surbhigulhana3@gmail.com",
                pass: "myrzqwawoprowinm",// generated ethereal password
            },
          });
        
          // send mail with defined transport object
          var info =  transporter.sendMail({
            from: "surbhigulhana3@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Reset Password", // Subject line
          //  text: "Hello world? we are here", // plain text body
             html: `<url href={http://localhost:3000/Dyv/${email}`, // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        
  
        
     
          
        
        }else{
            res.status(500).json(false );
        }
    
     });
     
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      
        
     }     catch (err) {
         console.log(err);
          res.status(500).json(false);
     }
      });


//route for login api user
app.post('/login',(req, res)=>{

    let sql ="select * from register where email='"+req.body.email+"' and password='"+req.body.password+"'" ;

    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
                res.status(500).json({ success: false });
                // res.send('wrong email address')
            } else {
                res.status(200).json({ success: true });
            }
        });
});


//route for Add register users
app.use("/filename", express.static("./public/images"))
app.post('/Registeradd', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let data = { Fname: req.body.Fname,  password: req.body.password,Lname: req.body.Lname, email: req.body.email, address: req.body.address, phone: req.body.phone, pic: `${reqFiles}` };
    console.log(data);
    let sql = "INSERT INTO register SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            throw err;
            // res.send('wrong email address')
        } else {
            res.status(200).json({ success: true });
        }
    });
});

//route for Add paid users
app.post('/paid', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, phone: req.body.phone, email: req.body.email, Pamount: req.body.Pamount, Payment: req.body.Payment, date: req.body.date, Stype: req.body.Stype };
    console.log(data);
    let sql = "INSERT INTO paiduser SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).json({ success: true });
        }


    });
});

//route for insert corprate users
app.post('/addcorprate', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, email: req.body.email, phone: req.body.phone, Caddress: req.body.Caddress, Ctype: req.body.Ctype ,Rid: req.body.Rid ,status:req.body.status};
    console.log(data);
    let sql = "INSERT INTO corprate SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for Add transaction users
app.post('/addtransaction', (req, res) => {
    let data = { subs: req.body.subs, Trid: req.body.Trid, name: req.body.name, type: req.body.type, amount: req.body.amount, user: req.body.user, date: req.body.date };
    console.log(data);
    let sql = "INSERT INTO transaction SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).json({ success: true });
        }


    });
});

//route for Add subscribed users
app.post('/subscribe', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, phone: req.body.phone, email: req.body.email, type: req.body.type, Pdate: req.body.Pdate, Ddate: req.body.Ddate, Pamount: req.body.Pamount, Stype: req.body.Stype };
    console.log(data);
    let sql = "INSERT INTO subscribed SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).json({ success: true });
        }


    });
});

//route for insert ticket 
app.post('/addticket', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, phone: req.body.phone, email: req.body.email, msg: req.body.msg };
    console.log(data);
    let sql = "INSERT INTO ticket SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).json({ success: true });
        }


    });
});


//route for insert enquery 
app.post('/addenquery', (req, res) => {
    let data = { Fname: req.body.Fname, Lname: req.body.Lname, phone: req.body.phone, email: req.body.email, msg: req.body.msg };
    console.log(data);
    let sql = "INSERT INTO enquery SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('error')
        } else {
            res.status(200).json({ success: true });
        }


    });
});


//route for Add repoted users
app.use("/filename", express.static("./public/images"))
app.post('/report', upload.array('filename', 1), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({ reqFiles })



    let data = { Fname: req.body.Fname, Lname: req.body.Lname, email: req.body.email, address: req.body.address, phone: req.body.phone, pic: `${reqFiles}` };
    console.log(data);
    let sql = "INSERT INTO report SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            throw err;
            // res.send('wrong email address')
        } else {
            res.status(200).json({ success: true });
        }
    });
});



app.listen(4200, () => {
    console.log(`express server running on 4200`);
});