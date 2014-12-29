'use strict';

angular.module('core').controller('ToastsController', ['$scope', '$mdToast', 'Toasts',
    function ($scope, $mdToast, Toasts) {

        $scope.closeToast = function (index) {
            Toasts.closeToast(index);
        };

        $scope.toasts = Toasts.getToasts();
    }
]);