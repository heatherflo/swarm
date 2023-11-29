const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣', '⛽️',
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '⛽️'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '⛽️',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '⛽️',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]

function drawPeople() {
  //find people 
  locations.forEach(location => {
    console.log(location)
    //send people to a location
    let filteredPeople = people.filter(person => person.location == location)
    console.log('👨‍👩‍👧', filteredPeople)
    //draw them to page
    const locationElm = document.getElementById(location)
    console.log('🏙️', locationElm)
    let peopleEmojis = filteredPeople.map(person => person.picture)
    console.log('👨‍👩', peopleEmojis)

    locationElm.innerText = peopleEmojis.join(' ')
  })
}

function attack(locationOfInterest) {
  //found people in their location
  let attackedPeople = people.filter(people => people.location == locationOfInterest)
  console.log(locationOfInterest, attackedPeople)
  //change people to bats from their location
  // for each or for loop that sets the person's picture to a bat
  //for each attacked person  => person.picture =="🦇"
  attackedPeople.forEach(batPerson => batPerson.picture = "🦇")

  drawPeople()
  youWon()
  movePeople()
}

function youWon() {
  let attackedPeople = people.filter(batPerson => batPerson.picture == "🦇")
  if (people.length == attackedPeople.length) {
    window.alert("All people are BATS! You Won!")
  }

  console.log(attackedPeople, "🦇")
}

function movePeople() {
  people.forEach(person => {
    if (person.picture != '🦇') {
      let newLocation = locations[Math.floor(Math.random() * locations.length)]
      console.log(newLocation, '🥲')
      person.location = newLocation
    }
  })

  drawPeople()
  youWon()
}

drawPeople()
