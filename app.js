let formcreate = document.getElementById('formId')
let tableEl = document.getElementById('table')

let Arraycontain =[];

let header =['name','age of cus','color ','type cat','image'];
function container(custname,age,color,cat,image){
    this.custname = custname;
    this.age =age;
    this.color= color;
    this.cat = cat; 
    this.image = image;
    Arraycontain.push(this)
}


function makeorder(event){
    event.preventDefault();
    let custname = event.target.custname.value;
    let age = event.target.age.value;
    let color = event.target.color.value;
    let cat = event.target.cat.value; 
    let image = event.target.image.value;
   let obj = new container(custname,age,color,cat,image)
    console.log(Arraycontain);
    obj.renderOrder();
    saveTolocalstorge();
}
formcreate.addEventListener('submit', makeorder)

function createTableHeader(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

        for (let i =0; i< header.length; i++){
    
            let thel = document.createElement('th');
            trEl.appendChild(thel);
            thel.textContent = header[i];
        }
    }

    createTableHeader();

 container.prototype.renderOrder = function(){
    let row = document.createElement('tr')
    tableEl.appendChild(row)
    let tdEl1 = document.createElement('td')
    tdEl1.textContent = this.custname;
    row.appendChild(tdEl1)
    let tdEl2 = document.createElement('td')
    tdEl2.textContent = this.age;
    row.appendChild(tdEl2)
    let tdEl3 = document.createElement('td')
    tdEl3.textContent = this.color;
    row.appendChild(tdEl3)
    let tdEl4 = document.createElement('td')
    tdEl4.textContent = this.cat;
    row.appendChild(tdEl4)
    // create img
    let tdEl7 = document.createElement('td');
    let image = document.createElement('img');
    image.setAttribute("style", "width:200px;","hight:150px");
    image.setAttribute('src', this.image);
    tdEl7.appendChild(image);
    row.appendChild(tdEl7);
}

// function display(){
//     for(let i =0 ; i<Arraycontain.length;i++){
//         Arraycontain[i].renderOrder();
//     }
// }

function saveTolocalstorge(){
    let data = JSON.stringify(Arraycontain)
    localStorage.setItem('key',data)
    
}

function readfromlocalstogre(){
 let read = localStorage.getItem('key');
 let normaldata = JSON.parse(read);
//  if(normaldata){
    
// Arraycontain = normaldata;
// renderOrder();
// }
 console.log(normaldata);
 if(normaldata){
    for(let i =0 ; i<normaldata.length;i++){
    new container(normaldata[i].custname,normaldata[i].age,normaldata[i].color,normaldata[i].cat,normaldata[i].image) 
    Arraycontain[i].renderOrder();
   }
   
   }
}
readfromlocalstogre();