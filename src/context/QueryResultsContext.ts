import { createContext } from "react";
import IResultsRow from "../DTOs/DTOs";

export const QueryResultsContext = createContext([[] as IResultsRow[], () => {}]);
