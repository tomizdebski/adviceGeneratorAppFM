
const url = "https://api.adviceslip.com/advice/"

const randomAdvice = () =>{
    return Math.floor(Math.random()*(200-0+1)+0)
}

const giveAdvice = (url) => {
    const adviceNr = document.querySelector(".container__nr-advice");
    const adviceText = document.querySelector(".container__p--first");
    const button = document.querySelector(".container__button");

    button.addEventListener('click', () => {
        fetch(url + `${randomAdvice()}`)
        .then(request => request.json())
        .then(res => res.slip)
        .then(resp => {
            console.log(resp);
            adviceNr.innerText = `Advice # ${resp.id}`;
            adviceText.innerText = `${resp.advice}`;
        })

    })


        

}

giveAdvice(url);
