import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    
    console.log("REQ BODY:", req.body);
    const { name, email, password } = req.body;

    if(!name || 
        !email || 
        !password || 
        name === '' ||
        email === '' ||
        password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    
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
        res.status(500).json({ message: 'Error registering user', error });
    }
};