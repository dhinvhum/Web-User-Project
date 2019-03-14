

$(document).ready(async () => {
    let data = await $.getJSON("./data.json");
    let selectData = randomSelectData(data)
    showDisplayData(selectData, $);
})


function randomSelectData(data) {
    let randomIndex = ( Math.random() * data.length * 10 ) % data.length;
    randomIndex = Math.floor(randomIndex);
    console.log("randomIndex", randomIndex)
    return data[randomIndex];
}

function showDisplayData(data, $) {
    $('#pic-card').append(`<img class="picture-img" src=${data.pathPic} alt="">`);
    $('#des').append(`<p1>${data.text}</p1>`);
}

