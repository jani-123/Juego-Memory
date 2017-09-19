var click = 0,
    primero;

window.addEventListener('load', main);

function main() {
    // Seleccionar todas las cartas
    var list = document.querySelectorAll('.card-image');
    // Recorrer las cartas
    for (var i = 0; i < list.length; i++) {
        // Click en una carta
        list[i].addEventListener('click', function() {
            // voltear la carta y cambiar la imagen con el valor de atributo alt
            this.setAttribute('src', 'img/'+ this.getAttribute('alt') +'.jpg');
            // Verificar click en el elemto que tenga la clase card-image
            if (this.className == 'card-image') {
                // asignar el valor del atributo alt de la carta
                this.className = this.getAttribute('alt');

                // Verificar el primer o segundo click
                if (click == 1){

                    // Si el valor de la clase del primer card seleccionado es igual al segundo card
                    if (primero.className == this.className) {
                        console.log('genial');
                        // aciertos += 1;
                    } else {
                        // Si no es igual el valor de los card seleccionados vuelven a ser logo.jpg despues de 0.5s
                        setTimeout(function() {
                            primero.className = this.className = "card-image";
                            this.setAttribute('src', 'img/logo.jpg');
                            primero.setAttribute('src', 'img/logo.jpg');
                        }.bind(this), 500);
                    }

                }else{
                    // Asignar a primero el primer card seleccionado
                    primero = this;
                }
                // Agregar mas 1 para seleccionar el segundo card
                click = 1 - click;
            }
        });
    }
}
