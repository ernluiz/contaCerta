import React, { useState } from 'react';
import { useTransactionContext } from '../../context/TransactionContext';

const Receitas = () => {
    const { addTransaction, editTransaction } = useTransactionContext();
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleAddReceita = () => {
        if (!description || amount <= 0) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (editingId !== null) {
            editTransaction({
                id: editingId,
                description,
                amount,
                type: 'receita',
            });
            setEditingId(null);
        } else {
            addTransaction({
                id: Date.now(),
                description,
                amount,
                type: 'receita',
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
            <h3>Adicionar Receita</h3>
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
            <button onClick={handleAddReceita}>
                {editingId ? 'Salvar Alterações' : 'Adicionar Receita'}
            </button>
        </div>
    );
};

export default Receitas;
