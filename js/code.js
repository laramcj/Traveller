const encuentrame = () => {
    const sucess = (position) => {
        const divCoordenadas = document.getElementById("coordenadas");
        const divMapa = document.getElementById("mapa");
        console.log(position);
        const { latitude , longitude } = position.coords;
        console.log(latitude, longitude);

        divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;

        //mapa
        const mapa = new Image();
        mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=3QZG7V5kfvYyrEzlndbXXwzGI3h5mPkO&locations=${latitude},${longitude}&size=400,300`;
        divMapa.appendChild(mapa);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };
}