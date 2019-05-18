import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import StaticPagesRoutes from "routes/StaticPagesRoutes";

class App extends Component {
  render() {
    return (
      <Router>
        <StaticPagesRoutes />
      </Router>
    );
  }
}

export default App;
