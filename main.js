const foot = [
    {Numbers:3, some: "burger"},
    { title: "Метросити", text: "МетроситИ" },
    {Number:1, something: "idk"}
];

foot.forEach(item => {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    
    h2.textContent = item.title;
    p.textContent = item.text;
    
    document.body.appendChild(h2);
    document.body.appendChild(p);
});

// 2) Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl
    const element = document.getElementById("change");

    element.addEventListener('click', function(event) {
        if (event.ctrlKey) {
            element.style.cssText="color:red";
        }
    });

// 3) Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'
    const elements = document.getElementById("num");

    elements.addEventListener('click', function(event) {
        if (event.ctrlKey) {
            elements.innerText="1";
        } else if (event.altKey) {
            elements.innerText="2";
        }
        if (event.shiftKey) {
            elements.innerText="3";
        }
    });

// 4)  Даны абзацы с числами. То есть, несколько подобных элементов <p>1</p>. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
    const dame = document.getElementsByTagName("p");
        for (let i = 0; i < dame.length; i++) {
            dame[i].addEventListener("click", showSquare);
        }

        function showSquare(event) {
            let num = event.target;
            let number = Number(num.innerHTML);
            let square = number * number;
            num.innerHTML = square;
        }   


    // 5) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку в console.log выводился ее src. 
    const imag = document.getElementsByTagName('img');


    for (let i = 0; i < imag.length; i++) {
   
      imag[i].addEventListener('click', function(event) {
      
        console.log(event.target.src);
      });
    }
    

// 6) Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
const links = document.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('mouseover', function() {
        const href = link.getAttribute('href');
        
        link.textContent = `(${href})`;
      });
    });