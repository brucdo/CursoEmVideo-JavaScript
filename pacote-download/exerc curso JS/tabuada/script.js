function tabuada(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if(txtnum.value.length==0){
        window.alert('Numero Invalido!')
    }else{
        var num = Number(txtnum.value)
        var c = 1
        tab.innerHTML = ''
        while (c<=10){
            var item = document.createElement('option')
            //
            item.text = `${num} * ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    

}
