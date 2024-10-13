const readline = require('readline')

// Create interface for reading from stdin

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
})

console.log('Press Ctrl+C to trigger SIGINT') 

// Counter to keep track of SIGINT
let sigintCount = 0 

//Signal handler for SIGINT 
process.on('SIGINT', () => {
  sigintCount++
  console.log('\nSIGINT signal recieved')

  if (sigintCount === 1) {
    console.log('Press Ctrl+C to exit')
  } else {
    console.log('Exiting')
    rl.close()
    process.exit(0)
  }
})

// Keep program running
rl.question('Enter something (or Ctrl+C to trigger SIGINT): ', (answer) => {
  console.log(`You entered: ${answer}`)
  rl.close()
})
