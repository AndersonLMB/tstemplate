import { Map } from 'ol';
import { MapEvent } from "ol/MapEvent"

export class Application {
    public static Locate(map: Map): void {
        let url: URL = null;
        try {
            var urlString = location.href;
            url = new URL(urlString);
        }
        catch (error) {
        }
        let x: number = 0;
        let y: number = 0;
        try {
            x = parseFloat(url.searchParams.get("x"));
        }
        catch (ex) { }
        try {
            y = parseFloat(url.searchParams.get("y"));
        }
        catch (error) {
        }
        map.getView().setCenter([x, y]);
        map.on("moveend", (e) => {
            console.log(e);
            let center = e.map.getView().getCenter();
            url.searchParams.set("x", center[0].toString());
            url.searchParams.set("y", center[1].toString());
        })
    }
}
