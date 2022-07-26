let murderers = ["plum", "mustard", "scarlett", "white"];


const weapons = [
  {name:"lead pipe"},
  {name: "Candle Stick"},
  {name: "revolver"}
]

const decalreMurderer = (murderers) => {
  for (let index = 0; index < murderers.length; index++) {
      if (index == 2){
        murderers[index] = "green"
        return murderers[index]
      }
      else{
          return murderers[index]
      }
  }
};




const declareWeapon = function(weapons){
  let found;
    for (let index = 0; index < weapons.length; index++) {
      let weapon = weapons[index]
      if (weapon.name == "revolver")
      
    found =weapon.name[1]
 
    }
    return found
}

if (murderers[0] === "plum"){
  murderers = "maple"
}

for (let index = 0; index < murderers.length; index++) {
    let murderer = murderers[index]
    murderer = null


  if (murderers[4] && murderers[5]){
    murderers = "mustard"
  }

  if (murderers){
    const murderers = "Plum"
}
};

const verdictWeapon = declareWeapon(weapons)
const verdict = decalreMurderer(murderers)
console.log(verdict,verdictWeapon);
