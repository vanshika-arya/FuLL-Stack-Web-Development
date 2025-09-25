// let canvas= document.querySelector('canvas')
// let pen= canvas.getContext("2d")
// pen.fillStyle="pink"
// pen.fillRect(20,60,30,30)
// pen.clearRect(20,50,30,30)
 let canvas=   document.querySelector('canvas')
    let pen=    canvas.getContext("2d")
 
    let snakeCells=[[0,0]]
    let cell=50
    let direction="right"
    let gameOver=false
   let score=0
let random=generateRandomCell()


    let id=   setInterval(()=>{
      draw()
      update()

    },300)
       document.addEventListener("keydown",(e)=>{
        // console.log("helllo");
        // console.log(e);
        if(e.key=="ArrowUp"){
          direction='up'
        }else if(e.key=='ArrowDown'){
          direction='down'
        }else if(e.key=='ArrowLeft'){
          direction='left'
        }else{
          direction='right'
        }

       })
    function draw(){
      if(gameOver==true){
        clearInterval(id)
     
       pen.font = '40px sans-serif';
           pen.fillText('Game over', 50, 150);
        return 
      }
      pen.clearRect(0,0,1100,500)
        for(let i of snakeCells){
        
              pen.fillStyle="green"
            pen.fillRect(i[0],i[1],cell,cell)
        }

        pen.font = '40px sans-serif';
        pen.fillText(`${score}`,150,50);
               pen.fillStyle="pink"
        pen.fillRect(random[0],random[1],cell,cell)
    }

    function update(){
     let headX=   snakeCells[snakeCells.length-1][0]
        let headY=  snakeCells[snakeCells.length-1][1]
         
         let newX
            let newY
            if(direction=='right'){
              newX=headX+cell
              newY=headY
              if(newX==500){
                gameOver=true
              }
            }
            else if( direction=="left"){
              newX=headX-cell
              newY=headY
              if(newX<0){
                gameOver=true
              }
            }
            else if(direction=='up'){
              newX=headX
              newY=headY-cell
              if(newY<0){
                gameOver=true
              }
            }
            // }else if(){

            // }
            else{
              newX=headX
              newY=headY+cell
              if(newY==200){
                gameOver=true
              }
            }
           
     
            snakeCells.push([newX,newY])
       
            if(newX==random[0] && newY== random[1]){
              random=generateRandomCell()
              score+=1
            }
            else{
              snakeCells.shift()

            }
        
         
           


    }

    function generateRandomCell() {
  return [
    Math.round((Math.random()*(450))/cell)*cell,
    Math.round((Math.random()*(150))/cell)*cell
  ]
}

console.log(generateRandomCell());

