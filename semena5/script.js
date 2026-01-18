const url = document.getElementById("url");
const gallery = document.getElementById("gallery");
let selected = null;

document.getElementById("add").addEventListener("click", () => {
    if (!url.value) return;

    const img = document.createElement("img");
    img.src = url.value;

    img.onclick = () => {
        if (selected) selected.classList.remove("selected");
        selected = img;
        img.classList.add("selected");
    };

    gallery.appendChild(img);
    url.value = "";
});

document.getElementById("remove").addEventListener("click", () => {
    if (selected) {
        selected.remove();
        selected = null;
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Delete" && selected) {
        selected.remove();
        selected = null;
    }
});
