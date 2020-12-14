function getDay(y, m, d) {
    var days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(y, --m, d);
    return d && days[d.getDay()];
}