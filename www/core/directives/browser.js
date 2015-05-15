// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core')

/**
 * Directive to open a link in external browser.
 *
 * @module mm.core
 * @ngdoc provider
 * @name mmBrowser
 */
.directive('mmBrowser', function($mmUtil) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', function(event) {
                if (attrs.href) {
                    event.preventDefault();
                    $mmUtil.openInBrowser(attrs.href);
                }
            });
        }
    };
});
