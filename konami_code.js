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
    let i=0;
   function onKeyDownHandler(e){
     const key = e.key;
    if(codes[i] === key){
      i++;

      if(i === codes.length){
        alert('Hurray');
        i=0;
      }
    }else{
        i=0;
      }
      }
    })
   }
