import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/512px-Circle-icons-gamecontroller.svg.png"
          alt="icons"
        />
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Message</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <main className="content">
        <img
          src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
          alt="play"
        />
        <div className="ava">
          <img
            src="https://cspromogame.ru//storage/upload_images/avatars/3981.jpg"
            alt="ava"
          />
        </div>
        <p>description</p>
        <div>My post</div>
        <div>New post</div>
        <div>post one</div>
        <div>post two</div>
      </main>
    </div>
  );
}

export default App;
