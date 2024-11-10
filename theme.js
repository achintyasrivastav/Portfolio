
let defaultTheme = true;

document.querySelector('.theme').addEventListener('click', ()=>{

    if(defaultTheme){
        //default ko change karna hai
        //yani black -> white

        document.body.style.backgroundColor = 'white';

        document.querySelector('#intro-section').style.backgroundColor = 'white';

        document.querySelector('.wrapper').style.backgroundColor = 'ghostwhite';

        document.querySelector('#header').style.borderBottom = 'black';

        document.querySelector('.header-wrap').style.borderBottom = 'black';

        document.querySelector('.face-box').style.borderColor = 'black';

        document.querySelector('.intro-details').style.backgroundColor = 'black';

        document.querySelector('.banner').style.borderColor = 'black';

        document.querySelector('.connect').style.backgroundColor = 'white';

        document.querySelector('.connect').style.color = 'black';

        document.querySelector('.intro-inside h1').style.color = 'ghostwhite';

        document.querySelector('.intro-inside .intro-text').style.color = 'ghostwhite';

        document.querySelector('#main-grid').style.backgroundColor = 'white';

        document.querySelector('#side-main').style.backgroundColor = 'black';

        document.querySelector('.projects').style.backgroundColor = 'white';

        document.querySelector('.main-content').style.backgroundColor = 'white';

        document.querySelector('.projects').style.backgroundColor = 'black';

        document.querySelector('.wrapper').style.border = '1px solid black';

        defaultTheme = false;
      
    }
    else{

        document.body.style.backgroundColor = 'black';

        document.querySelector('#intro-section').style.backgroundColor = 'black';

        document.querySelector('.wrapper').style.backgroundColor = 'black';

        document.querySelector('.connect').style.backgroundColor = 'black';

        document.querySelector('.intro-inside h1').style.color = 'black';

        document.querySelector('.intro-inside .intro-text').style.color = 'black';

        document.querySelector('#main-grid').style.backgroundColor = 'black';

        document.querySelector('.projects').style.backgroundColor = 'black';

        document.querySelector('.main-content').style.backgroundColor = 'black';

        document.querySelector('#header').style.borderBottom = '1px solid whitesmoke';

        document.querySelector('.face-box').style.border = '4px solid whitesmoke';

        document.querySelector('.intro-details').style.backgroundColor = 'ghostwhite';

        document.querySelector('.banner').style.borderColor = 'ghostwhite';

        document.querySelector('.connect').style.color = 'ghostwhite';

        document.querySelector('.wrapper').style.border = '1px solid black';
        
        defaultTheme = true;
    }
});