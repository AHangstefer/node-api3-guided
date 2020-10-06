module.export = () => {
    
    switch (format){}



server.use((req, res, next)=>{
	const time = new Date().toISOstring();
	console.log(`[${time}] ${req.id} ${req.method} ${req.url}`)

	//this middleware is finished, move on to the next piece of middleware
	next()
})
//these are asyncronous so we have to tell them when to move on

}