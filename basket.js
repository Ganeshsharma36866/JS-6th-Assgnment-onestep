
let selectoption = ["center","power forwardr", "small forward", "point guard", "shooting guard"]
let basketball = [];
let detail = {}
let selectarray=[]
let nameno = /[0-9]/
let namespace = /\s/
let heightvali = /^.{6,16}$/;
let divfirst = document.getElementById("firstvalidation");
let firstname = document.getElementById('Firstname').value;
let lastname = document.getElementById('Lastname').value;
let Height = document.getElementById('Height').value;
let select = document.getElementById("pos").value;
let form = document.getElementById("myform")
let divsubmi = document.getElementById("submi");
let divposition = document.getElementById("divposition");
document.getElementById("firstquarter").disabled=true;

//composite.disabled=true;
//localStorage.clear()
function validation() {
    let nameno = /[0-9]/
    let namespace = /\s/
    let heightvali = /^.{163,305}$/;
    let divfirst = document.getElementById("firstvalidation");
    let firstname = document.getElementById('Firstname').value;
    let lastname = document.getElementById('Lastname').value;
    let Height = document.getElementById('Height').value;
    let select = document.getElementById("pos").value;
    let form = document.getElementById("myform")
    let divsubmi = document.getElementById("submi");
    if (nameno.test(firstname) || namespace.test(firstname) || firstname == " ") {
        divfirst.innerHTML = "Please Write Valid Name";
        return false
    }
    else if (nameno.test(lastname) || namespace.test(lastname) || lastname == "") {
        alert("Please write valid LastName")
        return false
    }
    else if (Height < 163 || Height > 305 || Height == "") {
        alert("height from 163 to 305")
        return false;
    }
    else if (select == "") {
        alert("Please Select Any Position")
        return false;
    }
    else {
        form.reset();
        divsubmi.innerHTML = "datasubmit"
        detail.First = firstname;
        detail.last = lastname;
        detail.Height = Height;
        detail.postion = selectarray
        basketball.push(detail)
        console.log(basketball)
        localStorage.setItem("Detail" ,JSON.stringify(basketball))
        if(basketball.length==4){
          document.getElementById("firstquarter").disabled=false;
        }
        else{
            document.getElementById("firstquarter").disabled=true;
        }
        

    }

}
//let all;
//for(let i=0; i<select.length;i++)
//{
//   all+=select[i]
//}
//console.log(all)
document.getElementById("Select").addEventListener('change', (e) => {
    let select2 = document.getElementById("Select").value;
    let posi=document.getElementById("pos");
    let positionarray=[]
    selectarray.push(select2);
    posi.innerHTML=selectarray

    for (let k = 0; k < selectoption.length; k++) {
        if (!selectoption[k].includes(select2)) {
            positionarray.push(selectoption[k])
        }
    }
    selectoption = positionarray
    console.log(selectarray)  
    onch()
})

onch()
function onch() {
    let select1 = document.getElementById("Select");
    let add = " ";
    add=`<option value="">...</option>`
    for(let i=0;i<selectoption.length;i++){
        add += `<option value="${selectoption[i]}">${selectoption[i]}</option>`
    }
    select1.innerHTML = add;
}