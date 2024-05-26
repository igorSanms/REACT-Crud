import React from 'react';

const Header: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  return (
    <div className="header">
      <h2>Cadastro de Mercadorias</h2>
      <button onClick={onAdd} id="new">Incluir</button>
    </div>
  );
};

export default Header;
