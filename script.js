let mark = "x"

const dafa = {
    mainArr: [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
}

function checkWin(e) {
    if (e == `["${mark}","${mark}","${mark}"]`) {
        alert("game won")
    } else if (dafa.mainArr[0][0] == `${mark}` && dafa.mainArr[1][1] == `${mark}` && dafa.mainArr[2][2] == `${mark}`) {
        alert("game won")
    } else if (dafa.mainArr[0][2] == `${mark}` && dafa.mainArr[1][1] == `${mark}` && dafa.mainArr[2][0] == `${mark}`) {
        alert("game won")
    } else if (dafa.mainArr[0][0] == `${mark}` && dafa.mainArr[1][0] == `${mark}` && dafa.mainArr[2][0] == `${mark}`) {
        alert("game won")
    } else if (dafa.mainArr[0][1] == `${mark}` && dafa.mainArr[1][1] == `${mark}` && dafa.mainArr[2][1] == `${mark}`) {
        alert("game won")
    } else if (dafa.mainArr[0][2] == `${mark}` && dafa.mainArr[1][2] == `${mark}` && dafa.mainArr[2][2] == `${mark}`) {
        alert("game won")
    }else{
        if (mark == "x") {
            mark = "o"
        } else {
            mark = "x"
        }
        getMove()
    }
}

function changeDafa(move) {
    let c = 0;
    for (let i = 0; i < dafa.mainArr.length; i++) {
        for (let ii = 0; ii < dafa.mainArr[i].length; ii++) {
            if (dafa.mainArr[i][ii] === move) {
                dafa.mainArr[i][ii] = mark;
                c = 1
                checkWin(JSON.stringify(dafa.mainArr[i]))
            }
        }
    }
    if (c != 1) {
        alert("that place is tacken choose other one")
        getMove()
    }
}

function getMove() {
    let arr = dafa.mainArr
    let move = ""
    while (move != "a" && move != "b" && move != "c" && move != "d" && move != "e" && move != "f" && move != "g" && move != "h" && move != "i") {
        move = prompt(
            `airchiet ujra
        ${arr[0][0]} | ${arr[0][1]} | ${arr[0][2]}
        -------------
        ${arr[1][0]} | ${arr[1][1]} | ${arr[1][2]}
        -------------
        ${arr[2][0]} | ${arr[2][1]} | ${arr[2][2]}
        `)
    }
    changeDafa(move)
}



function startPlay() {
    getMove()
}

startPlay()


// function checkWin() {
//     if (JSON.stringify(dafa.mainArr[0]) == JSON.stringify(dafa.win_x)) {
//         // console.log()
//         alert("morcha tamashi wadit saxlshi")
//     }
//     if ((dafa.mainArr[0][0] == dafa.mainArr[1][1] && dafa.mainArr[0][0] == dafa.mainArr[2][2]) || (dafa.mainArr[0][2] == dafa.mainArr[1][1] && dafa.mainArr[0][2] == dafa.mainArr[2][0])) {
//         console.log("morcha tamashi wadit saxlshi")
//     }
// }