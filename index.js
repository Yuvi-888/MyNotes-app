let notes_container = document.querySelector(".notes_container");
let add_btn = document.querySelector(".addnote_btn");
let notes = document.querySelectorAll(".input_box");


function show_storage(){
    notes_container.innerHTML=localStorage.getItem('notes')
}

show_storage()

function update_storage(){
    localStorage.setItem('notes', notes_container.innerHTML)
}

add_btn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let del_img = document.createElement("img");
  inputbox.className = "input_box";
  inputbox.setAttribute("contenteditable", "true");
  del_img.className = "del_img";
  del_img.src = 'images/deletelogo.png';
  notes_container.appendChild(inputbox).appendChild(del_img);
})

notes_container.addEventListener('click', (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        update_storage()
    }

    else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.input_box')
        let arr=Array.from(notes)
        arr.forEach(nt=>{
            nt.onkeyup=()=>{
                update_storage()
            }
        })
    }
})

notes_container.addEventListener('keydown', event=>{
    if(event.key==='Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})
