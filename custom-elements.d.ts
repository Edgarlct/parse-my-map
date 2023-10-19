declare namespace JSX {
  interface IntrinsicElements {
    'leaflet-map': {
      type?: 'csv' | 'txt' | 'gpx';
      path?: string;
      height?: number;
      width?: number;
    };
  }
}
