const paragraph = document.getElementsByTagName('p');


// Soal Button Satu
const buttonSatu = document.getElementById('buttonSatu');
buttonSatu.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.backgroundColor = '#F5DEB3' ;
    }
});

// Soal Button Dua
const buttonDua = document.getElementById('buttonDua');
    buttonDua.addEventListener('click',function(){
    buttonDua.style.backgroundColor = '#F4A460';
    buttonDua.style.color = '#ffffff';
});

// Soal Button Tiga
const buttonTiga = document.getElementById('buttonTiga');
buttonTiga.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.fontFamily = "Times";
        paragraph[i].style.color = '#FA8072';
    }
});

// Soal Button Empat 
const buttonEmpat = document.getElementById('buttonEmpat');
buttonEmpat.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.fontSize = '25px';
    }
});

// Soal Button Lima
const buttonLima = document.getElementById('buttonLima');
buttonLima.addEventListener('click',function(){
    const wrapper = document.getElementById('container');
    wrapper.style.backgroundColor = '#708090';
});

//Soal Button Enam 

const ButtonEnam = document.getElementById('buttonEnam');
ButtonEnam.addEventListener('click', function(){ 
    const sectionA = document.getElementById('a');
    const p1 = sectionA.querySelector('.p1');
    const h2 = document.createElement('h2');
    const H2baru = document.createTextNode('selamat datang di dojobox.id');
    h2.appendChild(H2baru);
    sectionA.replaceChild(h2, p1);
});


// Soal Button Tujuh 
const buttonTujuh = document.getElementById('buttonTujuh')

buttonTujuh.addEventListener('click',function(){
    const elemenDihapus = document.querySelector('#b li')
    elemenDihapus.removeChild(elemenDihapus.childNodes[0]);
    const newLi = document.createElement('li')
    const isiNewLi = document.createTextNode('Next Mentor Siapa Nih? ')
    const ul = document.querySelector('#b ul')
    newLi.appendChild(isiNewLi)
    ul.appendChild(newLi);
    
    
})

buttonTujuh.addEventListener('dblclick', function(){
    const elemenDihapus = document.querySelector('#b li')
    elemenDihapus.removeChild(elemenDihapus.childNodes[0]);
}) 


// Soal Button Delapan
const buttonDelapan = document.getElementById('buttonDelapan')
buttonDelapan.addEventListener('click', function(){

    const elementDiubah = document.getElementById('judul')  ; 
    elementDiubah.innerHTML= 'Post-Test';
})

// Soal Button Sembilan 
const buttonSembilan = document.getElementById('buttonSembilan')
buttonSembilan.addEventListener('click', function(){

    const elemen = document.querySelector('a')
    elemen.parentNode.removeChild(elemen)

});


// Soal Button Sepuluh 
const button10 = document.getElementById('buttonSepuluh');

button10.addEventListener('click',function(){
    
    const a = document.createElement('a');
    const letak = document.getElementById('c')
    const linkText = document.createTextNode("Github vio putri");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = "https://github.com/vioputriy/";
    letak.appendChild(a);
    
})

