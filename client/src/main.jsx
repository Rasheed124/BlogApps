import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// <!-- Vendor CSS Files -->
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";


// <!-- Template Main CSS Files -->
import "../src/assets/css/variables.css";
import "../src/assets/css/main.css";

// <!-- Vendor JS Files -->
import "../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";



// <!-- Template Main JS File -->
import "../src/assets/js/main.js";

import ContextProvider from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
