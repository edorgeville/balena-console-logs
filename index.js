
const linesPerLoop = 1

let counter = 0

const main = () => {
  for (let i = 1; i <= linesPerLoop; i++) {
    console.log('Counter', counter, ':', i, '/', linesPerLoop)
  }
  counter++
}

setTimeout(() => {
  setInterval(main, 1000)
}, 1000)
