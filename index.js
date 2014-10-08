module.exports = {
	roundToSigFigs: function(n, sig) {
		var mult = Math.pow(10,
			sig - Math.floor(Math.log(n) / Math.LN10) - 1);
		return Math.round(n * mult) / mult;
	},
	findSigFigs: function(n) {
		var exp = n.toExponential();
		var allSigFigs = exp.split("e")[0];
		allSigFigs.replace(".", "");
		return allSigFigs.length;
	},
	keepSigFigs: function(n, func) {
		var sigFig = this.findSigFigs(n);
		return this.roundToSigFigs(func(), n)
	}
}