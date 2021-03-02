$ = document.getElementById.bind(document);
const nameBt = $("nameButton");

nameBt.addEventListener("click", () => {
    alert("You clicked a button.");
});
