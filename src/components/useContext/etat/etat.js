
import { createContext, useContext } from 'react';

export const EtatContext = createContext();

export function useEtat() {
    return useContext(EtatContext);
}