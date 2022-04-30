let navigation = document.querySelector(".navigation");
navigation.addEventListener("click", (e)=>{
    navigation.classList.toggle('active');
})
let plantilla = `
    <span>
        <ion-icon name="accessibility-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="add-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="add-circle-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="airplane-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="alarm-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="alarm-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="alert-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="alert-circle-outline"></ion-icon>
    </span>
    <span>
        <ion-icon name="desktop-outline"></ion-icon>
    </span>
`;
navigation.insertAdjacentHTML("beforeend", plantilla);