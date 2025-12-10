import "./app.js";
import Author from "./models/author.js";

async function createAuthor() {
    try {
        const response = await Author.create({
            name: "Cory",
            yearBorn: 1990,
            nationality: "Canadian",
            email: "cory@example.com"
        });
        console.log(response);
    } catch (error) {
        console.log("Error creating author:", error);
    }
}
createAuthor();