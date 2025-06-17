// let a=document.querySelectorAll(".ip");
// let b=document.querySelector("#submit-btn");
// let c=document.querySelectorAll(".userData");
// let val=[];
// const f1=()=>{
        
//     for(let x of a){
//         console.log(x.value);
//         // val.push(x.value); 
//     }
//     const data={
//         fname:val[0],
//         email:val[1],
//         username:val[2],
//         mobile:val[3]
//     };
//     // console.log(data);
//     f2;

// };
// const f2=()=>{
//     c.forEach(index=>{
//         val.push([index.placeholder,index.value]);
//     })
//     const h = XLSX.utils.aoa_to_sheet(val);
//     const j = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(h, j, "FormData");
//     XLSX.writeFile(j,"entry.xlsx");
// }
                                                                                                                                            
// b.addEventListener("click",f1);
let a = document.querySelectorAll(".ip");
let b = document.querySelector("#submit-btn");
let c = document.querySelector("#reset-btn");
let d = document.querySelector("#frm");

const f1 = () => {
  let val = [];

  // Log and collect values
  a.forEach((x) => {
    console.log(x.value);
  });

    val.push([a[0].placeholder, a[1].placeholder,a[2].placeholder,a[3].placeholder]);
    val.push([a[0].value, a[1].value,a[2].value,a[3].value]);

  const sheet = XLSX.utils.aoa_to_sheet(val);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet, "FormData");
  XLSX.writeFile(wb, "entry.xlsx");
};
const f3=()=>{
  //console.log(c);
  d.reset();
}
b.addEventListener("click", f1);
c.addEventListener("click",f3);


