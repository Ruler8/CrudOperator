React CRUD Component
This project is a simple React-based CRUD (Create, Read, Update, Delete) application. It manages a list of computer products with basic properties like name, price, and memory.

The app demonstrates the use of:

React functional components

useState and useRef hooks

Conditional rendering

Dynamic form handling



File Structure
src/
├── components/
│   └── Crud.jsx   <-- Main CRUD component


Features
Display a list of items (computers)

Add new items

Edit existing items

Delete items

Smooth inline editing with form handling


Technologies Used
React (with Hooks)

JavaScript (ES6+)

HTML/CSS (basic styling assumed)


Component Overview
Crud
Main component that handles the list state, edit state, and includes both AddList and EditList.

State Variables:

lists: Array of computer objects

updateState: ID of the item currently being edited

Methods:

handleEdit(id): Activates edit mode for a specific item

handleDelete(id): Removes item from the list

handleSubmit(event): Updates an item after editing

Render Logic:

Conditionally renders each row as editable (EditList) or static based on updateState.



EditList
Displays a row in editable form when the item is being updated.

Props:

current: The current item to edit

lists: Full list of items

setList: Function to update list state

Handlers:

handInputname(), handInputprice(), handInputmemory(): Handle changes for respective fields and update the item in real-time



AddList
Form component to add a new item to the list.

Refs:

nameRef, priceRef, memoryRef: Used to access form input values

Handlers:

handleSubmit(): Adds a new item to the list with a unique ID


How It Works
The app starts with a predefined list of 3 items.

Users can:

Add new items using the AddList form.

Click "Edit" to switch a row to an editable form.

Modify values and hit "Update" to save.

Click "Delete" to remove an item.

All updates are done in-memory using React's useState hook.


Example Object Structure
Each item in the list follows this format:

{
  id: 1,
  name: "HP",
  price: "2222",
  memory: "500gb"
}

