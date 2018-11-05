let target = {
  name: "target",
  health: 100,
  hits: 0,
  modifier: 1,
  items: []
}

var items = {
  sword: {
    name: "Siegelinde", weight: 1, might: 2, character: ""
  },
  axe: {
    name: "Hauteclere", weight: 3, might: 4, character: ""
  },
  lance: {
    name: "Gradivus", weight: 2, might: 3, character: ""
  },
}

function slap() {
  target.health = target.health - (1 * target.modifier)
  target.hits++
  update()
}
function punch() {
  target.health = target.health - (5 * target.modifier)
  target.hits++
  update()
}
function kick() {
  target.health = target.health - (10 * target.modifier)
  target.hits++
  update()
}
function update() {
  // if (target.health = 100) {
  //   document.getElementById("char").innerHTML = Image(zelgius.png)
  // }
  // else if (target.health <= 66) {
  //   document.getElementById("char").innerHTML = Image(zelgiusattack.jpg)
  // }
  // else (target.health <= 33){
  //   document.getElementById("char").innerHTML = Image(zelgiusinjured.png)
  // }
  if (target.health <= 0) {
    target.health = 0
  }
  String(target.health)
  String(target.hits)
  // @ts-ignore
  document.getElementById("health").innerHTML = target.health
  // @ts-ignore
  document.getElementById("hits").innerHTML = target.hits
  // @ts-ignore
  parseInt(target.health)
  // @ts-ignore
  parseInt(target.hits)
}

function reset() {
  target.health = 100
  target.hits = 0
  target.modifier = 1
  document.getElementById("slap").innerText = "Slap"
  document.getElementById("punch").innerText = "Punch"
  document.getElementById("kick").innerText = "Kick"
  update()
}

function sword() {
  target.modifier = 2
  document.getElementById("slap").innerText = "Stab"
  document.getElementById("punch").innerText = "Cut"
  document.getElementById("kick").innerText = "Slice"
}
function axe() {
  target.modifier = 4
  document.getElementById("slap").innerText = "Chop"
  document.getElementById("punch").innerText = "Hack"
  document.getElementById("kick").innerText = "Swing"
}
function lance() {
  target.modifier = 3
  document.getElementById("slap").innerText = "Jab"
  document.getElementById("punch").innerText = "Lunge"
  document.getElementById("kick").innerText = "Sweep"
}

