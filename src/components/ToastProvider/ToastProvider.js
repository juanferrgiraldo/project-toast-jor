import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function dismissToast(id) {
    const newToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(newToastList);
  }

  function createToast(message, variant) {
    setToastList([
      ...toastList,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ]);
  }

  return (
    <ToastContext.Provider value={{ toastList, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
