let btn = document.getElementById("btn")
let input = document.getElementById("inp")
let inputs = document.querySelectorAll(".inputs")
let drug = null

btn.onclick = function () {
    if (input.value != "") {
                inputs[0].innerHTML += `
        <p class="item" draggable="true">${input.value}</p>
        ` 
        input.value = ""
    }

    dragItem()
}

function dragItem() {
    let item = document.querySelectorAll(".item")

    item.forEach(item=>{
        item.addEventListener("dragstart",function (){
            drug = item
            
        }) 
        item.addEventListener("dragend",function () {
        drug = null
        item.style.opacity = "1"
    })

    inputs.forEach(inputs=>{
        inputs.addEventListener("dragover",function(e){
            e.preventDefault()
            this.style.background = "green"
            this.style.color = "white"
        })
        inputs.addEventListener("dragleave",function(){
            this.style.background = "white"
            this.style.color = "black"
        })
        inputs.addEventListener("drop",function(){
            this.append(drug)
            this.style.background = "white"
            this.style.color = "black"
        })
    })

    })


}