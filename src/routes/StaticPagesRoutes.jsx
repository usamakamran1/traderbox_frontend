import React from "react";
import { Route } from "react-router-dom";

import HomePage from "views/HomePage";

const StaticPagesRoutes = (props) => {
  return (
    <Route path="/" exact component={HomePage} />
  )
}

export default StaticPagesRoutes;
