function fetchData() {

    const url = "http://159.223.51.203:81/api/bio";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var response = xhr.response;
        console.log(response);

        const nama1 = response[0].name;
        const id1 = response[0].id;

        const nama2 = response[1].name;
        const id2 = response[2].id;

        const nama3 = response[3].name;
        const id3 = response[3].id;

        const nama4 = response[4].name;
        const id4 = response[4].id;

        const nama5 = response[5].name;
        const id5 = response[5].id;

        const nama6 = response[6].name;
        const id6 = response[6].id;

        const nama7 = response[7].name;
        const id7 = response[7].id;

        const nama8 = response[8].name;
        const id8 = response[8].id;

        const nama9 = response[9].name;
        const id9 = response[9].id;

        const nama10 = response[10].name;
        const id10 = response[10].id;

        const nama11 = response[11].name;
        const id11 = response[11].id;
        
        console.log(id1);
    }

    xhr.send();
}

window.onload = function () {
    fetchData();
}