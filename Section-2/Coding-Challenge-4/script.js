var John = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(John.calcBMI() > Mark.calcBMI()) {
    console.log(John.fullName + " has a higher BMI of " + John.bmi);
} else if(John.calcBMI() < Mark.calcBMI()) {
    console.log(Mark.fullName + " has a higher BMI of " + Mark.bmi);
} else {
    console.log('Both have same BMI');
}
