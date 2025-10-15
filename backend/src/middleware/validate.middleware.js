const {body, validationResult} = require('express-validator')

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
}

const registerUserValidation = [
    body('username').notEmpty().withMessage('Username is required')
    .isLength({min:3, max:30}).withMessage('Username must be between 3 and 30 characters long'),
    
    body('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address'),

    body('password').notEmpty().withMessage('Password is required'),

    body('fullName.firstName').notEmpty().withMessage('First name is required')
    .isLength({max:50}).withMessage('First name cannot exceed 50 characters'),

    body('fullName.lastName').isLength({max:50}).withMessage('Last name cannot exceed 50 characters'),
    
  validate
]
const loginUserValidation = [
  body().custom((value, { req }) => {
    if (!req.body.username && !req.body.email) {
      throw new Error('Either username or email is required')
    }
    return true
  }),

  body('username')
    .optional()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters long'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Please enter a valid email address'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
]


module.exports = {
    registerUserValidation,
    loginUserValidation
}