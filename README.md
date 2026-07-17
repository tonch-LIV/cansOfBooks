# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Changelog

- 07.02
  - installed `axios`, `bootstrap`, `react-bootstrap`, and `react-router-dom`.
- **`bookList` branch**.
  - create `components` directory <- `BestBooks.jsx`.
  - imported `react`, `axios`, and `Carousel`; `BestBooks.jsx`.
  - created `BestBooks` constructor; `BestBooks.jsx`.
  - created  `About.jsx`; export.
  - updated `main.jsx` to include `BrowserRouter`; allowing `Link`, `Routes`, and `Route` to work correctly.
  - imported `bootstrap`; `main.jsx`.
  - replaced starter `App.css` and `index.css` with basic styling (which will no doubt change as we go).
  - created `VITE_SERVER` variable for URL; `.env`.
    - imported; `BestBooks.jsx`.
    - updated `const response`.
    - expand component state in constructor; `BestBooks.jsx`.
    - created methods; `showBookForm` and `hideBookForm` to later connect to 'add book' button and modal 'close' button; `BestBooks.jsx`.
    - strengthen `getBooks();` with `try... catch`; `BestBooks.jsx`.
    - added two guard clause in `render` statement;`BestBooks.jsx`.
    - created `AddBookButton.jsx`.
    - imported `Button` and created simple function; `AddBookButton.jsx`.
    - imported `AddBookButton.jsx` into `BestBooks.jsx`, rendered it in return statement.
    - created `BookFormModal.jsx` (with placeholder text) to either define show, hide, or close behavior; exported -> `BestBooks.jsx`.
    - started building the `Form` UI aspects, replacing placeholder; `BookFormModal.jsx`.
    - imported `useState` and created `handleChange();`; `BookFormModal.jsx`.
    - connected the inputs and changes of Title, Description, and Status to `handleChange`, plus adding `name` attributes; `BookFormModal.jsx`.
    - imported `axios` and created submit handler `handleSubmit();`, and tied it to `<Form>`; `BookFormHandler.jsx`.
    - *troubleshooting*; 404 error and console.log failure.
    - still debugging
    - **If MongoDB Atlas reports `self-signed certificate in certificate chain`; check network first. The cause may be TLS inspection by the organization's network infrastructure rather than a problem with the application.**
  - 07.12
    - created `handleAddBook()` to update on new books added; `BestBooks.jsx` | pass into `<BookFormModal />` under return statement.
    - After server returns newly created book, `BookFormModal.jsx` notifies parent through `props.handleAddBook(response.data);` and hands over the object to `BestBooks.jsx`.
    - created `handleDeleteBook();` with intention to refactor later into its own componenet alngside carousel; `BestBooks.jsx`.
    - imported and added `<Button />` inside of `<Carousel />` -> retrun statement; `BestBooks.jsx`.
    - updated `MONGODB` connection string with new password; `.env`.
    - created `showEditForm();`; `BestBooks.jsx`.
    - updated state for modal showing; `showModal` -> `showAddModal` and `showEditModal`; as well as the methods that use it accordingly; `BestBooks.jsx`.
    - created `hideEditForm();` that resets `selectedBook` once modal is closed; `BestBooks.jsx`.
    - added second `<Button>` for editing; `BestBooks.jsx`.
    - created `EditBookModal();` -> `EditBookModal.jsx`; imported into `BestBooks,jsx` to render.
    - created `handleChange();`, `<Modal>` (<- `<Form>`) in return statement; `EditBookModal.jsx`.
    - created `handleSubmit();`; `EditBookModal.jsx`.
    - updated `<Form>` with `onSubmit={handleSubmit}`; `EditBookModal.jsx`.
    - added `<Button>` 'Save Changes'; `EditBookModal.jsx`.
    - created `handleUpdateBook` and passed it as props into `<EditBookModal/>`; `BestBooks.jsx`.
- **`rization` branch created.**
  - 07.16
    - installed `auth0/auth0-react@2.x`; *
    - created `VITE_AUTH0_DOMAIN` and `VITE_AUTH0_CLIENT_ID` variables; `env`.
    - imported `Auth0Provider`, wrapped `<BrowserRouter>` inside `<Auth0Provider>`; `main.jsx`.
    - created `/Auth` sub-directory with files, `AuthButtons.jsx`, `Login.jsx`, and `Logout.jsx` from provided starter; `/src`.
    - created `Welcome.jsx`.
    - imported `useAuth0`, `AuthButtons`, `Welcome`; `App.jsx`.
    - created `isAuthenticated`; `App.jsx`.
    - added `<AuthButtons />`; `<nav>`; `App.jsx`.
    - updated home route `/` to include conditional rendering based on whether logged on or not; `App.jsx`.