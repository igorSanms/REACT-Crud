import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
  currentItem: Item | null;
}

interface Item {
  nome: string;
  codigo: string;
  preco: number;
  fabricacao: string;
  vencimento: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, currentItem }) => {
  const [item, setItem] = useState<Item>({
    nome: '',
    codigo: '',
    preco: 0,
    fabricacao: '',
    vencimento: ''
  });

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    }
  }, [currentItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setItem({ ...item, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(item);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container active" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" value={item.nome} onChange={handleChange} required />

          <label htmlFor="codigo">Código</label>
          <input id="codigo" type="text" value={item.codigo} onChange={handleChange} required />

          <label htmlFor="preco">Preço</label>
          <input id="preco" type="number" value={item.preco} onChange={handleChange} required />

          <label htmlFor="fabricacao">Data de Fabricação</label>
          <input id="fabricacao" type="date" value={item.fabricacao} onChange={handleChange} required />

          <label htmlFor="vencimento">Data de Vencimento</label>
          <input id="vencimento" type="date" value={item.vencimento} onChange={handleChange} required />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;