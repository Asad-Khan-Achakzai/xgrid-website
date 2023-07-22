/*
Copyright (c) 2022, Xgrid Inc, http://xgrid.co

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Function that takes element id and scrolls to it.
 * @param {String} elementId // Id of target element to scroll
 * @param {Number} scrollOffset // number of pixel to add in actual element position to cater spacing around sections when scrolling
 */
export const scrollToElement = (elementId, scrollOffset) => {
	window.scrollTo({
		top: document.getElementById(elementId).offsetTop - scrollOffset,
		behavior: "smooth",
	});
};