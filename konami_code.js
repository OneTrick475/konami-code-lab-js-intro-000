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
  document.body.addEventListener("keydown", (event) => {
   function konami(e){
     let i=0;
       const key = e.key;
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
    })
   }
