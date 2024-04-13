/*React component ensures that any components wrapped within it have access to 
the Redux store, allowing them to access and update the global state managed by 
Redux. */

"use client";
import { store } from "./store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;