 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)

### About
You are building part of the teacher-facing UI for this product,
namely the book assignment view, where teachers can assign books to students. 

The view should have the following features:-

1. A search bar that allows users to search for books by title.
2. A list of search results that displays the book title, author, and a button to add the book to the students reading list.
3. A reading list that displays all the books that the teacher has added.
4. A button to remove a book from the reading list.

You can build this view without the concept of a "student" and just have a single reading list for the teacher.

### Requirements
- Use React as the frontend framework.
- Showcase the use of React hooks.
- Use [material-ui](https://mui.com/material-ui/) as the component library.
- Write your code in the `src/frontend` directory.
- Create components as you feel is best suited for your solution
<img width="1013" alt="Screenshot 2024-05-15 at 19 10 51" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/bc3eb7f7-489f-4304-93f4-032bbbd38c58">


### Data
To get access to data that you will use for this challenge you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```
### React Server

Run the following command to start React server

To install dependencies
```bash
npm install 

```
To start development server
```bash
npm run dev
```

To start production server
```bash
npm start
```

You can use this query to get the list of books to display in your frontend. You may need to adjust the `coverPhotoURL` to be a valid URL. The photos are in the `src/frontend/assets` directory.

### Styling Guidelines
- Use the "Mulish" Google font
- You can use the following colors (You don't have to use all but you can pick and choose from here)
<img width="961" alt="Screenshot 2024-05-14 at 17 36 40" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/15922f8f-a7c7-4033-8405-76988e95afb3">

### Figma Designs
https://www.figma.com/design/2SrXmXOcF3dQQGVJymzuOZ/Untitled?node-id=0-1&t=Sw3QLOz8hUEgOjqj-0

### Author
Final Work - Andrew Indeche

# Reading-List-App
