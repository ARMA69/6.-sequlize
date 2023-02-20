const yup = require('yup')

module.exports.TASK_SCHEMA = yup.object({
    body: yup.string().required('Tast text is require').min(1),
    isDone: yup.boolean().required(),
    deadline: yup.date()

})