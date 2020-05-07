
import { createContext, useContext } from 'react';

export const AuthorisedContext = createContext();

export function useAuthorised() {
    return useContext(AuthorisedContext);
}