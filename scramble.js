const scrambledCode = document.getElementById("scrambledCode");
const result = document.getElementById("result");
const checkButton = document.getElementById("checkOrder");

// Enable drag-and-drop functionality
let draggedItem = null;

scrambledCode.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
});

scrambledCode.addEventListener("dragover", (e) => {
    e.preventDefault();
});

scrambledCode.addEventListener("drop", (e) => {
    if (e.target.tagName === "LI" && e.target !== draggedItem) {
        const draggedIndex = [...scrambledCode.children].indexOf(draggedItem);
        const targetIndex = [...scrambledCode.children].indexOf(e.target);

        if (draggedIndex > targetIndex) {
            scrambledCode.insertBefore(draggedItem, e.target);
        } else {
            scrambledCode.insertBefore(draggedItem, e.target.nextSibling);
        }
    }
});

// Check the user's order
checkButton.addEventListener("click", () => {
    const correctOrder = [
        "public class HelloWorld {",
        "public static void main(String[] args) {",
        "System.out.println(\"Hello, World!\");",
        "System.out.println(\"Coding is fun!\");",
        "}",
        "}"
    ];

    const userOrder = [...scrambledCode.children].map(li => li.textContent);

    if (JSON.stringify(correctOrder) === JSON.stringify(userOrder)) {
        result.textContent = "🎉 Correct! You successfully rearranged the code!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
});
