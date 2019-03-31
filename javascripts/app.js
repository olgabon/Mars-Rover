var rover = {
direction: "N",
x: 5,
y: 5,
travelLog: []
}

//Rover`s Grid
function boundaries(rover) {
  if (rover.y === 0 && rover.direction === "N") {
    console.log("TOO FAR TO THE NORTH");
  }
  if (rover.y >= 9 && rover.direction === "S") {
    console.log("TOO FAR TO THE SOUTH");
  }
  if (rover.x === 0 && rover.direction === "W") {
    console.log("TOO FAR TO THE WEST");
  }
  if (rover.x >= 9 && rover.direction === "E"){
    console.log("TOO FAR TO THE EAST");
  }
} 


function turnLeft(rover) {
  switch(rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("Turn left! New direction: " + rover.direction);
}
//console.log(turnLeft(rover)) 

function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("Turn right! New direction: " + rover.direction)
}

//console.log(turnRight(rover))

function moveForward(rover){
  switch (rover.direction) {
    case "N": 
    rover.y-=1;
    break;
    case "W":
    rover.x-=1;
    break;
    case "S":
    rover.y+=1;
    break;
    case "E":
    rover.y+=1;
    break;
}
console.log("The new position of the rover is " + rover.x + " & " + rover.y);
rover.travelLog.push([rover.x, rover.y]);
boundaries(rover);
}

//console.log(moveForward(rover))

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
    rover.y+=1;
    break;
    case "W":
    rover.x+=1;
    break;
    case "S":
    rover.y-=1;
    break;
    case "E":
    rover.y-=1;
    break;
}
console.log("The new position of the rover is " + rover.x + " & " + rover.y)
rover.travelLog.push([rover.x, rover.y]);
boundaries(rover);
}
//console.log(moveBackward(rover))

var commandList = "";
function command(commandList) {
  for (var i=0; i<commandList.length; i++){
    switch (commandList[i]) {
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      default:
      console.log("This command does not exist");
    };
  };
}
command ('lbrbrflf');

console.log(rover.travelLog)


