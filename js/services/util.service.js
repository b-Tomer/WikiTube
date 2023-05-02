'use strict'

// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
function debounce(func, wait) {
  let timeout

  return function (...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
function startTimer(label = 'time', initial = false) {
    console.log(`Timer ${label} started...`)
    console.group(label)
    
    const start = performance.now()
    if(initial) console.log(`Starting ${label}...`)
    
    return {
        log: (msg) => console.log(`${label} ${msg ? msg : 'logged at' }: ${(performance.now() - start).toLocaleString()}`),
        end: () => {
            console.log(`Timer ended at ${(performance.now() - start).toLocaleString()}`)
            console.groupEnd(label)
        }
    }
}