import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Application } from './Application';
import { MapSync } from "./MapSync";
import XYZ from 'ol/source/XYZ';
let maps: Array<Map>;


let mapsContainer: HTMLDivElement = document.createElement("div");
mapsContainer.classList.add("app-map-2");

let map0Container: HTMLDivElement = document.createElement('div');
map0Container.classList.add("map0");
map0Container.classList.add("map");

let map1Container: HTMLDivElement = document.createElement('div');
map1Container.classList.add("map1");
map1Container.classList.add("map");
document.body.appendChild(mapsContainer);

mapsContainer.appendChild(map0Container);
mapsContainer.appendChild(map1Container);

let view: View = new View({
    center: [0, 0],
    zoom: 2
})


let map0 = new Map({
    target: map0Container,
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: view
});


let map1 = new Map({
    target: map1Container,
    layers: [
        new TileLayer({
            source: new XYZ({
                url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            })
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});

MapSync.Combine([map0, map1]);




window["map1"] = map1;
window["map0"] = map0;


// Application.Locate(map);




