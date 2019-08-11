import * as functions from "firebase-functions"

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!")
})
exports.helloWorld2 = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!2")
})

exports.helloWorld3 = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!3")
})
