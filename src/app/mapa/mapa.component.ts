import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  public marcador: string = "";
  map: any;
  waqiLayer: any;
  waqiLayero3: any;

  constructor() { }

  ngOnInit(): void {
    this.marcador = "Pureza del aire";
    this.map = L.map("map").setView([51.505, -0.09], 11);

    var OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmLayer = L.tileLayer(OSM_URL);


    this.waqiLayer = L.tileLayer(
        "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_",
        { attribution: "Calidad del aire en el mundo" }
    );
    this.map.addLayer(osmLayer).addLayer(this.waqiLayer);

    this.waqiLayero3 = L.tileLayer(
      "https://tiles.waqi.info/tiles/usepa-o3/{z}/{x}/{y}.png?token=_TOKEN_ID_",
      { attribution: "Calidad del aire en el mundo" }
    );

    //this.map.addLayer(osmLayer).addLayer(this.waqiLayero3);
  }

  ngAfterContentInit() {
    var boton = document.getElementById("boton") || new HTMLElement();
    boton.addEventListener("click", () => {
      console.log("Se quitan los layers")
      this.map.removeLayer(this.waqiLayer)
      //this.map.removeLayer(this.waqiLayero3)
    })
  }

}
