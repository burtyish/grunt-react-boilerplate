/** @jsx React.DOM */
var Slider = require('react-slick')

module.exports = function(router /*module dependencies*/) {
	return React.createClass({
		render: function() {
			var greetings = "Hello World!";
			return (
				<div>{greetings}</div>
			);
		}
	});
};