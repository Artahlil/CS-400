const express = require('express');
const router = express.Router();

var request = require('request');
var options = {
    'method': 'GET',
    'url': 'http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=326c8214&app_key=94e765a6855300ece44a7ab0ba3fec59',
    'headers': {
    }
};


let responseBody;
request(options, function (error, response) {
    if (error) throw new Error(error);
    responseBody = response.body;
    console.log(response.body);
});

router.post('/', (req, res, next) => {
    res.render('index',
        {
            weather: responseBody
        }
    );
});


module.exports = router;