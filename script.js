function textChanger(newString, span, interval) {
  return new Promise((resolve) => {
        
    // create arrays from strings
    const oldString = span.innerText
    const newStringArray = []
    const oldStringArray = []
    for (let i = 0; i < newString.length; i++) {
      newStringArray.push(newString[i])
    }
    for (let i = 0; i < oldString.length; i++) {
      oldStringArray.push(oldString[i])
    }
    let newStringArrayLength = newStringArray.length
    let oldStringArrayLength = oldStringArray.length

    // equalize string arrays lenght
    if (newStringArrayLength < oldStringArrayLength) {
      for (let i = 0; i < oldStringArrayLength - newStringArrayLength; i++) {
        newStringArray.push(null)    
      }    
    }
    else if (newStringArrayLength > oldStringArrayLength) {
      for (let i = 0; i < newStringArrayLength - oldStringArrayLength; i++) {
        oldStringArray.push(null)      
      }
    }
    
    // change one character at time
    let changedStringArray = oldStringArray
    let i = 0 
    function change() {         
      setTimeout(() => {   
        changedStringArray[i] = newStringArray[i]
        if (i < changedStringArray.length-2) {
          changedStringArray[i+1] = '\u25AE'
        }
        let changedString = changedStringArray.join('')
        span.innerText = changedString
        i++
        if (i < changedStringArray.length) {          
          change()        
        } else {
          span.innerText = newString
          resolve()          
        }
      }, interval)
    }  
    change()    
  })
}

export { textChanger }