"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store"; 
import { PersistGate } from "redux-persist/integration/react"; 


const AuthProvider = ({ children }: { children: ReactNode }) => { 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AuthProvider;
