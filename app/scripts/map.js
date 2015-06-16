(function($) {
    "use strict";

    $(document).ready(function() {

        $("#map").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng"),
                style = [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]

            lem.css({
                height: 450
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        styles: style,
                        panControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        scrollwheel: false,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/icon-map.png"
                    }
                }
            })
        });

        $("#map1").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                height: 350
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        panControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        scrollwheel: false,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/icon-map.png"
                    }
                }
            })
        });

        $("#map2").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                height: 350
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/icon-map.png"
                    }
                }
            })
        });

        $("#map3").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map4").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 12,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map5").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 15,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map6").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map7").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng"),
                style = [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ebebeb"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#313131"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#fafafa"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 45
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#e8cfc7"
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#f39b81"
                    }, {
                        "saturation": "0"
                    }, {
                        "gamma": "1"
                    }, {
                        "lightness": "5"
                    }, {
                        "weight": "1"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#313131"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#d7d7d7"
                    }]
                }]

            lem.gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        styles: style,
                        panControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        scrollwheel: false,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/marker.png"
                    }
                }
            })
            $('#map7').height(function(index, height) {
                return $('#contact-us').outerHeight(true)
            });
        });


    });
}($));
