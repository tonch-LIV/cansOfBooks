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