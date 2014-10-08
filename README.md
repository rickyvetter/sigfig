sigfig
======

An npm module for finding and rounding to sigfigs.

#Use
```
var sigfig = require("sigfig");
```


```
/* returns num rounded to the number of sigfigs */
sigfig.roundToSigFigs(num, numOfSigFigs)
```

```
/* returns the number of sigfigs in num */
sigfig.findSigFigs(num)
```

```
/* returns the result of functionToPerform rounded to the sigfigs of num */
sigfig.keepSigfigs(num, functionToPerform)
```
