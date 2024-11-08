// components/Layout.js
import React from 'react';
import EscapingButton from './EscapingButton';
import Link from 'next/link';

const Layout = () => {
  return (
    <div 
      style={{ 
        height: '100vh', 
        background: 'linear-gradient(to right, #000000, #434343)', // Gradiente preto
        display: 'flex', 
        flexDirection: 'column', // Layout vertical
        justifyContent: 'center', // Centraliza os botões
        alignItems: 'center', 
        color: '#fff',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif", // Fonte bonita
        position: 'relative',
      }}
    >
      <h1 style={{
        fontSize: '3rem', 
        marginBottom: '30px',
        color: '#fff',
      }}>
        Do you want pizza?
      </h1>

      {/* Div para os dois botões ficarem ao lado um do outro */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', // Centraliza os botões
        gap: '20px' // Espaçamento entre os botões
      }}>
        {/* Botão "Não" fixo */}
        <div style={{ zIndex: 2 }}>
          <Link href="https://www.google.com">
            <button 
              style={{
                padding: '25px 50px',
                fontSize: '22px', 
                borderRadius: '12px',
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #fff', // Borda branca
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              No
            </button>
          </Link>
        </div>

        {/* Botão "Sim" que vai fugir, começando ao lado do botão "Não" */}
        <EscapingButton />
      </div>
    </div>
  );
};

export default Layout;
