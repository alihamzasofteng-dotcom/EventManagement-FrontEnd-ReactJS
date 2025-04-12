  // export interface SubCategory {
  //   _id: string;
  //   name: string;
  // }
  
  export default interface Category {
    _id: string;
    name: string;
    type: string,
    image_background: string;
    // subcategories?: SubCategory[];
  }
  