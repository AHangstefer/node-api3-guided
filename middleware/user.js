const usersModel = require("../users/users-model")
//const userModel = require("../users/users-model")

function checkUserId(){
    return (req, res, next) => {
        usersModel.findById(req.params.id)
        .then((user) => {
			if (user) {
                //attch the user data to the requrest,
                // so we cna access it in later middleware req.user = user
                req.user = user
                next()
				//res.status(200).json(user)
			} else {
				res.status(404).json({
					message: "User not found",
				})
			}
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error retrieving the user",
			})
		})
    }

}

module.export = {
    checkUserId,
}