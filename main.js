$ = document.getElementById.bind(document);
const nameBt = $("nameButton");

nameBt.AddEventListener("click", () => {
    alert("You clicked a button.");
});
