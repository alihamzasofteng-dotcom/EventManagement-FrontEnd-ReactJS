export default interface Event {
    _id: string;
    images: string[]; // Specify array of strings for images
    name: string;
    slug: string;
    description: string;
    budget: string;
    type: string;
  }
