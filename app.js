let tabs = document.querySelectorAll('.tabs li');
let tabsarrays = Array.from(tabs)
let divs = document.querySelectorAll('.content > div')
let divsarray = Array.from(divs)

console.log(tabsarrays)


tabsarrays.forEach((e) => {
    e.addEventListener('click' , function (el) {
        //console.log(e)
        tabsarrays.forEach( (ele) => {
            ele.classList.remove('active')
        })
        el.currentTarget.classList.add('active')
        divsarray.forEach( (divs) => {
            divs.style.display ='none'
        })
        document.querySelector(el.currentTarget.dataset.cont).style.display ='block'
    })

})
