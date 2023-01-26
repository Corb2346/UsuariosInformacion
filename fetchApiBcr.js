let counter = 0;
let fechaCaducidad=0;
let localData;

const desarrolloAsíncrono = (delay) => {
    setTimeout(() => {
        console.log(`Asíncrono - Cargando Data: Tiempo de espera aproximado ${delay} miliegundos`)
        getUsers(1);

    }
        , delay); 
}

const displayInfoFromLocalStorage = () => {

    localData = JSON.parse(localStorage.getItem("usersData"))
    for (let user of localData.data) {

        console.log(`${user.id}-${user.first_name}-${user.last_name}`);

        const divMainCol = document.createElement("div");
        divMainCol.classList.add("col-lg-4","col-md-6","col-sm-12","d-flex", "justify-content-center","my-3");
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
        cardBody.id = `cardBody${counter}`;
        document.getElementById(`divCol${counter}`).appendChild(cardBody)

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = `${user.first_name}`;
        document.getElementById(`cardBody${counter}`).appendChild(cardTitle)

        const cardSubtitle = document.createElement("h6");
        cardSubtitle.classList.add("card-subtitle");
        cardSubtitle.innerText = user.last_name;
        document.getElementById(`cardBody${counter}`).appendChild(cardSubtitle)

        const email = document.createElement("p");
        email.classList.add("card-text");
        email.innerText = `${user.email}`;
        document.getElementById(`cardBody${counter}`).appendChild(email)
        counter++;
    } 
    
}

const getUsers = (page = 1) => {

    const url = `https://reqres.in/api/users?page=${page}`;

    fetch(url)
        .then(response => {
            console.log("Status" + response.status);
            return response.json();
        })

        .then(data => {
            console.log(data);
            localStorage.setItem("usersData",JSON.stringify(data));
            localStorage.setItem("fechaCaducidad", (new Date().getTime()) + 60_000 );
            
            displayInfoFromLocalStorage();
        })
        .catch(error => console.log(error));
}
 
const btnDisplayList = document.getElementById("btn-primary");

btnDisplayList.addEventListener("click", () => {

let fechaActual = new Date().getTime() 
console.log(fechaActual);
    fechaCaducidad = localStorage.getItem('fechaCaducidad');
    if(fechaCaducidad == null || fechaActual > fechaCaducidad)
     desarrolloAsíncrono(4000); 
    else {

        displayInfoFromLocalStorage();
    }

  
}
)
