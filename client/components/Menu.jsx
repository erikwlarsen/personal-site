import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ selectComponent, selectedComponent }) => {
  const handleClick = (e) => {
    selectComponent(e.target.id);
  };

  const buttonNames = ['Main', 'Projects', 'Draw', 'About'];
  const buttons = buttonNames.map((name) => {
    const lowerCaseName = name.toLowerCase();
    return (
      <button
        type="button"
        className={`menu-btn${selectedComponent === lowerCaseName ? ' selected-component' : ''}`}
        id={lowerCaseName}
        key={lowerCaseName}
        onClick={handleClick}
      >
        {lowerCaseName}
      </button>
    );
  });

  return (
    <div id="menu-parent">
      {buttons}
    </div>
  );
};

Menu.propTypes = {
  selectComponent: PropTypes.func.isRequired,
  selectedComponent: PropTypes.number.isRequired,
};

export default Menu;
