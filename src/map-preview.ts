import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('leaflet-map')
export class LeafletMap extends LitElement {

    @property({ type: String }) path: string = '';
    @property({ type: String }) type: 'GPX' | 'GTFS' = 'GPX';
    @property({ type: Number }) height: number = 400;
    @property({ type: Number }) width: number = 600;

    static styles = css`
        :host {
            display: block;
        }
        #map {
            background: red;
            width: var(--map-width, 600px);
            height: var(--map-height, 400px);
        }
    `;

    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties);
        if (changedProperties.has('width') || changedProperties.has('height')) {
            this.style.setProperty('--map-width', `${this.width}px`);
            this.style.setProperty('--map-height', `${this.height}px`);
        }
    }

    render() {
        return html`
            <div id="map"></div>
            <button @click="${this.download}">Download ${this.type} from ${this.path}</button>
        `;
    }

    download() {
        if(this.path) {
            window.open(this.path);
        }
    }
}
