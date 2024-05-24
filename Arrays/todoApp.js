let names = [];

let req = prompt("Enter the request");

while (true) {
  if (req == "quit") {
    alert("its fine");
    break;
  }
  if (req == "add") {
    let task = prompt("Enter the task");
    if (task !== "") {
      names.push(task);
      console.log("task added");
    }
  } else if (req === "show") {
    for (name of names) {
      console.log("________________________");
      console.log(name);
    }
  }
  else if(req=="delete"){
    let delTask=prompt("Enter the task witch you wants to delete");
    if(names.includes(delTask)){
      names.splice(names.indexOf(delTask),1)
      console.log("elements deleted");
    }
    else{
      prompt("Enter the correct task")
    }
  }
  else{
    alert("wrong request")
  }
  req = prompt("Enter the request");
}
