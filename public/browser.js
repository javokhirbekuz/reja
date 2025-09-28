console.log("FrontEnd Js ishga tushdi!");

function itemTemplate(item) {
    return `<li
                class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">${item.reja}</span>
                    <div>
                        <button
                            data-id="${item._id}"
                            class="edit-me btn btn-secondary btn-sm mr-1"
                        >
                            O'zgartirish</button
                        ><button
                            data-id="${item._id}"
                            class="delete-me btn btn-danger btn-sm"
                        >
                            O'chirish
                        </button>
                    </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            alert("Iltimos qaytadan harakat qiling!");
        });
});

document.addEventListener("click", (e) => {
    // delete oper
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Are you sure to delete?")) {
            axios
                .post("/delete-item", {
                    id: e.target.getAttribute("data-id"),
                })
                .then((response) => {
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    alert("Iltimos qaytadan harakat qiling!");
                });
        }
    }

    // edit oper
    if (e.target.classList.contains("edit-me")) {
        const newInput = prompt(
            "Insert the modification",
            e.target.parentElement.parentElement.querySelector(".item-text")
                .innerHTML
        );
        if (newInput) {
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    newInput: newInput,
                })
                .then((response) => {
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = newInput;
                })
                .catch((err) => {
                    console.log(err);
                    alert("Iltimos qaytadan harakat qiling!");
                });
        }
    }
});

// clean-all
document.getElementById("clean-all").addEventListener("click", () => {
    if (confirm("Are you sure to delete all?")) {
        axios
            .post("/delete-all", { delete_all: true })
            .then((response) => {
                document.location.reload();
                alert(response.data.state);
            })
            .catch((err) => {});
    }
});
