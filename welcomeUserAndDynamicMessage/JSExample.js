inp = document.querySelector(".tipCalc");
inpBtn = document.querySelector('#calcBtn');
outp = document.querySelector('.output');

inpBtn.addEventListener("click",showMessage);
    function showMessage(){
        date = new Date();
        let msg = ''
        let dHours = date.getHours();
        if(dHours >= 6 || dHours < 12) {
           msg = "its morning";
            setProp(outp);
            outp.style.backgroundColor = "green";
           
        } else if(dHours >= 12 || dHours < 5){
            msg = "its afternoon";
            setProp(outp);
            outp.style.backgroundColor = "blue";
        } else if(dHours == 12 || dHours < 5){
            msg = "its evening";
            setProp(outp);
            outp.style.backgroundColor = "yellow";
        }
        outp.innerHTML = "<h1>Hello welcome, "+inp.value+ " " + msg +"</h1>";
}

const setProp = (outp) => outp.setAttribute("style","color:red;width:200px");