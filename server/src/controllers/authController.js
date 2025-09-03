import bcrypt from 'bcrypt'
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'


const SECRET_KEY = process.env.JWT_SECRET_KEY;

const register = async (req, res) => {

    const { username, email, password } = req.body;

    const saltRounds = parseInt(process.env.BCRYPT_SALT_RATE, 2);

    try {

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required..." });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'User already exists' });
        }


        const hashed = await bcrypt.hash(password, saltRounds)

        const user = await User.create({
            username,
            email,
            password: hashed
        })

        res.status(400).json({ message: "User successfully created..." })

        // bcrypt.genSalt(saltRounds, function (err, salt) {
        //     bcrypt.hash(password, salt, function (err, hash) {
        //         // Store hash in your password DB.
        //         res.json({ username, email, hash })
        //     });
        // });

    } catch (error) {
        // console.log(error);

        res.status(500).json({ message: 'Error registering user' });
    }

}


const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "Email does not exists..." })

        const match = await bcrypt.compare(password, user.password)

        if (!match) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '2m' })

        res.cookie("token", token)

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }

}

export { register, login };