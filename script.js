const myLibrary = [];
const bookList = document.createElement("div");
bookList.classList.add("book-list");
const body = document.body;
body.appendChild(bookList);

function Book(title, author, year) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary() {
  const title = prompt("Enter a book title");
  const author = prompt("Enter the authors name");
  const year = prompt("Enter the year the book was written");
  const book = new Book(title, author, year);
  myLibrary.push(book);
  if (bookList.hasChildNodes() === true) {
    const oldParent = document.getElementById("parent-div");
    oldParent.remove();
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "parent-div");
    console.log("true");
    const list = document.createElement("ol");
    for (let index = 0; index < myLibrary.length; index++) {
      const listItem = document.createElement("li");
      listItem.innerText = `Title:${myLibrary[index].title} Author:${myLibrary[index].author} Year:${myLibrary[index].year}`;
      list.appendChild(listItem);
    }
    console.log(myLibrary);
    parentDiv.appendChild(list);
    bookList.appendChild(parentDiv);
  } else if (bookList.hasChildNodes() === false) {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "parent-div");
    console.log("false");
    const list = document.createElement("ol");
    list.classList.add("list");
    for (let index = 0; index < myLibrary.length; index++) {
      const listItem = document.createElement("li");
      listItem.innerText = `Title:${myLibrary[index].title} Author:${myLibrary[index].author} Year:${myLibrary[index].year}`;
      list.appendChild(listItem);
    }
    console.log(myLibrary);
    parentDiv.appendChild(list);
    bookList.appendChild(parentDiv);
  }
}
