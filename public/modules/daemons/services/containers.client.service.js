'use strict';

angular.module('daemons').factory('Containers', ['$http', 'DaemonsDocker',
    function ($http, DaemonsDocker) {
        return {
            inspectContainer: function (daemonId, containerId) {
                return $http.get('/daemons/docker/container/inspect/' + daemonId + '/' + containerId);
            },
            actionContainer: function (action, daemonId, container, cbSuccess, index, cbSuccessEnd, cbError) {
                return $http.get('/daemons/docker/container/' + action + '/' + daemonId + '/' + container.Id).
                    success(function (data, status, headers, config) {
                        cbSuccess(container, data, index, cbSuccessEnd);
                    }).
                    error(function (data, status, headers, config) {
                        cbError(container, data, index);
                    });
            }
        };
    }
]);
