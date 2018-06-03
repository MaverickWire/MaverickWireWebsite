// Automatic date for footer
var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('date');
el.innerHTML = "<b>&copy;2017-" + year + ". All rights reserved.</b>";

// State filter for stores.html
(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

})(document);
  
    /*
    // Multiple Markers
    var markers = [
        ['Sunlight Feed & Farm Center', 37.9424996, -90.782872],
        ['Tractor Supply Co.', 37.7884455, -90.4343723],
        ['MFA', 37.9162094, -91.325002],
        ['Tractor Supply Co.', 38.4770283, -90.5235765],
        ['MFA', 37.9502525, -91.77114],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Sunlight Feed & Farm Center</h3>' +
        '<p>1001 North Missouri Street, Potosi, MO 63664</p>' +        
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Tractor Supply Co.</h3>' +
        '<p>604 Walmart Drive, Farmington, MO 63640</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>MFA</h3>' +
        '<p>17784 Highway 19, Steelville, MO 65565</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Tractor Supply Co.</h3>' +
        '<p>40 Dillon Plaza Drive, High Ridge, MO 63049</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>MFA</h3>' +
        '<p>209 East 8th Street, Rolla, MO 65401</p>' +
        '</div>']
    ];
    */