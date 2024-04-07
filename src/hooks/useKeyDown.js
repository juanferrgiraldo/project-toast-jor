import React from 'react';

function useKeyDown(keyCode, callback) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === keyCode) {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [keyCode, callback]);
}

export default useKeyDown;
