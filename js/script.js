function fetchData() {

    const url = "http://159.223.51.203:81/api/bio";

    fetch(url)
    .then(function(data) {
        console.log(data);
        const nama = data.name;

        console.log(nama);
    })

}

window.onload = function () {
    fetchData();
}