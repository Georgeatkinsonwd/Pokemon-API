//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click',getPokemon)

async function getPokemon(){
  document.querySelector('.movesUl').innerHTML = ''
  const idOrName = document.querySelector('input').value.toLowerCase()
  let response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
  let pokeData = await response.json()
  
  document.querySelector('#pokeImg1').src = pokeData.sprites.front_default


  document.querySelector('.type1').innerHTML = `Types: ${pokeData.types[0].type.name},`
  if(pokeData.types[1]){
    document.querySelector('.type2').innerHTML = pokeData.types[1].type.name
  }
  else if(!pokeData.types[1]){
    document.querySelector('.type2').innerHTML = ''
  }


  
// Ability Names
  document.querySelector('.abilities').innerText = 'Abilities:'
  pokeData.abilities.forEach(obj=>{
    let span = document.createElement('span')
    span.textContent += ` ${obj.ability.name}, `
    document.querySelector('.abilities').appendChild(span)
  })

// Ability Descriptions
const urlArray = [] 
pokeData.abilities.forEach(obj=>{
urlArray.push(obj.ability.url)
})
let data1 = await fetch(urlArray[0])
let desc1 = await data1.json()
document.querySelector('.desc1Title').innerText = desc1.name
document.querySelector('.desc1').innerHTML = desc1.effect_entries[1].effect
if(urlArray[1]){
  let data2 = await fetch(urlArray[1])
  let desc2 = await data2.json()
  document.querySelector('.desc2Title').innerHTML = desc2.name
  document.querySelector('.desc2').innerHTML = desc2.effect_entries[1].effect
}
else if(!urlArray[1]){
  document.querySelector('.desc2Title').innerHTML = ' '
  document.querySelector('.desc2').innerHTML = ' '
}
if(urlArray[2]){
let data3 = await fetch(urlArray[2])
let desc3 = await data3.json()
document.querySelector('.desc3Title').innerHTML = desc3.name
document.querySelector('.desc3').innerHTML = desc3.effect_entries[1].effect
}
else if(!urlArray[2]){
  document.querySelector('.desc3').innerHTML = ' '
  document.querySelector('.desc3Title').innerHTML = ' '
}

// Move list
document.querySelector('.moves').innerHTML = 'Move-List'
pokeData.moves.forEach(obj=>{
  let li = document.createElement('li')
  li.textContent = obj.move.name
  document.querySelector('.movesUl').appendChild(li)
})
}






  
                              // things to improve

// Make it look better


// Could add type weaknesses -- API doesn't show for pokemon with double typing though.  https://pokeapi.co/api/v2/type/${typeName or id}


// maybe create and hide all the types in CSS and then show depending on results of search 


// result if you search something invalid

// add a try and catch.


// try OOP ?














































// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
//   let pokeStoreOne = []
//   let pokeStoreTwo = []
//   let pokeImg = []

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {

//         pokeStoreOne.push(data.types.forEach(obj => {
//           pokeStoreOne.push(obj.type.name)
//         }))

//         data.stats.forEach(obj => {
//           const li = document.createElement('li')
//           li.textContent = obj.stat.name
//           document.querySelector('#statName').appendChild(li)
          
//         })

//         data.stats.forEach(obj => {
//           const li2 = document.createElement('li')
//           li2.textContent = obj.base_stat
//           document.querySelector('#statNumbs').appendChild(li2)
//         })

        
//         pokeImg.push(data.sprites.front_shiny)
        
//         fetch(url2)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {

//           pokeStoreTwo.push(data.types.forEach(obj => {
//             pokeStoreTwo.push(obj.type.name)
//           }))

//           data.stats.forEach(obj => {
//             const li3 = document.createElement('li')
//             li3.textContent = obj.stat.name
//             document.querySelector('#statName2').appendChild(li3)
            
//           })
  
//           data.stats.forEach(obj => {
//             const li4 = document.createElement('li')
//             li4.textContent = obj.base_stat
//             document.querySelector('#statNumbs2').appendChild(li4)
//           })

//           pokeImg.push(data.sprites.front_shiny)
    
//             document.querySelector('#pokeImg1').src = pokeImg[0]
//             document.querySelector('#pokeImg2').src = pokeImg[1]
//             document.querySelector('#types1').innerHTML = pokeStoreOne
//             document.querySelector('#types2').innerHTML = pokeStoreTwo

          
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });


//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });



      
// }