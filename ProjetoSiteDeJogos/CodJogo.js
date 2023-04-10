
const jogo_velha = {
 board: ['','','','','','','','',''],
 simbols:{
     options: ['X','O'],
     turn_index: 0,
     change: function(){
         this.turn_index = (this.turn_index=== 0 ? 1: 0);
     }
     },
container_element: null,
gameover: false,
sequencia_vencedora: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

],


init: function(container){
    this.container_element = container;
},


jogada: function(position){
    if(this.gameover) return false;
    if(this.board[position]===''){
        this.board[position] = this.simbols.options[this.simbols.turn_index];
    this.draw();
    let ganhando_sequencia = this.checa_sequencias(this.simbols.options[this.simbols.turn_index]);
    if(ganhando_sequencia>= 0){
     this.jogo_acabou();
    }else{
        this.simbols.change();
    }
  return true;
}else{
    return false;

    }

},

jogo_acabou: function(){
    this.jogo_acabou = true;
    console.log(' jogo acabou');
},

checa_sequencias: function(simbols){
   
    for(i in this.checa_sequencias){
        if(this.board[this.sequencia_vencedora[i][0]] == simbol &&
        this.board[this.sequencia_vencedora[i][1]] == simbol &&
        this.board[this.sequencia_vencedora[i][2]] == simbol ){
            return i;
            console.log('sequencia vencedora :' + i);
        }
        
    };
    return -1;


},
draw: function(){
      let content = '';

      for (i in this.board){
          content += '<div onclick="jogo_velha.jogada('+ i + ')"> '+ this.board[i] +' </div>';
      }

      this.container_element.innerHTML = content;
}

};