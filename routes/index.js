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
router.get('/', function (req, res, next) {
	const data = {
		title: "iiDeo",
		name: "iiDeo",
		tagline: "",
		links: linksArray
	};
	res.render('index', data);
});

module.exports = router;
