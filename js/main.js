function filter(filterType){
    let btns = document.getElementsByClassName('filter-button');
    for (let btn of btns) {
        btn.classList.remove('selected');
        if(btn.id === filterType){
            btn.classList.add('selected');
        }
    }

    let table = document.getElementsByTagName('tr');

    for(let row of table){
        if(row.className === ''){
            continue;
        }

        delete row.removeAttribute('hidden');

        if(row.className !== filterType && filterType !== 'viss'){
            row.setAttribute('hidden','hidden');
        }
    }
}