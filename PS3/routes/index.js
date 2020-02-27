const express = require('express');
const router = express.Router();

router.get('/:name/:breed', (req, res, next) => {
  res.send()
});

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index',
      {
        string: 'Hey now!'
      })
});

router.get('/post', (req, res, next) => {
  res.send({

  })
});

router.get('/', (req, res, next) => {
  res.send('Sorry Charlie!')
});

router.get('/', function(req, res, next) {
  let a = 1;
  //res.send(`Name: ${req.query.name}, Breed: ${req.query.breed}`)
  res.render('index',
      { name: req.query.name,
        breed: req.query.breed
      });
});

router.post('/', (req, res, next) => {
  const foo = JSON.parse(req.body.name);
  const bar = JSON.stringify(req.body.name);
  res.send(
      { name: req.body.name,
    breed: req.body.breed
  });
});


module.exports = router;

// without line 46 there is an error saying that router.use requires middleware, this means no modules were
// exported

// if you write a method, it can be exported using exports.functionName = functionName
