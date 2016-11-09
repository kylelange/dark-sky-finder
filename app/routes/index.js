import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },
  setupController: function(controller) {
    controller.setProperties({
      lat: 48,
      lng: -122,
      zoom: 6,
      overlays: Ember.A([
        // {
        //   id: 'tile-test',         // Recommended
        //   lat: 34,  // Required
        //   lng: -126,        // Required
        //   content: '<img class="na-tile" src="/images/North-America.png">',
        //   layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
        //   verticalAlign: 'middle',      // middle | bottom
        //   horizontalAlign: 'right', // left | right
        //   horizontalOffset: 0,      // in pixels
        //   verticalOffset: 0,        // in pixels
        // }
        {
          id: 'tile-test',         // Recommended
          lat: 55.77,  // Required
          lng: -135,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_2_5.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 40.97,  // Required
          lng: -135,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_2_6.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 40.97,  // Required
          lng: -112.5,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_3_6.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 55.77,  // Required
          lng: -112.5,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_3_5.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 66.505,  // Required
          lng: -90,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_4_4.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 55.77,  // Required
          lng: -90,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_4_5.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 40.97,  // Required
          lng: -90,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_4_6.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
      ])
    });
  },
  actions: {
    getWeather(params) {
      this.transitionTo('results', params.city);
    }
  }
});
