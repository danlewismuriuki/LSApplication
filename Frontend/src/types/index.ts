// /src/types/index.ts

// Project interface
export interface Project {
  name: string;
  description: string;
}

// Customer interface
export interface Customer {
  id: number; // Assuming customers have an ID
  name: string;
  email: string; // Example additional field
  address?: string; // Optional field
}
