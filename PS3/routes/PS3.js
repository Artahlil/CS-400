const express = require('express');
const router = express.Router();


// router.route('/')
//     .get((req, res, next) => {
//         res.render('index',
//             {
//                 stringToRender: 'Hey now!'
//             })
//     })
//     .post((req, res, next) => {
//         res.send(
//             {
//                 stringPost: req.body.stringPost,
//                 lengthOfString: req.body.stringPost.length
//             })
//     });

router.get('/', (req, res, next) => {
    res.render('index',
        {
            stringToRender: 'Hey now!'
        })
});

router.post('/', (req, res, next) => {
    res.render('index',
        {
            stringPost: req.body.stringPost,
            lengthOfString: req.body.stringPost.length
        }
    );
});

module.exports = router;