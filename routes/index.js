const express = require('express');
const router = express.Router();

const linksArray = [
	{
		title: "AAA",
		link: "aaa"
	},
	{
		title: "BBB",
		link: "bbb"
	}
];

/* GET home page. */
router.get('/', (req, res, next) => {
	const data = {
		title: "iiDeo",
		name: "iiDeo",
		tagline: "",
		links: linksArray
	};
	res.render('index', data);
});

router.get('/about', (req, res, next) => {
	const data = {};
	res.render('about', data);
});

router.get('/privacy', (req, res, next) => {
	const data = {};
	res.render('privacy', data);
});

module.exports = router;
