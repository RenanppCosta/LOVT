const { body, validationResult } = require("express-validator")


const validateUser = (req,res,next)=>{
    const errors = validationResult(req);
    console.log(errors, req.body)
    if(!errors.isEmpty()){
        return res.render("login", {
            errors: errors.array(),
            data: {
                email: req.body.email,
                password: req.body.password
            },
        });
        
    }

    next();
}

const fieldsValidation = [
    body("email").isEmail().withMessage("Você precisa digitar um email válido."),
    body("password").notEmpty().withMessage("A senha não pode ser vazia.").isLength({min:5}).withMessage("A senha precisa ter pelo menos 5 dígitos.")
]


module.exports = {
    validateUser,
    fieldsValidation
}