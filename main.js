
const output = document.querySelector('.output');
const grid = {rows:8,cols:7};
const total = grid.rows*grid.cols;
const output1= document.createElement('div');

const output2= document.createElement('div');
output2.style.margin='10px auto';
output2.style.border ='1px solid #eee';
output2.style.maxWidth= '80%';
output2.style.textAlign= 'center';
output2.style.padding = '10px';

const btn1=document.createElement('button');
btn1.textContent='Random Colors 1';
const btn2=document.createElement('button');
btn2.textContent='Random Colors 2';
const holder=[];
btn1.addEventListener('click',(e)=>{
    holder.forEach((el) => {
        el.style.backgroundColor=ranBack();
    });
})
btn2.addEventListener('click',(e)=>{
    const eles=document.querySelectorAll('.box');
    eles.forEach((el)=>{
        el.style.backgroundColor=ranBack();
    })
})



document.body.prepend(output1);
document.body.prepend(output2);
output2.append(btn1);
output2.append(btn2);
output1.classList.add('output');
output1.style.marginBottom='10px';
createGrid(total,output,grid.cols);
createGrid(total,output1,grid.cols);


function ranBack(){
    return '#'+(Math.random().toString(16).substr(-6));
}

function createGrid(tot,parent,cols){
    for(let i=0;i<tot;i++){
        const ele = maker (i,parent);
        holder.push(ele);
        ele.addEventListener('click',updateBack)
    }
    // parent.styte.setProperty(`grid-template-colums`,`repeat(${cols},1fr)`)
    parent.style.setProperty(`grid-template-columns`,`repeat(${cols},1fr)`)
        
}



function updateBack(e){
const ele=e.target;
document.body.style.backgroundColor=ele.style.backgroundColor;
}


function maker (i, parent){
    const ele=document.createElement('div');
    ele.textContent=`${i+1}`;
    ele.classList.add('box');
    ele.style.backgroundColor=ranBack();
    return parent.appendChild(ele);

}
