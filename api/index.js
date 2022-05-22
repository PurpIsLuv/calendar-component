const express = require('express')
const app = express()
app.use(express.json())

app.get('/events', (_, res) => {
  res.json({
    events: [
      {
        id: 1,
        name: 'Основное событие lorem ipsumasdasdasd',
        timestamp: 1653122178,
        type: "primary"
      },
      {
        id: 2,
        name: 'Какое то событие',
        timestamp: 1653227310,
        type: "danger"
      },
      {
        id: 3,
        name: 'Другое событие',
        timestamp: 1653227310,
        type: "warn"
      },
      {
        id: 4,
        name: 'It is a long established fact that a reader',
        timestamp: 1653227310,
        type: "danger"
      },
      {
        id: 5,
        name: 'Lorem Ipsum is simply dummy text',
        timestamp: 1653227310,
        type: "primary"
      }
    ]
  })
})

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 8080
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}