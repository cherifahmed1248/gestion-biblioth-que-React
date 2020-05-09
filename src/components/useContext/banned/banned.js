
import { createContext, useContext } from 'react';

export const BannedContext = createContext();

export function useBanned() {
    return useContext(BannedContext);
}