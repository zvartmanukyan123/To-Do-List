function add() {

  let inputValue = document.getElementById("toDoForm");

  let li = document.createElement("li");
  li.setAttribute("id", inputValue.value + 1);
  li.setAttribute("class", "textItem");

  let textnode = document.createTextNode(inputValue.value);
  let ul = document.getElementById("toDoList");

  li.appendChild(textnode);
  ul.appendChild(li);

  remove(li);
  inputValue.value = "";


}

function remove(li) {
  let butt = document.createElement("button");
  let txt = document.createTextNode("delete");

  li.appendChild(butt);
  butt.appendChild(txt);
  butt.setAttribute("class","removeButton")

  butt.addEventListener("click", function(e) {
    li.remove();
  });
}
