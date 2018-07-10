import React from 'react';

const Menu = ({ selectComponent, selectedComponent }) => {
  const handleClick = (e) => {
    selectComponent(e.target.id);
  };

  const buttonNames = ['Main', 'Projects', 'Globe', 'About'];
  const buttons = buttonNames.map((name) => {
    const lowerCaseName = name.toLowerCase();
    return (
      <div
        className={`menu-btn${selectedComponent === lowerCaseName ? ' selected-component' : ''}`}
        id={lowerCaseName}
        key={lowerCaseName}
        onClick={handleClick}>
        {lowerCaseName}
      </div>
    );
  });

  return (
    <div id="menu-parent">
      {buttons}
    </div>
  );
}

export default Menu;
