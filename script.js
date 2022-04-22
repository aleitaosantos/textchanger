let activeIdiom
activeIdiom = 'en'

const textContents = {}
textContents.line1 = {}
textContents.line2 = {}
textContents.line3 = {}

textContents.line1.en = 'Hello, World!'
textContents.line1.fr = 'Bonjour, Monde!'
textContents.line1.pt = 'Olá, Mundo!'

textContents.line2.en = 'With 509 votes to 3 and 47 abstentions, the European Parliament adopted on Thursday a resolution recalling various measures necessary to protect children and young people fleeing violence and facilitate their integration into host country communities.'
textContents.line2.fr = 'Par 509 voix pour, 3 contre et 47 abstentions, le Parlement a adopté jeudi une résolution rappelant diverses mesures nécessaires pour protéger les enfants et les jeunes fuyant la violence et pour faciliter leur intégration dans les communautés des pays d’accueil.'
textContents.line2.pt = 'Com 509 votos a favor, 3 contra e 47 abstenções, o Parlamento Europeu adotou na quinta-feira uma resolução que aponta várias medidas necessárias para proteger as crianças e os jovens que fogem da violência e facilitar a sua integração nas comunidades dos países de acolhimento.'

textContents.line3.en = '“Every child has the right to be protected from violence, exploitation and abuse”, say MEPs, calling on EU countries to protect children from the risk of trafficking, illegal adoption and other types of abuse.'
textContents.line3.fr = '“Tous les enfants ont le droit d’être protégés contre la violence, l’exploitation et les abus”, affirment les députés, qui appellent les pays de l’UE à les protéger contre les risques de traite, d’adoption illégale et d’autres types d’abus.'
textContents.line3.pt = '“Todas as crianças têm o direito de ser protegidas contra a violência, exploração e abusos”, defendem os eurodeputados, apelando aos Estados-Membros para que protejam as crianças do risco de tráfico, adoção ilegal e outros tipos de abuso.'

// //initial text insert
// function setIdiom(idiom) {
//   document.querySelectorAll('.changeable-text').forEach(span => {
//     span.innerHTML = (textContents[span.id])[idiom]
//   })  
// }
// setIdiom(activeIdiom)


// function changeIdiom(newIdiom='en') {
  
  //   document.querySelectorAll('.changeable-text').forEach(span => {
    
    //   })
    //   activeIdiom = newIdiom
    // }
    
function textChanger(newString, spanId) {
  
  const span = document.querySelector(spanId)
  const oldString = span.innerText
   const newStringArray = []
  const oldStringArray = []
      
  //create arrays from strings

  for (let i = 0; i < newString.length; i++) {
    newStringArray.push(newString[i])
  }
  for (let i = 0; i < oldString.length; i++) {
    oldStringArray.push(oldString[i])
  }

  newStringArrayLength = newStringArray.length
  oldStringArrayLength = oldStringArray.length

  //equalize string arrays
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
  
  console.log(newStringArray, oldStringArray)
  
  
  // console.log(newStringArray.length)
  // console.log(oldStringArray.length)


  //substitute each character at time
  changedStringArray = oldStringArray

  let i = 0 
  function change() {         
    setTimeout(function() {   
      changedStringArray[i] = newStringArray[i]
      changedString = changedStringArray.join('')
      span.innerHTML = changedString
      i++
      if (i < changedStringArray.length) {
        change()
      }
    }, 5) //set interval
  }  
  change()

}

setTimeout(() => {
  textChanger(textContents.line2.fr, '#line1')
}, 2000)

setTimeout(() => {
  textChanger(textContents.line2.pt, '#line1')
}, 6000)

// setTimeout(() => {
//   textChanger(textContents.line2.en, '#line1')
// }, 10000)