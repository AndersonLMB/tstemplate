import { Map, View } from 'ol';
export class MapSync {
    public static Combine(maps: Array<Map>): void {
        let syncListen = (evt) => {
            let currentMap = evt.map;
            maps.forEach((otherMap, otherMapIndex) => {
                if (otherMap === evt.map) {

                }
                else {
                    let element = otherMap.getTargetElement();
                    let pixelOfThisMapCenterX = element.offsetLeft + element.offsetWidth / 2;
                    let pixelOfThisMapCenterY = element.offsetTop + element.offsetHeight / 2;
                    let centerCoordinates = currentMap.getCoordinateFromPixel([pixelOfThisMapCenterX, pixelOfThisMapCenterY]);
                    otherMap.getView().setCenter(centerCoordinates);
                    otherMap.getView().setZoom(currentMap.getView().getZoom())
                }

            })
        };
        maps.forEach((map, mapIndex) => {

            if (mapIndex === 0) {
                map.on("moveend", syncListen);
                map.on("movestart", syncListen);
            }
        });
    }

    public static CombineViews(views: Array<View>): void {

        views[0].on("change", (evt) => {
            
        })

    }
}