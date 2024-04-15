const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
    try {
        const userCount = await userService.getUserCount();
        const { username, email, password } = req.body;

        // Determine the role based on the number of existing users
        const role = userCount === 0 ? 'admin' : 'user';

        // Create the user with the determined role
        const user = await userService.createUser({ username, email, password, role });
        const jwt = jwtProvider.generateToken(user._id);

        // Create cart for the user
        await cartService.createCart(user);

        return res.status(200).send({ jwt, message: "register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found With Email ', email });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "login success" });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = { register, login };
