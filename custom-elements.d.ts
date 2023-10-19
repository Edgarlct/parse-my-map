declare namespace JSX {
  interface IntrinsicElements {
    'parse-my-map': {
      type?: 'csv' | 'txt' | 'gpx';
      path?: string;
      height?: number;
      width?: number;
    };
  }
}
