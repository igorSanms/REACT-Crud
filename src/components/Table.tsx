import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

interface Item {
  nome: string;
  codigo: string;
  preco: number;
  fabricacao: string;
  vencimento: string;
}

interface TableProps {
  items: Item[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ items, onEdit, onDelete }) => {
  return (
    <div className="divTable">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            <th>Preço</th>
            <th>Data de Fabricação</th>
            <th>Data de Vencimento</th>
            <th className="acao">Editar</th>
            <th className="acao">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.codigo}</td>
              <td>R$ {item.preco}</td>
              <td>{item.fabricacao}</td>
              <td>{item.vencimento}</td>
              <td className="acao">
                <button onClick={() => onEdit(index)}> <FaRegEdit /></button>
              </td>
              <td className="acao">
                <button onClick={() => onDelete(index)}><FaRegTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
