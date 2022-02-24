const array =[];

window.onload = function () {
    document.querySelector('div').innerHTML = array;
    document.querySelector('button[type="submit"]').onclick = function(e){
        e.preventDefault();
        if(document.querySelector('input[type="text"]') && document.querySelector('input[type="text"').value){
            array.push(document.querySelector('input[type="text"]').value);
            let parced = array.map(function (x) { 
                return `<span>`+x+`</span>`; 
            }).join('');
            document.querySelector('input[type="text"]').value = "";
            document.querySelector('div').innerHTML = parced;
        }
    };

    document.querySelector('a').onclick = function(e){
        e.preventDefault();
        let random = Math.floor(Math.random() * array.length);
        document.querySelector('p span').innerHTML = array[random];
    };

}