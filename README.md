# ByChapters


## [Link ByChapters](https://by-chapters.netlify.app)

### [Link to Front End repository](https://github.com/anasonu/by-chapters-client)

# Description
ByChapters is a portal for writers that want to share their stories with readers. Writers can create books and add chapters to them.

# Main Functionalities
**Anonymous user:**
- Sign up
- Login
- View list of books
- View book info
- View author's profile with list of publiseh books

**Registered user:**
- Same functionalities from anonimous user's list
- Create / edit / delete a book
- Create / delete chapters inside a book

**Just for admin:**
- Delete any book
- Delete any chapter


# Future Functionalities
- Writers will be able to offer options on how users want them to continue the story
- Save books to favorite
- Comments in chapters
- Filter by category: Fantasy, horror, romance...
- Search
- Save a chapter as draft
- Read / not read chapters
- Bookmark

# Proyect Structure
### Front End
**Pages:**
- Home page
- Book detail page
- Chapter detail page
- New book page
- New chapter page
- User profile
- Error
- 404 Not found

**Routes:**
- / => Home page
- /books/new-book => Shows a form for adding new books
- /books/:bookId => Book detail view
- /books/:bookId/edit => Shows a form for editing an existing book
- /books/:id/:chapterId => Shows a specific chapter for reading
- /books/new-chapter => Form for adding new chapters
- /profile => User's profile
- /profile/:authorId => Specific author's profile
- /error
- /* => 404 Not found

### Back End
**Models:**
Book Model
- img
- title
- description
- author => ObjectId

Chapter Model
- title
- content
- book => ObjectId
- author => ObjectId

Author Model
- username
- description
- email
- password

**Routes:**
POST
/api/signup => User registration

POST
/api/login => User access to account

GET
/api/books => List of existing books

POST
/api/books/new-book => Create new book

GET
/api/books/:id => Book profile

PATCH
/api/books/:id => Edit existing book

DELETE
/api/books/:id => Delete existing book

POST
/api/books/:id/new-chapter => Create new chapter in existing book

GET
/api/books/:id/chapter/:chapterId => Chapter detail view

PATCH
/api/books/:id/chapter/:chapterId => Edit existing chapter

DELETE
/api/books/:id/chapter/:chapterId => Delete chapter

GET
/api/profile/:id => Book list of specific author

GET
/api/authors/:id => Author profile with published books


### Slides
[Link Slides.com](https://docs.google.com/presentation/d/1n1KiWxZrRUNtFZU47XKzWTnqsbr9YrEiADomEnoIBOg/edit#slide=id.p)
