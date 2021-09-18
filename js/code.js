const platform = new H.service.Platform({ apikey: '2Kmt6qzaAJDFb6yfvIm4xBIs2SrqqYX9hf7rppTx_cY' });
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
