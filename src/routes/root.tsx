import React from 'react';

export default function Root() {
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <a href={`/home`}>Home</a>
            </li>
            <li>
              <a href={`/about`}>About</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
