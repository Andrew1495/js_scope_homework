let murderers = ["plum", "mustard", "scarlett", "white"];

const decalreMurderer = (murderers) => {
  for (let index = 0; index < murderers.length; index++) {
      if (index == 2){
        murderers[index] = "green"
        return murderers[index]
      }
      else{
          return murderers[index] + murderers[4]
      }
  }
};

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



const verdict = decalreMurderer(murderers)
console.log(verdict);
