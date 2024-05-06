// Using constructor

class Book {
  constructor(name, author, img, isRead = false) {
    this.name = name;
    this.author = author;
    this.img = img;
    this.isRead = isRead;
    this.reader = "";
  }
  changeStatus(reader) {
    this.isRead = !this.isRead;
    this.reader = reader;
  }
}
let books = [
  new Book("Culture", "John", "images/bree-anne-3AJoc9iJjo8-unsplash.jpg"),
  new Book("Adventure", "David", "images/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg"),
  new Book(
    "History",
    "Edward",
    "images/sincerely-media-CXYPfveiuis-unsplash.jpg"
  ),
  new Book("Culture", "John", "images/tim-alex-1i-P178kxHQ-unsplash.jpg"),
  new Book("Culture", "John", "images/bree-anne-3AJoc9iJjo8-unsplash.jpg"),
  new Book("Adventure", "David", "images/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg"),
  new Book(
    "History",
    "Edward",
    "images/sincerely-media-CXYPfveiuis-unsplash.jpg"
  ),
  new Book("Culture", "John", "images/tim-alex-1i-P178kxHQ-unsplash.jpg"),
  new Book("Culture", "John", "images/bree-anne-3AJoc9iJjo8-unsplash.jpg"),
  new Book("Adventure", "David", "images/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg"),
  new Book(
    "History",
    "Edward",
    "images/sincerely-media-CXYPfveiuis-unsplash.jpg"
  ),
  new Book("Culture", "John", "images/tim-alex-1i-P178kxHQ-unsplash.jpg"),
];
const readerName = document.querySelector("#reader");
const main = document.querySelector("main");
const ul = document.createElement("ul");
ul.style.cssText =
  "display:grid;gap:10px;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));";

books.forEach((book) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.textContent = `Book Name: ${book.name}`;
  const p = document.createElement("p");
  p.innerText = `Author: ${book.author}`;
  const image = document.createElement("img");
  image.src = book.img;
  image.style.cssText = "";
  li.style.cssText =
    "padding:10px; margin:10px; list-style-type:none; border:2px #ccc solid; border-radius:7px; text-align:center";

  li.book = book;

  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(image);

  ul.appendChild(li);
});

main.appendChild(ul);

const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    const book = li.book;
    const reader = readerName.value;
    book.changeStatus(readerName.value);
    li.classList.toggle("read");
    console.table(books);
  });
});
