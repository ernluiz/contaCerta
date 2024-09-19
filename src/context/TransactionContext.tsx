import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const editTransaction = (updatedTransaction: Transaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  const deleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  const calculateTotals = () => {
    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "receita") {
        income += transaction.amount;
      } else {
        expenses += transaction.amount;
      }
    });

    return { income, expenses };
  };

  const totals = calculateTotals();

  return (
    <div>
    <TransactionContext.Provider value={{ transactions, addTransaction, editTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
    </div>
  );
};

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
};
