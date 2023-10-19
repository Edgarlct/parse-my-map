import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import L from "leaflet";
import { parseFile } from './tools/parser/parser';
import {getPolyline} from "./tools/leafletPrepare/getPolyline";
@customElement('parse-my-map')
export class ParseMyMap extends LitElement {

    @property({ type: String }) path: string = '';
    @property({ type: String }) type: 'csv' | 'txt' | 'gpx' = 'csv';
    @property({ type: Number }) height: number = 400;
    @property({ type: Number }) width: number = 600;

    static styles = css`
        :host {
            display: block;
        }
        #map-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          width: var(--map-width, 600px);
          height: var(--map-height, 400px);
        }
        #map {
            width: 100%;
            height: 100%;
        }
        #dl-button {
            border: none;
            width: fit-content;
            text-transform: uppercase;
            background: #17161A;
            border-radius: 99px;
            padding: 15px 25px;
            color: white;
            cursor: pointer;
            transition: all 1s;
            font-size: 14px;
        }
        #dl-button:hover {
            opacity: 0.8;
        }
    `;

    @property({ type: Object})
    center = { lat: 51.505, lng: -0.09 };
    @property({ type: Number})
    zoom = 13;

    private map?: L.Map;

    firstUpdated() {
        this.map = L.map(this.shadowRoot!.getElementById('map')!).setView([this.center.lat, this.center.lng], this.zoom);

        L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        if(this.path) {
            parseFile(this.type, this.path)
              .then((data) => {
                  getPolyline(data, this.map!)
              });
        }
    }

    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties);
        if (changedProperties.has('width') || changedProperties.has('height')) {
            this.style.setProperty('--map-width', `${this.width}px`);
            this.style.setProperty('--map-height', `${this.height}px`);
        }
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            <div id="map-preview">
                <div id="map"></div>
                <button id="dl-button" @click="${this.download}">Download my path</button>
            </div>
        `;
    }

    download() {
        if(this.path) {
            window.open(this.path);
        }
    }
}
