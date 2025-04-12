export interface SubService {
  _id: string;
  name: string;
}

export interface SubCategory {
  _id: string;
  name: string;
}

export interface DropdownItem {
  _id: string;
  name: string;
  subservices?: SubService[];    // Optional if the item might not have subservices
  subcategories?: SubCategory[]; // Optional if the item might not have subcategories
}

export default interface Navbar {
  id: string;
  title: string;
  dropdown: DropdownItem[];
}
