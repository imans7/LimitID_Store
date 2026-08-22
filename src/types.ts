export type Category = "topup" | "voucher" | "hiburan";

export interface GameItem {
  id: string; 
  dbId: number; 
  name: string;
  publisher: string;
  category: Category;
  gradient: string;
  hasServerField: boolean;
  nominalGroups?: NominalGroup[]; 
}

export interface Nominal {
  id: string;
  label: string;
  price: number;
  instant?: boolean;
  icon?: "diamond" | "pass" | "uc" | "generic";
}

export interface NominalGroup {
  title: string;
  items: Nominal[];
}
