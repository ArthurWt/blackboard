/**
 *
 * ramroll on 16/9/7.
 */


function socketDriver () {

  return xs.create({
    start : listener => {
      this.connection = new WebSocket('ws://localhost:9877')
      connection.onerror = (error) => {
        listener.error(err)
      }
      connection.onmessage = (msg) => {
        listener.next(msg)
      }
    },
    stop : () => {
      this.connection.close()
    }
  })

}
