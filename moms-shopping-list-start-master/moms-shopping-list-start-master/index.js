const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const item = form.title.value
    form.title.value = ""
    const li = document.createElement("li")

    li.style.display = "block"

    // const btn = document.createElement("button")

    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.style.display = "block"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.style.display = "inline-block"
    deleteButton.style.marginLeft = "60px"
    // deleteButton.style.marginTop = "-120px"


li.textContent = item
document.getElementById("list").append(li)

li.appendChild(editButton)
li.appendChild(deleteButton)
}) 

