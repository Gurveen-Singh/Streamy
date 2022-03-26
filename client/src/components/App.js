import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<StreamList />} />
            <Route path="/streams/new" exact element={<StreamCreate />} />
            <Route path="/streams/edit" exact element={<StreamEdit />} />
            <Route path="/streams/delete" exact element={<StreamDelete />} />
            <Route path="/streams/show" exact element={<StreamShow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
