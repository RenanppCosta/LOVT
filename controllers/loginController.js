const renderLoginPage = (req, res)=>{
    res.render("login", {errors: [], data:{}});
}


const authenticateUser = (req,res)=>{
    res.send("Okay");
} 

module.exports = {
    renderLoginPage,
    authenticateUser
}