let counter = 0;
let fechaCaducidad = 0;
let localData;

const desarrolloAsíncrono = (delay) => {
    setTimeout(() => {
        getUsers(1);
        btnDisplayList.disabled = false;
    }
        , delay);
}

const displayInfoFromLocalStorage = (page) => {

    localData = JSON.parse(localStorage.getItem(`usersData${page}`))

    for (let user of localData.data) {

        const divMainCol = document.createElement("div");
        divMainCol.classList.add("cardBootstrap", "col-lg-4", "col-md-6", "col-sm-12", "d-flex", "justify-content-center", "my-3");
        divMainCol.id = `divMainCol${counter}`
        document.getElementById("rowMainContainer").appendChild(divMainCol)

        const divCol = document.createElement("div");
        divCol.classList.add("card", "align-items-center");
        divCol.style.width = "18rem";
        divCol.id = `divCol${counter}`
        document.getElementById(`divMainCol${counter}`).appendChild(divCol)

        const imgDiv = document.createElement("img");
        imgDiv.classList.add("card-img-top", "rounded-circle");
        imgDiv.src = `${user.avatar}`;
        document.getElementById(`divCol${counter}`).appendChild(imgDiv)

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.id = `cardBody${counter}`;
        document.getElementById(`divCol${counter}`).appendChild(cardBody)

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = `${user.id}.-${user.first_name}`;
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

const getUsers = async (page = 1) => {

    while (page <= 2) {

        const url = `https://reqres.in/api/users?page=${page}`;

        await fetch(url)
            .then(response => {
                return response.json();
            })

            .then(data => {
                localStorage.setItem(`usersData${page}`, JSON.stringify(data));
                localStorage.setItem("fechaCaducidad", (new Date().getTime()) + 60_000);
                document.getElementById("loader").style.display = "none";/*  */
                displayInfoFromLocalStorage(page);
            })
            .catch(error => console.log(error));
        page++;
    }

}

const btnDisplayList = document.getElementById("btn-primary");

btnDisplayList.addEventListener("click", () => {

    let fechaActual = new Date().getTime()
    fechaCaducidad = localStorage.getItem('fechaCaducidad');
    if (fechaCaducidad == null || fechaActual > fechaCaducidad) {
        document.getElementById("loader").style.display = "flex";
        btnDisplayList.disabled = true;
        desarrolloAsíncrono(4000);
    }

    else {
        page = 1;
        do {
            displayInfoFromLocalStorage(page);
            page++;
        } while (page <= 2);
    }

}
)
