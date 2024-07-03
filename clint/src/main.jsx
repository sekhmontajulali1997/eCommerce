
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

import "./assets/nioBoardAdminAssets/assets/css/style.css";
import "./assets/nioBoardAdminAssets/assets/css/libs/editors/quill20d4.css";
import "./assets/revelAssets/assets/css/style.css";
import "./assets/revelAssets/assets/vendor/css/all.min.css";
import "./assets/revelAssets/assets/vendor/flaticon/flaticon.css";
import "./assets/revelAssets/assets/vendor/css/nice-select.css";
import "./assets/revelAssets/assets/vendor/css/flags.css";
import "./assets/revelAssets/assets/vendor/css/slick.css";
import "./assets/revelAssets/assets/vendor/css/modal-video.min.css";
import "./assets/revelAssets/assets/vendor/css/nouislider.min.css";
import "./assets/revelAssets/assets/vendor/css/bootstrap.min.css";
import "./assets/revelAssets/assets/vendor/css/meanmenu.css";
import "./assets/revelAssets/assets/vendor/css/nouislider.min.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
);
