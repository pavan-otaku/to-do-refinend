let input = document.getElementById("myInput");
let list = document.getElementById("lists");
let add = document.getElementById("addButton");

add.addEventListener("click", function (event) {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert("Enter a valid task!");
        return;
    }

    // create elements PER task
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let taskText = document.createElement("span");
    taskText.innerText = " " + input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "❌";
    delbtn.disabled = true;

    // checkbox logic
    checkbox.addEventListener("change", function () {
        delbtn.disabled = !checkbox.checked;
        taskText.classList.toggle("completed");
    });

    // delete logic
    delbtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(delbtn);
    list.appendChild(li);

    input.value = "";
});
