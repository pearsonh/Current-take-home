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
  user_id: string;
};

export type Pay = {
  id: string;
  pay_id: number; //id corresponding to an individual payment - autoincrementing
  amount: number; //negative if a payment, positive if a request. Better for wallets math/data reporting
  contact_id: string; //id of the contact who received the payment/request
  user_id: string; //id of the user to whom the transaction pertains
  create_date: number; //UNIX timestamp the transaction was created 
  finalize_date: number | null; //UNIX timestamp the transaction was finalized - null is translated to pending on the UI
  update_date: number; //UNIX timestamp of when the last update was created
  delete_date: number | null; //UNIX timestamp of the date when the record was deleted or made obsolete through update. 
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
  pay_id: number;
  contact_id: string;
  amount: number;
  is_request: 'request' | 'payment';
  status: 'pending' | 'paid';
};
