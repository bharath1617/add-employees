let information = [];

document.querySelector('form').addEventListener('submit', adduser);

function adduser(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    if (name === "" || profession === "" | age === "") {
        document.getElementById("msg").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("msg").style.color = "red";
        return;
    }
     

    let id = information.length + 1;
    let detailInputs = { id, name, profession, age };
    information.push(detailInputs);
    console.log(information);
    displayInputs();
    document.getElementById("msg").innerHTML = "Success : Employee Added!";
    document.getElementById("msg").style.color = "green";
    document.querySelector('form').reset();
}

function displayInputs() {
    let addedemployeestable = document.getElementById("addedEmployees");
    addedemployeestable.innerHTML = '';

    information.forEach(detailInputs => {
        let employeecontent = document.createElement('div');
        employeecontent.className = 'employees';

        let idno = document.createElement('span');
        idno.textContent = ` ${detailInputs.id}`;
        employeecontent.appendChild(idno);

        let fullname = document.createElement('span');
        fullname.textContent = ` Name: ${detailInputs.name}`;
        employeecontent.appendChild(fullname);

        let professions = document.createElement('span');
        professions.textContent = `Profession: ${detailInputs.profession}`;
        employeecontent.appendChild(professions);

        let ageno = document.createElement('span');
        ageno.textContent = `Age ${detailInputs.age}`;
        employeecontent.appendChild(ageno);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
          deleteEmployee(detailInputs.id);
        });
        employeecontent.appendChild(deleteBtn);
        
        addedemployeestable.appendChild(employeecontent);
    })
    function deleteEmployee(id) {
        let index = information.findIndex(employee => employee.id === id);
      
        if (index !== -1) {
          information.splice(index, 1);
          console.log(information);
          displayInputs(); 
      }
    }
}