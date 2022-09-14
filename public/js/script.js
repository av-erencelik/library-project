let myLibrary = [];
let bookNumber = 0;
let modal = document.getElementById("modal");
let btn = document.getElementById("add-book");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit")

class book {
    constructor(title,author,pages,isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function inputBook(e) {
    e.preventDefault()
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let isRead = false
    if(document.getElementById("isRead").checked) {isRead = true}
    let newBook = new book(author,title,pages,isRead)
    addBookToLibrary(newBook)
    clearModalInput()
    modal.style.display = "none"
}
function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    console.log(myLibrary)
    displayBooks()
}
function clearModalInput() {
    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("isRead").checked = false
}
function displayBooks() {
  let container = document.getElementById("cards")
  for(let book of myLibrary) {
    if(!(document.querySelector(`[data-index="${myLibrary.indexOf(book)}"]`)==null)) {
      continue;
    }
    let div = `
    <div class="card">
      <h4>${book.title}</h4>
      <h4>${book.author}</h4>
      <h4>${book.pages} pages</h4>
      <div class="buttons">
          <button class="btn" id="btn" data-index="${myLibrary.indexOf(book)}">Not Read</button>
          <button class="btn remove">Remove</button>
      </div>
    </div>`
    
    container.insertAdjacentHTML("beforeend", div)
    let read = document.querySelector(`[data-index="${myLibrary.indexOf(book)}"]`)
    console.log(read)
    if(book.isRead) {
      read.classList.add("read")
    }else {
      read.classList.add("not_read")
    }
  }
}