async function nation(){
    try{
        let name=document.getElementById("n1").value;
       

        var res=await fetch(`https://api.nationalize.io/?name=${name}`)
        var result=await res.json();
       
      
        console.log(result.country[0].country_id,result.country[1].country_id,result.country[0].probability,result.country[1].probability);
        let div=document.createElement("div");
        div.setAttribute("id","cards");
div.className="card";
div.innerHTML=`<table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country Name</th>
            <th scope="col">Probability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${result.name}</td>
            <td>${result.country[0].country_id}</td>
            <td>${result.country[0].probability}</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>${result.name}</td>
          <td>${result.country[1].country_id}</td>
          <td>${result.country[1].probability}</td>
        </tr>
         
        </tbody>
      </table>`
      document.body.append(div);
     
    } catch(error){
        console.log(error)
    }
}

var form = document.createElement('form');
form.setAttribute('id','d1');
form.setAttribute('class','w1');
var label=document.createElement("label")
label.setAttribute("id","label");
label.innerHTML='Search name:';
var br1 = document.createElement('br');


let input=document.createElement("input");
input.setAttribute('type','text');
input.setAttribute('id','n1');
input.setAttribute('placeholder','Name');
var br2 = document.createElement('br');
var br3 = document.createElement('br');


// var button=document.createElement("button");
// button.className="btn btn-primary";
// button.innerHTML="Submit";
// button.addEventListener("click",nation);


form.append(label,br1,input,br2,br3);

var br4= document.createElement('br');
var br5= document.createElement('br');





   

document.body.append(br4,form);
