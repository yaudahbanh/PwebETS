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
        const id2 = response[1].id;

        const kurang2 = response[2].name;
        const idkurang2 = response[2].id;

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
        
        console.log(id1); // debugging

        const namasatu = document.getElementById("namapertama");
        namasatu.innerHTML = nama1;
        const idsatu = document.getElementById("idpertama");
        idsatu.innerHTML = id1;

        const namadua = document.getElementById("namakedua");
        namadua.innerHTML = nama2;
        const iddua = document.getElementById("idkedua");
        iddua.innerHTML = id2;

        const namatiga = document.getElementById("namaketiga");
        namatiga.innerHTML = nama3;
        const idtiga = document.getElementById("idketiga");
        idtiga.innerHTML = id3;

        const namaempat = document.getElementById("namakeempat");
        namaempat.innerHTML = nama4;
        const idempat = document.getElementById("idkeempat");
        idempat.innerHTML = id4;

        const namalima = document.getElementById("namakelima");
        namalima.innerHTML = nama5;
        const idlima = document.getElementById("idkelima");
        idlima.innerHTML = id5;

        const namaenam = document.getElementById("namakeenam");
        namaenam.innerHTML = nama6;
        const idenam = document.getElementById("idkeenam");
        idenam.innerHTML = id6;

        const namatujuh = document.getElementById("namaketujuh");
        namatujuh.innerHTML = nama7;
        const idtujuh = document.getElementById("idketujuh");
        idtujuh.innerHTML = id7;

        const namadelapan = document.getElementById("namakedelapan");
        namadelapan.innerHTML = nama8;
        const iddelapan = document.getElementById("idkedelapan");
        iddelapan.innerHTML = id8;

        const namasembilan = document.getElementById("namakesembilan");
        namasembilan.innerHTML = nama9;
        const idsembilan = document.getElementById("idkesembilan");
        idsembilan.innerHTML = id9;

        const namasepuluh = document.getElementById("namakesepuluh");
        namasepuluh.innerHTML = nama10;
        const idsepuluh = document.getElementById("idkesepuluh");
        idsepuluh.innerHTML = id10;

        const namasebelas = document.getElementById("namakesebelas");
        namasebelas.innerHTML = kurang2;
        const idsebelas = document.getElementById("idkesebelas");
        idsebelas.innerHTML = idkurang2;
    }

    xhr.send();
}

window.onload = function () {
    fetchData();
}