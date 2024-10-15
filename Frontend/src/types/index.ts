// // /src/types/index.ts

// // Project interface
// export interface Project {
//   name: string;
//   description: string;
// }

// // Customer interface
// export interface Customer {
//   id?: number; // Assuming customers have an ID
//   name: string;
//   email: string; // Example additional field
//   address?: string; // Optional field
// }

// src/types/index.ts
export interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
}

export interface Project {
  id: number;
  customerId: number;
  name: string;
  description: string;
}

// If you have other types, export them here as well
