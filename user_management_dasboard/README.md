# User Management Dashboard

A responsive user management dashboard built with React and Vite that allows users to view, add, edit, delete, search, filter, sort, and paginate user records using the JSONPlaceholder API.

## Live Features

* View all users in a responsive dashboard
* Add a new user
* Edit existing user details
* Delete a user with confirmation
* Search users by first name, last name, or email
* Filter users by first name, last name, email, and department
* Sort users by first name, last name, email, and department directly click on screen those part what you have to sort (ex. - click FirstName , Department)
* Pagination support with 10, 25, 50, and 100 rows per page
* Client-side form validation
* API error handling with user-friendly feedback
* Responsive layout for mobile, tablet, and desktop screens

## Tech Stack

* React
* Vite
* Tailwind CSS v4
* Axios
* React Hook Form
* React Hooks

## API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

## Project Structure

```text
src/
├── api/
├── components/
├── constants/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd user-management-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Assumptions

* JSONPlaceholder does not persist data after create, update, or delete requests.
* User data returned by the API contains a single `name` field, so first name and last name are derived on the client side.
* Since the API does not provide department information, departments are assigned locally for demonstration purposes.
* After successful API responses, the local application state is updated to simulate persistence.

## Challenges Faced

* The API response structure did not directly match the required UI fields.
* JSONPlaceholder simulates write operations but does not save changes.
* Managing search, filtering, sorting, and pagination together while keeping the code modular required careful state management.
* Ensuring a responsive experience for both table and mobile card layouts.

## Future Improvements

* Add automated tests using Vitest and React Testing Library
* Implement server-side pagination and filtering
* Add role-based access control
* Improve accessibility support
* Add dark mode
* Integrate React Query for API state management

## Manual Testing Checklist

* User list loads successfully
* Add user functionality works
* Edit user functionality works
* Delete user functionality works
* Search updates results correctly
* Filters apply and reset correctly
* Sorting works in both ascending and descending order
* Pagination updates data correctly
* Validation messages appear for invalid input
* Responsive layout works across different screen sizes

## Screenshots

Add screenshots of the following views:

* Dashboard view
![Dashboard](image.png)
* Add user form
![Add User](image-1.png)
* Filter modal
![Filter](image-2.png)
* Mobile responsive layout
![Mobile Responsive](image-3.png)

## Developed By

Anubhav Maurya
