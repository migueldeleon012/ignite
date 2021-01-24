
        /*
        
        You are about to create your own Task List.
        The user might be able to:
        - Create new tasks by writing them in a text box and pressing a button to add them
        - Mark a task as completed by clicking on it. The element should look different when completed
        - Restore a completed task by clicking on it. 
        - Have a checkbox to show only "non-completed" tasks
        - Add a button to clear the list


        Hints:
        - Create the list elements using the createElement function
        - Add the event to them and pass the event to the function that should handle it
        - Rememeber that from the event you can access to the element that generated it using the .target property

        */

      
document.addEventListener("DOMContentLoaded", ()=>{

    //add items
    document.querySelector('#enter').addEventListener('click', ()=>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('task')
        
        let newParagraph = document.createElement('p')
        newParagraph.classList.add('paragraph')

        let checkButton = document.createElement('i')
        checkButton.classList.add('far')
        checkButton.classList.add('fa-check-circle')
        
        let output = document.querySelector('.output')
        let input = document.querySelector('.input')

        newParagraph.innerHTML = input.value

        newDiv.appendChild(newParagraph)
        newDiv.appendChild(checkButton)
        output.appendChild(newDiv)

        if(input.value == ''){
            alert('invalid')
            newDiv.remove()
        }

        input.value = ''


       //toggle class
        checkButton.addEventListener('click', ()=>{
            newDiv.classList.toggle('done')
        })
        
    })


    //remove
    document.querySelector('#delete').addEventListener('click', ()=>{
        let tasks =  document.querySelectorAll('.task')
        for(let i = 0; i < tasks.length; i++){
            tasks[i].remove();
        }
    })

    //show not done tasks
    let showUndone =  document.querySelector('#showUndoneTasks') 
    showUndone.addEventListener('change', ()=>{
        let done = document.querySelectorAll('.done') 
        for(let i = 0; i < done.length; i++){
            if(showUndone.checked){
                done[i].style.display = 'none'
            } else{
                done[i].style.display = 'block'
            }

        }
    })

});
    