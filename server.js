

const express = require('express');
const { connect } = require('mqtt');
const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://doadmin:5fIX0x6719s3KMT8@mongodb-farmstay-377e851f.mongo.ondigitalocean.com/admin?authSource=admin&tls=true"

const app = express()
app.use(express.json())

app.get('/sensor/rfid', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/rfid')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});
app.get('/sensor/humi', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/humi')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});
app.get('/sensor/temp', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/temp')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});
app.get('/sensor/moisture', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/moisture')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});
app.get('/sensor/fire', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/fire')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});
app.get('/sensor/waterlevel', (req, res) => {
    mongoClient.connect(uri, (err, db) => {
        if (err) {
            res.send("Error while connecting to MongoDB");
        } else {
            const myDb = db.db('FarmSensor')
            const collection = myDb.collection('sensor/waterlevel')

            collection.find().toArray((err, data) => {
                if (err) {
                    res.send("Error while retrieving data");
                } else {
                    res.send(data);
                }
                db.close();
            });
        }
    });
});

app.listen(3000, () => {
    console.log("listen port 3000")
})