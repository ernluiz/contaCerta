import React, { useState } from 'react';
import { useTransactionContext } from '../../context/TransactionContext';

const Despesas = () => {
    const { addTransaction, editTransaction } = useTransactionContext();
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleAddDespesa = () => {
        if (!description || amount <= 0) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (editingId !== null) {
            editTransaction({
                id: editingId,
                description,
                amount,
                type: 'despesa',
            });
            setEditingId(null);
        } else {
            addTransaction({
                id: Date.now(),
                description,
                amount,
                type: 'despesa',
            });
        }
        resetForm();
    };

    const resetForm = () => {
        setDescription('');
        setAmount(0);
    };

    return (
        <div>
            <h3>Adicionar Despesa</h3>
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
            <button onClick={handleAddDespesa}>
                {editingId ? 'Salvar Alterações' : 'Adicionar Despesa'}
            </button>
        </div>
    );
};

export default Despesas;
