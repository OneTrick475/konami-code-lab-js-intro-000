const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", (event) =>{
    const key = e.key;
     let i=0;
     function konami(e){
    if(codes[i] === key){
      i++;
      }
      if(i === codes.length){
        console.alert('wp');
      }
      else{
        i=0;
      }
     }
   }
}
