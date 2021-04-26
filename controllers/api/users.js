const User = require('../../models/user');
const jwt = require('jsonwebtoken');

/*--- Helper Functions ---*/
function createJWT(user) {
	return jwt.sign(
		// Data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}

async function create(req, res) {
	try {
		// Add the user to the database
		const user = await User.create(req.body);
		console.log('user successfully created => ', user);
		const token = createJWT(user);
		res.json(token);
	} catch (err) {
		// Client will check for non-2xx status code
		// 400 code  = bad request
		res.status(400).json(err);
	}
}

module.exports = {
	create,
};
