let age = prompt("Age?", 20);

if (age < 14) {
    window.open("https://www.youtube.com/watch?v=wpV-gGA4PSk", target="none", rel="noopener noreferrer");
}
else if (age > 90) {
    alert("Uh oh! Bad decision, old man!");
}
else alert("Welcome aboard!");

// insert age, check that age is inclusive to 14 and 90