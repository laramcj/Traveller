const platform = new H.service.Platform({ apikey: 'LxeCNp19DhlHz3ni1jRPvjfjmJYltSV9brYnIL-_8iQ' });
      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(document.getElementById('map'),
         defaultLayers.vector.normal.map, {
         center: { lat: -23.555398515111133, lng: -46.64409790772275 },
         zoom: 13,
         pixelRatio: window.devicePixelRatio || 1
      });
      window.addEventListener('resize', () => map.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      //Begin geocoding
      const searchText = '1070 Lombard Street, San Francisco';
      const geocoder = platform.getGeocodingService();
      geocoder.geocode({ searchText }, result => {
         const location = result.Response.View[0].Result[0].Location.DisplayPosition;
         const { Latitude : lat, Longitude: lng } = location;
         const marker = new H.map.Marker({ lat, lng });
         map.addObject(marker);
      });



// const encuentrame = () => {
//     const sucess = (position) => {
//         const divCoordenadas = document.getElementById("coordenadas");
//         const divMapa = document.getElementById("mapa");
//         console.log(position);
//         const { latitude , longitude } = position.coords;
//         console.log(latitude, longitude);

//         divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;

//         //mapa
//         const mapa = new Image();
//         mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=3QZG7V5kfvYyrEzlndbXXwzGI3h5mPkO&locations=${latitude},${longitude}&size=400,300`;
//         divMapa.appendChild(mapa);
//     };

//     const errorPosicion = (error) => {
//         const divCoordenadas = document.getElementById("coordenadas");
//         divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
//     };
// }