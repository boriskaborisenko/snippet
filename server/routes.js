const snippets = require('./snippets')

const appRouter = (app, next) => {
        
        app.post("/auth", (req, res) => {
            const pass = 'megapass'
            const candidate = req.body.pass
            let isValid
            
            pass == candidate ? isValid = true : isValid = false

            if(isValid){
                res.json({
                    message: isValid,
                    data: snippets
                })
            }else{
                res.json({
                    message: isValid,
                    data: 'EMPTY'
                })
            }
        });

}
    
module.exports = appRouter;