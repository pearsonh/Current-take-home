// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Pay = {
  id: string;
  amount: number;
  contactId: string; //id of the contact who received the payment/request
  create_date: number; //UNIX timestamp the transaction was created 
  finalize_date: number | null; //UNIX timestamp the transaction was finalized - null means pending
};

export type Activity = {
  month: string;
  activity: number;
};

export type LatestPay = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
  finalize_date: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestPayRaw = Omit<LatestPay, 'amount'> & {
  amount: number;
};

export type PaysTable = {
  id: string;
  contact_id: string;
  name: string;
  email: string;
  image_url: string;
  create_date: string;
  date: string;
  amount: string;
  status: 'pending' | 'paid';
};

export type ContactsTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_pays: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedContactsTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_pays: number;
  total_pending: string;
  total_paid: string;
};

export type ContactField = {
  id: string;
  name: string;
};

export type PayForm = {
  id: string;
  contact_id: string;
  amount: number;
  is_request: 'request' | 'payment';
  status: 'pending' | 'paid';
};
