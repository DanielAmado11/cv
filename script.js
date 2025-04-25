document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#btnCrearPdf");
  const $page = document.querySelector("#contenedor");
  // $boton.addEventListener("click", () => {
  //     console
  //     html2canvas(document.body,{
  //         onrendered:function(canvas){

  //         // var img=canvas.toDataURL("image/png");
  //         var doc = new jsPDF();
  //         // doc.addImage(img,'JPEG',20,20);
  //         doc.save('test.pdf');
  //         }
  //         })
  // });
  $boton.addEventListener("click", () => {
    let chao;

    html2canvas($page).then((canvas) => {
      $page.appendChild(canvas);
      chao = $page.appendChild(canvas);
      console.log(chao);
    });
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//     // Escuchamos el click del botón
//     const $boton = document.querySelector("#btnCrearPdf");
//     $boton.addEventListener("click", () => {
//         const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
//         html2pdf()
//             .set({
//                 margin: 1,
//                 filename: 'documento.pdf',
//                 image: {
//                     type: 'jpeg',
//                     quality: 0.98
//                 },
//                 html2canvas: {
//                     scale: 5, // A mayor escala, mejores gráficos, pero más peso
//                     letterRendering: true,
//                 },
//                 jsPDF: {
//                     unit: "in",
//                     format: "a3",
//                     orientation: 'portrait' // landscape o portrait
//                 }
//             })
//             .from($elementoParaConvertir)
//             .save()
//             .catch(err => console.log(err));
//     });
// });
