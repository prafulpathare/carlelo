import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">

      <div className="header">

        <nav>
          {menu.map((item: IdLabel) => (
            <a href="#">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mast-head">
        <img src="https://images-porsche.imgix.net/-/media/118CC27923D348479FFFA724C52F05F8_DDC0C8C251894632B424B4D2D985AB7E_TA24Q3DIX0010-taycan-turbo-side?w=2560&h=697&q=45&crop=faces%2Centropy%2Cedges&auto=format" id="mto-img" />
      </div>
    </div>
  );
}

export default App;


const menu: IdLabel[] = [
  {
    id: 2828934,
    label: 'About',
  },
  {
    id: 2881934,
    label: 'My Account',
  },
  {
    id: 288934,
    label: 'Home',
  },
]


interface IdLabel {
  id: number;
  label: string;
}