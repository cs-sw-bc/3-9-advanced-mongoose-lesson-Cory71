import "./app.js";
import Book from "./models/book.js";
import Author from "./models/author.js";

async function createBook() {
    try {
        // Find an existing author from the database
        const author = await Author.findOne({ name: "Cory" });
        
        if (!author) {
            console.log("Author 'Cory' not found. Please run testAuthor.js first.");
            return;
        }

        const response = await Book.create({
            title: "Harry Potter and the Philosopher's Stone",
            ISBN: "9780747532699",
            genre: "FANTASY",
            author: author._id,
            review: {
                reviewer: "Fantasy Book Critic",
                review: "A magical tale that captivated readers worldwide."
            }
        });
        console.log(response);
    } catch (error) {
        console.log("Error creating book:", error);
    }
}

async function displayBooks() {
    const bookList = await Book.find().populate('author');
    console.log(bookList);
}

createBook();
displayBooks();