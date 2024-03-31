import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import Loader from "./components/loader/loader";
const Home = lazy(() => import("./pages/home/home"));

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </div>  );
}

export default App;
