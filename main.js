const PRIORITY_BLOCKS = document.querySelectorAll(".todo__priority-block");

const ADD = {
  INPUTS: document.querySelectorAll(".input-add"),
  BTNS: document.querySelectorAll(".btn-add"),
} 


for ( let i=0; i< ADD.BTNS.length; i++ ){
    ADD.BTNS[i].addEventListener('click', function(){

        let isContentExist = ADD.INPUTS[i].value;

        if(!isContentExist){
            alert('Write please new task!');
            return;
        }

        const newDiv = document.createElement('div');
        newDiv.className = 'todo__task';
        newDiv.innerHTML = `<label>
        <input class="input-done" type = "checkbox">
        <span class = "cursor"></span>
        </label>
        <span class = "task-text"> ${ADD.INPUTS[i].value} </span>
        <button class = "button-delete"><img src = "delete-task-icon.svg" alt = "delete"></button>`;

        PRIORITY_BLOCKS[i].append(newDiv);
        
        //alert(ADD.INPUTS[i].value);

        ADD.INPUTS[i].value = '';

    })
}
