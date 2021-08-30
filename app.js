let formcreate = document.getElementById('formId')
let tableEl = document.getElementById('table')

let Arraycontain =[];

let header =['name','age of car','color of car','type car'];
function container(custname,age,color,car){
    this.custname = custname;
    this.age =age;
    this.color= color;
    this.car = car; 
    Arraycontain.push(this)
}


function makeorder(event){
    event.preventDefault();
    let custname = event.target.custname.value;
    let age = event.target.age.value;
    let color = event.target.color.value;
    let car = event.target.car.value; 
   let obj = new container(custname,age,color,car)
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
    tdEl4.textContent = this.car;
    row.appendChild(tdEl4)
}



function saveTolocalstorge(){
    let data = JSON.stringify(Arraycontain)
    localStorage.setItem('key',data)
    
}
function readfromlocalstogre(){
 let read = localStorage.getItem('key');
 let normaldata = JSON.parse(read);
 console.log(normaldata);
 if(normaldata){
 for(let i =0 ; i<normaldata.length;i++){
 new container(normaldata[i].custname,normaldata[i].age,normaldata[i].color,normaldata[i].car) 
 Arraycontain[i].renderOrder();   
}

}
}
readfromlocalstogre();