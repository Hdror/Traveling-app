import { Travel } from "./travel";

export interface AutoCompleteOption extends Partial<Omit<Travel, "startDate" | "endDate">> {}
