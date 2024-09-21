import React, { useEffect, useRef } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onEdit, onDelete }) => {
  const transactionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transactionsRef.current) {
      transactionsRef.current.scrollTop = transactionsRef.current.scrollHeight;
    }
  }, [transactions]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div>
      <h3>Transações</h3>
      <div className='dashboard-transactions' ref={transactionsRef}>
        {transactions.length === 0 ? (
          <p>Nenhuma transação lançada.</p>
        ) : (
          <ul className='transaction-list'>
            {transactions.map((transaction) => (
              <li key={transaction.id} className='transaction-item'>
                <span>
                  {transaction.type === 'receita' ? 'Receita: ' : 'Despesa: '}
                  {transaction.description} {formatCurrency(transaction.amount)}
                </span>
                <div className='button-group'>
                  <button onClick={() => onEdit(transaction.id)} aria-label={`Editar transação ${transaction.description}`}>
                    Editar
                  </button>
                  <button onClick={() => onDelete(transaction.id)} aria-label={`Excluir transação ${transaction.description}`}>
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
