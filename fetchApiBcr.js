let counter = 0;
let localData;
//Fetch api es una promesa

const getUsers = (page = 1) => {

    const url = `https://reqres.in/api/users?page=${page}`;

    fetch(url) 
        .then(response => {
            console.log("Status" + response.status);
           return response.json();
        })

        .then( data => {
            console.log(data);
            localData = data;
            for(let user of data.data){
            console.log(`${user.id}-${user.first_name}-${user.last_name}`);

            
    const divMainCol = document.createElement("div");
    divMainCol.classList.add("col-4");
    divMainCol.id = `divMainCol${counter}`
    document.getElementById("rowMainContainer").appendChild(divMainCol)
 
    const divCol = document.createElement("div");
    divCol.classList.add("card");
    divCol.style.width = "18rem";
    divCol.id = `divCol${counter}`
    document.getElementById(`divMainCol${counter}`).appendChild(divCol)
    console.log("niño implantado");

    const imgDiv = document.createElement("img");
    imgDiv.classList.add("card-img-top");
    imgDiv.src = `${user.avatar}`;
    document.getElementById(`divCol${counter}`).appendChild(imgDiv)

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id=`cardBody${counter}`;
    document.getElementById(`divCol${counter}`).appendChild(cardBody)
   
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText=`${user.first_name}`;
    document.getElementById(`cardBody${counter}`).appendChild(cardTitle)

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText=user.last_name;
    document.getElementById(`cardBody${counter}`).appendChild(cardSubtitle)

    const email = document.createElement("p");
    email.classList.add("card-text");
    email.innerText=`${user.email}`;
    document.getElementById(`cardBody${counter}`).appendChild(email) 
    counter++; 

            }
            //leer a Data = [datos del uusuario];
            //console.log(users.data);
            //localStorage.setItem("users",JSON.stringify(respones));
           /*  for( let user of data)
                console.log(`${user.id}-${user.first_name}-${user.last_name}`);
*/
        })
        .catch( error => console.log(error));
}

getUsers(1);
//getUsers(2);

const btnDisplayList = document.getElementById("btn-primary");

btnDisplayList.addEventListener("click", () => {


    getUsers(1);
    
    const divMainCol = document.createElement("div");
    divMainCol.classList.add("col-4");
    divMainCol.id = `divMainCol${counter}`
    document.getElementById("rowMainContainer").appendChild(divMainCol)
 
    const divCol = document.createElement("div");
    divCol.classList.add("card");
    divCol.style.width = "18rem";
    divCol.id = `divCol${counter}`
    document.getElementById(`divMainCol${counter}`).appendChild(divCol)
    console.log("niño implantado");

    const imgDiv = document.createElement("img");
    imgDiv.classList.add("card-img-top");
    imgDiv.src = "assets/images/yo_resize.png";
    document.getElementById(`divCol${counter}`).appendChild(imgDiv)

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id=`cardBody${counter}`;
    document.getElementById(`divCol${counter}`).appendChild(cardBody)
   
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText=`${localData.first_name}`;
    document.getElementById(`cardBody${counter}`).appendChild(cardTitle)

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText="Card subtitle";
    document.getElementById(`cardBody${counter}`).appendChild(cardSubtitle)

    const email = document.createElement("p");
    email.classList.add("card-text");
    email.innerText="ejemplo@ejemplo.com";
    document.getElementById(`cardBody${counter}`).appendChild(email) 
    counter++; 
})
