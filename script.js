document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("myInput");
    let list = document.getElementById("lists");
    let add = document.getElementById("addButton");

    function saveData() {
        localStorage.setItem("data", list.innerHTML);
    }

    function showData() {
        list.innerHTML = localStorage.getItem("data") || "";
    }

    add.addEventListener("click", function (event) {
        event.preventDefault();

        if (input.value.trim() === "") {
            alert("Enter a valid task!");
            return;
        }

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let taskText = document.createElement("span");
        taskText.innerText = input.value;

        let delbtn = document.createElement("button");
        delbtn.innerText = "❌";
        delbtn.disabled = true;

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(delbtn);
        list.appendChild(li);

        input.value = "";
        saveData();
    });

    // event delegation (IMPORTANT for GitHub Pages)
    list.addEventListener("click", function (e) {
        let li = e.target.closest("li");
        if (!li) return;

        let checkbox = li.querySelector("input[type='checkbox']");
        let delbtn = li.querySelector("button");
        let taskText = li.querySelector("span");

        if (e.target.type === "checkbox") {
            delbtn.disabled = !e.target.checked;
            taskText.classList.toggle("completed");
            saveData();
        }

        if (e.target.tagName === "BUTTON") {
            li.remove();
            saveData();
        }
    });

    showData();
});
