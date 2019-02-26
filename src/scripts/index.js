import '../styles/index.scss';
import  ClipboardJS  from 'clipboard';



const res = document.querySelector('#res')

const snip = (x) => {
    x.map((snippet, i)=>{
        res.innerHTML += `<div class="snippet">
            <div class="snip_name">${snippet.name}</div>
            
            <div class="snip_content" id="snip_${i}"><div class="secret"></div>${snippet.content}</div>
            
            <div class="snip_controls">
                <button class="btn show">show</button>    
                <button class="btn copy" data-clipboard-target="#snip_${i}">copy</button>
            </div>
        </div>`
    })

    const clipboard = new ClipboardJS('.copy');

    const allSnippets = document.querySelectorAll('.snippet')
    allSnippets.forEach(x => {
        const show = x.querySelector('.show')
        const copy = x.querySelector('.copy')
        const snipdata = x.querySelector('.snip_content').textContent
        show.addEventListener('click', ()=>{
            show.classList.toggle("toggleShow");
            if(show.classList.contains('toggleShow')){
                show.innerHTML = 'hide'
                x.querySelector('.secret').classList.add('hidesecret')
            }else{
                x.querySelector('.secret').classList.remove('hidesecret')
                show.innerHTML = 'show'
            }
        })
        copy.addEventListener('click', ()=>{
            copy.innerHTML = 'copied!'
            copy.classList.add('copied')
            setTimeout(()=>{
             copy.innerHTML = 'copy'
             copy.classList.remove('copied')
            },700)
        })
    })
}

const auth = (pass) => {
    fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pass: pass
            })
        })
        .then(response => response.json())
        .then(data => {
            
            if(data.data != 'EMPTY'){
                res.innerHTML = ''
                snip(data.data)
            }else{
                res.innerHTML = 'WRONG PASS'
            }
        })
}

const inp = document.querySelector('#pass')
const authBtn = document.querySelector('#auth')

authBtn.addEventListener('click', () => {
    auth(inp.value)
})















