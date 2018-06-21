import React from 'react';

const Menu = props => {
  const handleClick = (e) => {
    props.selectComponent(e.target.id);
  };

  const buttonNames = ['Main', 'Projects', 'Globe', 'About'];
  const buttons = buttonNames.map((name) => {
    const lowerCaseName = name.toLowerCase();
    return (
      <div
        className={`menu-btn${props.selectedComponent === lowerCaseName ? ' checked' : ''}`}
        id={lowerCaseName}
        key={lowerCaseName}
        onClick={handleClick}>
        {name}
      </div>
    );
  });

  return (
    <div id="menu-parent">
      {buttons}
    </div>
  )
}

export default Menu;
