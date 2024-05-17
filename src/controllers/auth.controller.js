import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { UserModel } from '../models/user.js';

export const registerUser = [
  // validaciones express-validator
  body('username').notEmpty().withMessage('El nombre de usuario es requerido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({
        username,
        password: hashedPassword,
        imageID: 0,
        role: 'dev',
        status: 'A'
      });

      res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error en el servidor' });
    }
  }
];

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};