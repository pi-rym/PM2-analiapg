const {jsToHTML}=require("./controlllerJsToHTML.js")

function appendHtmlToDom(info){
    const arrayHmlCards=info.map(jsToHTML)
    arrayHmlCards.forEach((htmlCard)=>cardsContainer.appendChild(htmlCard) 
        );
}
module.exports={
    appendHtmlToDom
}