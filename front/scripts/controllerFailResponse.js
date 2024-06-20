const {appendHtmlToDom}=require("./controllerAppend.js")
const {tempData}=require("./tempData.js")

function failResponse(){
    alert("la informacion no se cargo correctamente ,se utilizara informacion falsa")
    appendHtmlToDom(tempData)
}
module.exports= {
    failResponse
}