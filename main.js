let array = [
    
    {
    lastname:"Kocsis",
    firstname1:"Géza",
    firstname2:"Ferenc",
    married:"igen",
    pet:"kutyus"
},

{
    lastname:"Horváth",
    firstname1:"Mária",
    firstname2:"Julia",
    married:"nem",
    pet:"teknőc"
},
{
    lastname:"Balogh",
    firstname1:"Ferenc",
    married:"igen",
    pet:"cicus"
},
{
    lastname:"Horváth",
    firstname1:"Gábor",
    firstname2:"Attila",
    married:"nem",
    pet:"kutyus"
}
]


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th_firstname1 = document.createElement('th');
const th_lastname = document.createElement('th');
const th_married = document.createElement('th');
const th_pet = document.createElement('th');

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th_lastname)
tr.appendChild(th_firstname1)
tr.appendChild(th_married)
tr.appendChild(th_pet)


th_lastname.innerHTML = "Vezetéknév";
th_firstname1.innerHTML = "Keresztnév";
th_married.innerHTML = "Házas";
th_pet.innerHTML = "Állat";
th_firstname1.colSpan = 2;
table.appendChild(tbody)
const form = document.getElementById('form')

    form.addEventListener('submit', function(e){

        const firstname1 = document.getElementById('firstname1');
        let firstname2 = document.getElementById('firstname2');
        const lastname = document.getElementById('lastname');
        const married = document.getElementById('married')
        const pet = document.getElementById('pet')

        const lastnamevalue = lastname.value
        e.preventDefault();
        const firtsname1value = firstname1.value
        let firstname2value =  firstname2.value
        const marriedvalue = married.checked ? "igen" : "nem";
        const petvalue = pet.value

        const adatok = 
            {
                firstname1 : firtsname1value,
                firstname2: firstname2value,
                lastname : lastnamevalue,
                married : marriedvalue,
                pet : petvalue

            }
        
        
        array.push(adatok)
        rendertable(array)
        form.reset()
        
    })

rendertable(array)


function rendertable(array){
    tbody.innerHTML = ""
    
    for(let pers of array)
    {   
        const trbody = document.createElement('tr')
        tbody.appendChild(trbody)

        const td_lastname = document.createElement('td')
        td_lastname.innerHTML = pers.lastname
        trbody.appendChild(td_lastname)
        

        

        const td_firstname1= document.createElement('td')
        td_firstname1.innerHTML = pers.firstname1
        
        trbody.appendChild(td_firstname1)

        if(pers.firstname2 == undefined)
            {
                td_firstname1.colSpan = 2
            }
            else
            {
                const td_firstname2 = document.createElement('td')
                td_firstname2.innerHTML = pers.firstname2
                trbody.appendChild(td_firstname2)
            }

        const td_married = document.createElement('td')
        td_married.innerHTML=pers.married
        trbody.appendChild(td_married)
        
        const td_pet = document.createElement('td')
        td_pet.innerHTML = pers.pet
        trbody.appendChild(td_pet)

    }
    
    
}


