/**
 * Created by Administrator on 2017/1/5.
 */
var d3 = require("d3");

var hour = 36e5,
	date0 = new Date(2016,5,1),
	date1 = d3.timeMonth.offset(date0,7),
	timeFormat = d3.timeFormat("%Y-%m-%dT%H:%M:%S.%L"),
	data = d3.timeDays(date0,date1).map(fakeDatum(22*hour,8*hour,0.5*hour));

process.stdout.write(d3.csvFormat(data) + "\n");

function fakeDatum(offset,duration,deviation) {
	var random = d3.randomNormal(0,deviation);
	return function (date) {
		return {
			asleep:timeFormat(new Date(+date+random() + offset)),
			awake:timeFormat(new Date(+date+random() + offset + duration))
		}
	}
}