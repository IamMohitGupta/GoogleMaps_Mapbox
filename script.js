mapboxgl.accessToken = 'pk.eyJ1IjoibW9oaXRndXB0YTA2MDQwMiIsImEiOiJjbDF4NjlvczQwNmoxM2RxcWVjd3dpbXIxIn0.VV8qjjjsmzbdDUz7rtaaew';

    navigator.geolocation.getCurrentPosition(sLocation,wLocation,{enableHighAccuracy:true})

    function sLocation(position){
        console.log(position);
        setup([position.coords.longitude,position.coords.latitude]);
    }

    function wLocation(){

    }

    function setup(center){
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center:center,
            // center: [-74.5, 40], // starting position [lng, lat]
            zoom: 8 // starting zoom
            
        });
        const nav = new mapboxgl.NavigationControl({
            visualizePitch: true
        });
        map.addControl(nav, 'bottom-right');
        const directions = new MapboxDirections({
            accessToken:mapboxgl.accessToken,
            unit:'metric'
        })
        map.addControl(directions,'top-left')
    }
    

    