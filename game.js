var health = 100;
var slapbtn = document.getElementById("slapbtn")
var kickbtn = document.getElementById("kickbtn")
var punchbtn = document.getElementById("punchbtn")
var hits = 0;
var enemy = "";
var items = {
  sword: {
    name: "Siegelinde", weight: 1, might: 16
  },
  axe: {
    name: "Hauteclere", weight: 3, might: 20
  },
  lance: {
    name: "Gradivus", weight: 2, might: 18
  },
}

function sword() {
  if (health - 1 < 0) {
    health = 0

  } else {
    health--
    hits++
  }
  String(health)
  String(hits)
  update()
}
function lance() {
  if (health - 5 < 0) {
    health = 0

  } else {
    health -= 5
    hits++
  }
  String(health)
  String(hits)
  update()
}

function axe() {
  if (health - 10 < 0) {
    health = 0

  } else {
    health -= 10
    hits++
  }
  String(health)
  String(hits)
  update()
}

function update() {

  // @ts-ignore
  document.getElementById("health").innerHTML = health
  // @ts-ignore
  document.getElementById("hits").innerHTML = hits

  // @ts-ignore
  parseInt(health)
  // @ts-ignore
  parseInt(hits)

}

function reset() {
  health = 100
  hits = 0
  String(health)
  String(hits)
  update()
}