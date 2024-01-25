function demo() {
    let c = 0;
    let arrcode = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (i = 0; i < 6; i++) {
        let res = Math.floor(Math.random() * 22)
        c += arrcode[res];
    }
    // console.log(c.slice(1))
    document.getElementById("inp1").value = c.slice(1)
}

function demo1() 
{
    let inp1 = document.getElementById("inp1").value
    // console.log(inp1)

    let inp2 = document.getElementById("inp2").value
    // console.log(inp2)

    if(inp1==inp2)
    {
        open('https://www.facebook.com/')
    }
    else
    {
        document.getElementById("abc").innerHTML="Invalid"
    }
}