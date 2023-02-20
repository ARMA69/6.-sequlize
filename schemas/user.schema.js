const yup = require('yup')

module.exports.USER_SCHEMA = yup.object({
    firstName: yup.string().required('First name is required').min(2),
    lastName: yup.string().required('Last name is required').min(2),
     email: yup.string().required('Email name is required').min(3).email('Invalid email'),
     password: yup.string().required('Password name is required').min(6),
     birthday: yup.date(),
     gender: yup.string()
 
})