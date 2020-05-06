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
     const key = event.key;
    for(let i=0; i<codes.length; i++){
      if(key === codes[i]){;}
        else{
        i=0;
      }
      if(i+1 === codes.length){
        alert('Hurray!');
        i=0;
      }
    }
});
}
