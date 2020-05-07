
import { createContext, useContext } from 'react';

export const BibloContext = createContext();

export function useBiblio() {
    return useContext(BibloContext);
}