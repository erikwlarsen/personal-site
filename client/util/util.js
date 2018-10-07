export const newTabClick = url => () => {
  const win = window.open(url, '_blank');
  win.focus();
};

export const newTabKeyPress = url => (e) => {
  if (e.key === 'Enter') {
    const win = window.open(url, '_blank');
    win.focus();
  }
};
