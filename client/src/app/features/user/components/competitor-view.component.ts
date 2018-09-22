import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Accomodation} from '../../../core/model/accomodation';
import {CompetitorInfo} from '../model/competitor-info';

declare var ol: any;
declare var OpenLayers: any;

@Component({
  selector: 'ga-competitor-view',
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
        <h1>{{accomodation?.AccoCategoryId}} performance in your area </h1>
      </div>
      <div class="ui-g-12">
        <div id="map" class="map mapcontainer"></div>
        <div id="popup"></div>
      </div>
    </div>
  `,
  styles: [
    '.mapcontainer {width: 100%; height: 100vh}'
  ]
})
export class CompetitorViewComponent implements OnInit, OnChanges {

  map: any;

  @Input()
  accomodation: Accomodation;

  @Input()
  competitors: CompetitorInfo[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.accomodation && this.competitors) {
      this.addHotelMarker();
    }
  }
  
  
  addHotelMarker() {
    const iconFeature2 = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([this.accomodation.Longitude, this.accomodation.Latitude])),
      name: this.accomodation.Shortname
    });

    let iconFeatures = [];
    this.competitors.forEach(comp => {
      const icon = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([comp.longitude, comp.latitude])),
        name: comp.name
      });
      icon.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0, 0],
          src: comp.isBetter ? '/assets/smile.png' : '/assets/frown.png',
        })
      }));
      iconFeatures = iconFeatures.concat(icon);
    });

// specific style for that one point
    iconFeature2.setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0, 0],
        src: '/assets/pin_green.png',
      })
    }));

    const iconLayerSource = new ol.source.Vector({
      features: [iconFeature2, ...iconFeatures]
    });

    const iconLayer = new ol.layer.Vector({
      source: iconLayerSource
    });


    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        iconLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.accomodation.Longitude, this.accomodation.Latitude]),
        zoom: 11
      })
    });

    /*
    const element = document.getElementById('popup');

    const popup = new ol.Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false
    });

    this.map.on('click', function(evt) {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel,
        function(feat, layer) {
          return feat;
        });
      if (feature) {
        var geometry = feature.getGeometry();
        var coord = geometry.getCoordinates();
        popup.setPosition(coord);
        $(element).popover({
          'placement': 'top',
          'html': true,
          'content': feature.get('name')
        });
        $(element).popover('show');
      } else {
        $(element).popover('destroy');
      }
    });
    */

  }


}
