import React from 'react';
import PageDefault from '../../components/PageDefault';

function Pagina404(){
  return(
    <PageDefault>
      <div>
        <h1>Error 404: Pagina não encontrada</h1>
        <canvas id="game-canvas" width="320" height="480"></canvas>
        <script src="./jogo.js"></script>
      </div>
    </PageDefault>
  );
}
export default Pagina404;