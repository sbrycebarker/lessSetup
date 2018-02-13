const express = require('express');



  let app = express()



app.use(express.static('./public'))
      var port = 8080
  app.listen(port, () => {
    console.log("listining on port " + port)
  })
