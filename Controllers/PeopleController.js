const db = require('../Config/Sequelize')
const People = db.People
const { Operators } = require('sequelize');

module.exports = {
    // Display the number of people according to age group 
    // From 0-35 as a young adult, 36 to 50 as an adult, 51 and above as seniors)
    // Use https://sequelize.org/master/manual/model-querying-basics.html#operators
    getBar: (req, res) => {
        People.count({
            where: {
                age: {
                    [Operators.between]: [0, 35],
                }
            }
        }).then(function(young) {
            People.count({
                where: {
                    age: {
                        [Operators.between]: [36, 50],
                    }
                }
            }).then(function(adult) {
                People.count({
                    where: {
                        age: {
                            [Operators.gte]: 51,
                        }
                    }
                }).then(function(seniors) {
                    res.status(200).json({
                        Young: young,
                        Adult: adult,
                        Seniors: seniors
                    })
                })
            })
        })
    },
    getPie: (req, res) => {
        People.count({
            where: {
                gender: "M"
            }
        }).then(function(male_count) {
            People.count({
                where: {
                    gender: "F"
                }
            }).then(function(female_count) {
                res.status(200).json({
                    Male: male_count,
                    Female: female_count,
                    Ratio_of_M_and_F: male_count / female_count
                })
            })
        });
    },
    addChart: (req, res) => {
        if (!req.body.Name || !req.body.Age || !req.body.Age) {
            res.status(400).send({
                message: "Fields cannot be Empty"
            })
            return;
        }
        const data = req.body;
        People.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the People."
            });
        });
    },
    getChart: (req, res) => {
        
        People.findAll().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Received",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Received"
                })
            }
        })
    }
}