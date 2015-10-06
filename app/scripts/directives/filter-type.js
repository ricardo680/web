'use strict';

angular.module('directives')
    .directive('filterType', [function() {
      return {
        restrict: 'E',
        require: '^stTable',
        scope: {
          collection: '=',
          predicate: '@',
          predicateExpression: '='
        },
        template: '<a ng-click="filterType(\'sinister\')"> Sinister </a>' +
        '<a ng-click="filterType(\'All\')"> All </a>' +
        '<a ng-click="filterType(\'tefth\')"> Tefth </a>'
        ,
        link: function(scope, element, attr, table) {
          var getPredicate = function() {
            return 'Tipo';
          }

          scope.$watch('collecton', function(newValue) {
            var predicate = getPredicate();

            if (newValue) {
              var temp = [];
              scope.distinctItems = ['All'];

              angular.forEach(scope.collection, function(item) {
                var value = item[predicate];

                if (value && value.trim().length > 0 && temp.indexOf(value) === -1) {
                  temp.push(value);
                }
              });
              temp.sort();

              scope.distinctItems = scope.distinctItems.concat(temp);
              scope.selectedOption = scope.distinctItems[0];
              scope.filterType(scope.selectedOption);
            }
          }, true);

          scope.filterType = function(type) {
            var predicate = getPredicate();

            var query = {};

            query.distinct = type;

            if (query.distinct === 'All') {
              query.distinct = '';
            }

            table.search(query, predicate);
          };
          
          /*
          scope.optionChanged = function(selectedOption) {
            var predicate = getPredicate();

            var query = {};

            query.distinct = selectedOption;

            if (query.distinct === 'All') {
              query.distinct = '';
            }

            table.search(query, predicate);
          };
          */
        }
      }
    }])
