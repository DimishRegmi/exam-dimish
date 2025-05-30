function printRightAlignedTriangle(rows) {
let output = "";
for (let i = 1; i <= rows; i++) {
let spaces = " ".repeat(rows - i);
let stars = "*".repeat(i);
output += spaces + stars + "\n";
}
document.getElementById("pattern").textContent = output;
}

printRightAlignedTriangle(10);
