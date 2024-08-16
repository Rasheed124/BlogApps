import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// <!-- Vendor CSS Files -->
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/aos/aos.css";

// <!-- Template Main CSS Files -->
import "../src/assets/css/variables.css";
import "../src/assets/css/main.css";

// <!-- Vendor JS Files -->
import "../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../src/assets/vendor/swiper/swiper-bundle.min.js";
import "../src/assets/vendor/glightbox/js/glightbox.min.js";

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
