import React, { useState } from 'react';
import { useTransactionContext } from '../../context/TransactionContext';
import { useThemeContext } from '../../components/themes/ThemeContext';
import "./styles.css";
import TransactionList from '../../components/transaction/TransactionList';
import ExpenseIncomeChart from '../../components/Chart/ExpenseIncome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const { transactions, addTransaction, editTransaction, deleteTransaction } = useTransactionContext();
  const { theme, toggleTheme } = useThemeContext();
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'receita' | 'despesa'>('receita');
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddTransaction = () => {
    if (!description || amount <= 0) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (editingId !== null) {
      editTransaction({
        id: editingId,
        description,
        amount,
        type,
      });
      setEditingId(null);
    } else {
      addTransaction({
        id: Date.now(),
        description,
        amount,
        type,
      });
    }
    resetForm();
  };

  const handleDeleteTransaction = (id: number) => {
    deleteTransaction(id);
  };

  const handleEditTransaction = (id: number) => {
    const transactionToEdit = transactions.find((transaction) => transaction.id === id);
    if (transactionToEdit) {
      setDescription(transactionToEdit.description);
      setAmount(transactionToEdit.amount);
      setType(transactionToEdit.type);
      setEditingId(transactionToEdit.id);
    }
  };

  const resetForm = () => {
    setDescription('');
    setAmount(0);
    setType('receita');
  };

  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'receita') {
        acc.income += transaction.amount;
      } else {
        acc.expenses += transaction.amount;
      }
      return acc;
    },
    { income: 0, expenses: 0 }
  );

  const totalreceita = transactions
    .filter((transaction) => transaction.type === 'receita')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totaldespesas = transactions
    .filter((transaction) => transaction.type === 'despesa')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalreceita - totaldespesas;

  return (
    <div className={`dashboard-container ${theme}`}>
      <div className="header-add">
        <h3 className="header-title">Adicionar/Editar Transação</h3>
        <div className="header-button">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme ? faSun : faMoon} />
          </button>
        </div>
      </div>
      <div className="dashboard-input">
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value as 'receita' | 'despesa')} required>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
        <button onClick={handleAddTransaction}>
          {editingId ? 'Salvar Alterações' : 'Adicionar Transação'}
        </button>
      </div>
      <div className="dashboard-content">
        <TransactionList
          transactions={transactions}
          onEdit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
        />
        <h2>Gráfico de Receitas e Despesas</h2>
        <ExpenseIncomeChart data={totals} />
        <div className='dashboard-summary'>
          <h3>Resumo</h3>
          <p>Total de Receitas: R$ {totalreceita.toFixed(2)}</p>
          <p>Total de Despesas: R$ {totaldespesas.toFixed(2)}</p>
          <p>Saldo: R$ {balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
