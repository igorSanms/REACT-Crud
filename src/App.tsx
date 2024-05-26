import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Modal from './components/Modal';
import './styles/App.css';
import './styles/index.css';

interface Item {
  nome: string;
  codigo: string;
  preco: number;
  fabricacao: string;
  vencimento: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  // Carregar itens do localStorage quando o componente é montado
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Salvar itens no localStorage sempre que a lista de itens mudar
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    setCurrentItem(null);
    setModalOpen(true);
  };

  const handleEdit = (index: number) => {
    setCurrentItem(items[index]);
    setModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSave = (item: Item) => {
    if (currentItem) {
      const newItems = items.map(i => i === currentItem ? item : i);
      setItems(newItems);
    } else {
      setItems([...items, item]);
    }
    setModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <Header onAdd={handleAdd} />
      <Table items={items} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal isOpen={isModalOpen} onClose={handleClose} onSave={handleSave} currentItem={currentItem} />
    </div>
  );
};

export default App;
