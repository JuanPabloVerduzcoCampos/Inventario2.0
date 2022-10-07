class Inventario {
    constructor(){
        this.inventario = [];
    }

    agregar(producto){
            this.inventario.push(producto);

            if (this.inventario> 1){
            for (let i = 0; i < this.inventario.length - 1; i++){

                for(let j = 0; j < this.inventario.length - i -1; j++){
                    if(this.inventario.codigo[j] > this.inventario.codigo[j+1]){
                        [this.inventario[j], this.inventario[j+1]] = [this.inventario[j+1], this.inventario[j]];
                    }
                }

            }
        }
    }

    eliminar(codigo){
        let x = 0;
        for(let i = 0; i < this.inventario.length;i++){
            if(codigo===this.inventario[i].codigo){
                for( let j=i;j<this.inventario.length-1;j++){
                    this.inventario[j]=this.inventario[j+1];
                }
                this.inventario.pop()
                x=1;

                }else if(i>this.inventario.length){
                    x=1;
                }
               i++;
        }
    }

    modificar(codigo,codigoN){
        for(let i = 0; i < this.inventario.length;i++){
            if(codigo === this.inventario[i]){
                this.inventario[i] = codigoN;
            }
        }
    }

    buscar(codigo){
        let start = 0;
        let end = this.inventario.length -1;
        let mid = Math.floor(start + end)/2;

        if(this.inventario[mid === codigo]){
            return mid;
        }else{
            while(this.inventario !== codigo){
                if(codigo < this.inventario[mid]){
                    end = mid -1;
                }else{
                    start = mid + 1;
                }
                mid = Math.floor(start + end)/2;
            }
        }
        return this.inventario[mid];
    }

    inv(){
        return(this.inventario);
    }

    listadoInverso(){
        let vi=[];
        for(let i=0; i<this.inventario.length; i++){
            vi[i]=this.inventario[this.inventario.length-1-i];
        }
        return(vi);
    }

}

class Listado {
    constructor(codigo, producto,cantidad,costo){
        this.codigo = codigo;
        this.nombre = producto;
        this.cantidad = cantidad;
        this.costo = costo;
    }

}





let lista = new Inventario ();

function addProducto(){
        
    let producto = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    
    if(producto == ""){
        alert("El nombre es obligatorio para agregar un producto");
        document.getElementById("nombre").focus();

    }else if(codigo == ""){
        alert("El codigo es obligatorio para agregar un producto")
        document.getElementById("codigo").focus();
    }else if (cantidad == ""){
        alert("La cantidad es obligatoria para agregar un producto");
        document.getElementById("cantidad").focus();
    }else if( costo == ""){
        alert("El costo es obligatorio para agregar un producto");
        document.getElementById("costo").focus();
    }

    let articulo = new Listado (producto, codigo, cantidad, costo);
    lista.agregar(articulo);
    console.log(lista);
    document.getElementById("nombre").value="";
    document.getElementById("codigo").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("costo").value="";

}

function eliminarX(){
    let cod = document.getElementById("eliminar").value;
    lista.eliminar(cod);

}

function modificar(){
    let codigo = document.getElementById("codigo");
    let codigoN = document.getElementById("codgo1");
    for(let i = 0; i < lista.length; i++){
        if(codigo === lista[i]){
            lista[i]= codigoN;
        }
    }
}

function buscarX(){
    let x = lista.buscar();
    let tablaproducto = document.getElementById("busc");
    let cuerpotabla = document.createElement("tbody"); 

    x.forEach(c => {
    let f = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = c.codigo;
    f.appendChild(td);

    td = document.createElement("td");
    td.innerText = c.nombre;
    f.appendChild(td);

    td = document.createElement("td");
    td.innerText = c.cantidad;
    f.appendChild(td);

    td = document.createElement("td");
    td.innerText = c.costo;
    f.appendChild(td);

    cuerpotabla.appendChild(f);
});

tablaproducto.appendChild(cuerpotabla);
}




function listar(){
    let x = lista.inv();
    let tablaproducto = document.getElementById("productos");
    let cuerpotabla = document.createElement("tbody"); 
    x.forEach(a => {
    let f = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = a.codigo;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = a.nombre;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = a.cantidad;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = a.costo;
    f.appendChild(td);
    cuerpotabla.appendChild(f);
});

tablaproducto.appendChild(cuerpotabla);
}

function listarInvert(){
    let x = lista.listadoInverso();
    let tablaproducto = document.getElementById("prod");
    let cuerpotabla = document.createElement("tbody"); 
    x.forEach(p => {
    let f = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = p.codigo;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = p.nombre;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = p.cantidad;
    f.appendChild(td);
    td = document.createElement("td");
    td.innerText = p.costo;
    f.appendChild(td);
    cuerpotabla.appendChild(f);
});

tablaproducto.appendChild(cuerpotabla);
}
