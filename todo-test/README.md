




 <h1>📝 Project Reflection</h1>
<h3>
  <p>
  This application serves as an exploration of high-fidelity UI/UX implementation and rigorous state management within the React ecosystem. Rather than relying on pre-built component libraries, I engineered a custom "pill-on-pill" layout from the ground up, utilizing absolute positioning and strategic z-index layering to achieve 100% design fidelity. I focused heavily on UX friction and safety; for instance, the "Slide to Clear" mechanic was intentionally designed to replace traditional buttons, preventing accidental data loss through deliberate user interaction—a design philosophy common in professional-grade consumer electronics. Technically, the project demonstrates a deep understanding of the React lifecycle, utilizing useRef for optimized DOM access and ensuring efficient component re-renders through immutable state updates and unique key management.
  
  </p>
</h3>

![Todo App Demo](./src/assets/README_files/demo.jpeg)




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
