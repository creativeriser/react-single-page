# React Single Page Layout

🚀 **[View Live Demo on Vercel](https://react-single-page-alpha.vercel.app/)**

## About The Project
This project is a foundational React application built as a faculty task for the Full Stack Development Bootcamp. It demonstrates how to structure a basic web page using React components and Vite. 

The primary focus of this build is implementing a clean, modular component architecture and using modern CSS Flexbox to solve the classic web development challenge of keeping a footer pinned to the bottom of the screen, regardless of the content height.

## Features
* **Component-Based Architecture:** The UI is broken down into reusable `Navbar`, `Hero`, `Home`, and `Footer` components.
* **Modern Layout:** Utilizes CSS Flexbox (`min-height: 100vh` and `flex-grow: 1`) to ensure the footer always stays at the bottom of the viewport.
* **Vite Powered:** Built with Vite for incredibly fast development server start times and optimized builds.
* **Responsive Styling:** Includes a global CSS reset to remove default browser margins and padding for a polished, edge-to-edge look.

## Technologies Used
* React.js
* Vite
* Standard CSS3 (Flexbox)

## Project Structure
```text
vite-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
