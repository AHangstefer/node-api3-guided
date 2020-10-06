const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")
//const morgan = require("morgan")
const logger = require("./middleware/logger")
const deny = require("./middleware/deny")

const server = express()
const port = 5000


server.use(express.json())
//server.use(morgan("combined"))


server.use(welcomeRouter)
server.use(usersRouter)
server.use(logger)
server.use(deny)

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
