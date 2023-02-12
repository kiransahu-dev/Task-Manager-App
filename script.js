const todo = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let dragableTodo = null;
// console.log(todo);

todo.forEach(todo => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
    dragableTodo = this;
    console.log("dragstart");
}
function dragEnd() {
    dragableTodo = null;
    console.log("dragend");
}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
    // console.log("dragover");
}
function dragEnter() {
    this.style.border = "1px dashed violet";
    console.log("dragenter");
}
function dragLeave() {
    this.style.border = "none";
    console.log("dragleave");
}
function dragDrop() {
    this.style.border = "none";
    this.appendChild(dragableTodo);
    console.log("droped");
}



// #modal####################

const btns = document.querySelectorAll("[data-target]");
const cm = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");




btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});


cm.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});


window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};




// TO-DO functionality############

const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo() {
    const todo_div = document.createElement('div');
    todo_div.classList.add('todo');
    const input_val = document.getElementById('todo_input').value;
    const txt = document.createTextNode(input_val);

    let txt_content = document.createElement('p');
    txt_content.innerHTML = input_val;
    todo_div.appendChild(txt_content);



    // console.log(todo_div);

    todo_div.classList.add('todo')
    todo_div.setAttribute('draggable', 'true');

    const spn = document.createElement('span');
    const spn_txt = document.createTextNode('\u00D7');

    spn.addEventListener('click', () => {
        spn.parentElement.style.display = "none";
    });

    spn.classList.add('close');
    spn.appendChild(spn_txt);
    txt_content.appendChild(spn);

    // console.log(spn);

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    const style_stat = document.getElementById('no_status')

    style_stat.appendChild(todo_div);
    // style_stat.style.cssText =
    //     "display: flex; justify-content: space-between; position: relative; background-color: rgb(33, 134, 218); box-shadow: rgba(212, 212, 30, 0.37) 0p 0px 0px 2px, rgba(53, 35, 35, 0.63) 0px 2px 8px; border-radius: 4px; padding: 0.5rem 1rem; font-size: 1.25rem; margin: 0.5rem 0rem; font-weight: bold;";

    document.getElementById('todo_input').value = "";


    todo_form.classList.remove('active');
    overlay.classList.remove('active');
}


const close_btn = document.querySelectorAll(".close");
close_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.style.display = "none";
    });
});