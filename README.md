# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
  

 💱 Currency Converter

A React.js currency converter application that allows users to convert amounts between different currencies in real-time. It uses the Frankfurter API for live exchange rates.

This project is part of a B.Tech assignment task and demonstrates React components, hooks, API integration, and frontend styling.

🌟 Features

Convert any amount from one currency to another.

Real-time exchange rates fetched from Frankfurter API.

Conversion history available during the session (not stored after refresh).

Colorful, responsive, and modern UI with gradient backgrounds.

Error handling for invalid input or failed API requests.

🎨 Frontend Design

Gradient background for a modern, vibrant look.

Input fields and dropdowns with bright colors and shadows for clarity.

Conversion results and history displayed in colorful, readable cards.

Buttons with hover effects for better user experience.

📁 Folder Structure
currency-convert/
├─ package.json
├─ index.html
├─ vite.config.js
├─ README.md
├─ src/
│  ├─ main.jsx              # React entry point
│  ├─ App.jsx               # Main App component
│  ├─ styles.css            # Global styles
│  ├─ components/
│  │  ├─ CurrencySelect.jsx # Dropdown component for selecting currencies
│  │  └─ RateDisplay.jsx    # Component to display conversion rate
│  ├─ hooks/
│  │  ├─ useSymbols.js      # Custom hook to fetch currency symbols
│  │  └─ useConvert.js      # Custom hook to convert currency
│  └─ services/
│     └─ exchangeApi.js     # API functions for currency conversion
└─ public/
   └─ favicon.svg (optional)

🛠 Technologies Used

React.js – Component-based frontend library

Vite – Build tool and development server

HTML / CSS – Styling the UI

Frankfurter API – Free currency conversion API

🚀 Getting Started

Clone the repository

git clone <your-repo-link>
cd currency-convert


Install dependencies

npm install


Run the development server

npm run dev


Open the app in your browser

http://localhost:5173

🔧 How to Use

Enter the amount to convert.

Select the From currency.

Select the To currency.

Click Convert to see the result.

Conversion history appears below the converter.

Click Clear All to remove the session’s history.

Note: Conversion history and input values are not stored after refreshing the page.

⚠️ Error Handling

If the API fails or returns invalid data, the app displays an error message.

If the input is empty, the app prompts to enter an amount.

📌 Author

Vikash Kumar – B.Tech Computer Science & Engineering – 2025

GitHub: [your-github-link]

LinkedIn: [your-linkedin-link]

🎓 Assignment Notes

This project demonstrates React hooks, API calls, component reusability, and styling.

Designed for educational purposes / assignment submission.

No localStorage or database is used; session data is temporary.
