var John = {
    fName: "John Smith",
    bills: [124, 48, 268, 180, 42],
    cTip: function() {
        this.tips = [];
        this.finalVals = [];
        for(var i=0; i<this.bills.length; i++) {
            var perc;
            var bill = this.bills[i];

            if(bill < 50) {
                perc = .2;
            } else if(bill >= 50 && bill < 200) {
                perc = .15;
            } else {
                perc = .1;
            }

            this.tips[i] = bill * perc;
            this.finalVals[i] = bill + bill* perc;
        }
    }
}

var Mark = {
    fName: "Mark Miller",
    bills: [44, 175, 110, 45],
    cTip: function() {
        this.tips = [];
        this.finalVals = [];
        for(var i=0; i<this.bills.length; i++) {
            var perc;
            var bill = this.bills[i];

            if(bill < 100) {
                perc = .2;
            } else if(bill >= 100 && bill < 300) {
                perc = .1;
            } else {
                perc = .25;
            }

            this.tips[i] = bill * perc;
            this.finalVals[i] = bill + bill* perc;
        }
    }
}

function cAvg(tips) {
    var sum =0;
    for(var i=0; i<tips.length; i++) {
        sum += tips[i];
    }
    return sum/tips.length;
}

John.cTip();
Mark.cTip();
John.avg = cAvg(John.tips);
Mark.avg = cAvg(Mark.tips);

console.log(John, Mark);

if(John.avg > Mark.avg) {
    console.log(John.fullName + ": " + John.avg);
} else if(John.avg < Mark.avg) {
    console.log(Mark.fullName + ": " + Mark.avg);
} else {
    console.log("Equal");
}