export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  nit: string; // Tax ID
}

export interface Sale {
  id: string;
  date: string; // ISO string
  items: CartItem[];
  total: number;
  customer: Customer;
  invoiceEmailContent?: string;
}

export type ViewState = 'POS' | 'INVENTORY' | 'ACCOUNTING';

export interface SalesSummary {
  totalRevenue: number;
  totalSales: number;
  topSellingProduct: string;
  dailySales: { date: string; amount: number }[];
}