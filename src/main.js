define('ngmap-formly', ['angular'], function(angular) {
    angular.module('ngmapFormly', ['ngMap'])
        .run(['formlyConfig', function (formlyConfig) {
            formlyConfig.setType([{
                    name: 'plGMap',
                    template: '<div map-lazy-load="https://maps.google.com/maps/api/js" map-lazy-load-params="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq9mRYFVlyvqm0h6CxJGLyYGLMqkB9fJw">'
                              + '<ng-map zoom="{{options.data.zoom}}" center="{{options.data.center}}">'
                              + '<marker ng-repeat="marker in options.data.markers" position="{{marker.position}}" title="{{marker.title}}" animation="{{marker.animation}}"></marker>'
                              + '</ng-map>'
                              + '</div>'
            }]);
    }]);
});
