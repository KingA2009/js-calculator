let h1 = document.querySelector(".h1");
let btn = document.querySelector(".btn");
var e = document.getElementById("simbl");

function onChange() {
    var value = e.value;
    btn.onclick = () => {
        let inp = document.querySelector(".inp").value;
        let inp1 = document.querySelector(".inp1").value;
        switch (value) {
            case "+":
                h1.innerHTML = Number(inp) + Number(inp1);
                break;
            case "-":
                h1.innerHTML = Number(inp) - Number(inp1);
                break;
            case "*":
                h1.innerHTML = Number(inp) * Number(inp1);
                break;
            case "/":
                h1.innerHTML = Number(inp) / Number(inp1);
                break;
            default:
                console.log("ERROR!!!")
        }
    }
}
e.onchange = onChange;
onChange();