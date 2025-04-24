import { createContext, useContext } from "react";
import { Context } from "../pages/Home";

export const stateContext = createContext<Context | undefined>(undefined);

export function useStateContext() {
    const contextData = useContext(stateContext);

    if(contextData === undefined) {
        throw new Error('useStateContext must be used with stateContext');
    }

    return contextData;
}