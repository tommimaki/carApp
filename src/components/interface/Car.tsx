export interface Car {
    id: number;
    brand: string;
    model: string;
    color: string;
    fuel: string;
    year: number;
    price: number;
    _links: {
      self: {
        href: string;
      };
    };
  
  }
  