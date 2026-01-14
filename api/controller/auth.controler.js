import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

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