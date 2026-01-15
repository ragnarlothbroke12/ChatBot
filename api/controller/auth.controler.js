import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
        console.log(email, password);
        return;
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            next(errorHandler(404, 'User not found'));
            return;
        }

        const isMatch =  bcryptjs.compareSync(password, user.password);
        if (!isMatch) {
            next(errorHandler(400, 'Invalid credentials'));
            return;
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        console.log(process.env.JWT_SECRET);


        const { password: pwd, ...others } = user._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json({ ...others });
    } catch (error) {
        next(error);
    }
};

export const signup = async (req, res, next) => {
    
    const { name, email, password } = req.body;

    if(!name || 
        !email || 
        !password || 
        name === '' ||
        email === '' ||
        password === '') {
        
            next(errorHandler(400, 'All fields are required'));
            return;
    }


    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword    
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};