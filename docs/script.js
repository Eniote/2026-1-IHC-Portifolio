let ids = 6


function hideAll()
{
    for (let i = 1; i<(ids+1); i++){
        document.getElementById("A" + i).hidden = true
    }
}

function A1()
{
    hideAll()
    document.getElementById("A1").hidden = false
}

function A2()
{
    hideAll()
    document.getElementById("A2").hidden = false
}

function A3()
{
    hideAll()
    document.getElementById("A3").hidden = false
}

function A4()
{
    hideAll()
    document.getElementById("A4").hidden = false
}

function A5()
{
    hideAll()
    document.getElementById("A5").hidden = false
}

function A6()
{
    hideAll()
    document.getElementById("A6").hidden = false
}
/*
function reveal(A)
{
    hideAll()
    console.log(A)
    document.getElementById(A).hidden = false
}
*/