# React Boilerplate with Tailwind v4, Routing & Dark Mode

A modern React boilerplate built with **Vite** + **pnpm**, including:

- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) with public/private routes
- Dark/Light mode using a **global Context**
- Clean and extensible project structure

## Installation

```bash
# Clone the repo
git clone https://github.com/your-profile/my-boilerplate.git
cd my-boilerplate

# Install dependencies
pnpm install

# Start the dev server
pnpm dev

```
Default server runs on http://localhost:5173


## Features

### Public/Private Routing
- `/` → Home

### Dark/Light mode
- Managed by a **ThemeContext**  
- Persists using `localStorage`  
- Toggle available in the **navbar**  

### Notifications
- Powered by **react-toastify**  
