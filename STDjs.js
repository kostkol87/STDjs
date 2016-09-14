var formatDiff = function (longToFormat, ms, s, m, h, d) {
    var sec = 1000,
        min = 60 * sec,
        hour = 60 * min,
        day = 24 * hour;
    
    var _ms = ms ? ms : 'ms ',
        _s  = s  ? s  : 's ',
        _m  = m  ? m  : 'm ',
        _h  = h  ? h  : 'h ',
        _d  = d  ? d  : 'd ';

    if (longToFormat <= sec) {
        return longToFormat + _ms;
    }
    if (longToFormat <= min) {
        return (longToFormat / sec | 0) + _s
            + (longToFormat % sec | 0) + _ms;
    }
    if (longToFormat <= hour) {
        return (longToFormat / min | 0) + _m
            + ((longToFormat % min | 0) / sec | 0) + _s
            + ((longToFormat % min) % sec) + _ms;
    }
    if (longToFormat <= day) {
        return (longToFormat / hour | 0) + _h
            + ((longToFormat % hour | 0) / min | 0) + _m
            + (((longToFormat % hour) % min) / sec | 0) + _s
            + (((longToFormat % hour) % min) % sec) + _ms;
    }
    if (longToFormat > day) {
        return (longToFormat / day | 0) + _d
            + ((longToFormat % day | 0) / hour | 0) + _h
            + (((longToFormat % day) % hour) / min | 0) + _m
            + ((((longToFormat % day) % hour) % min) / sec | 0) + _s
            + ((((longToFormat % day) % hour) % min) % sec | 0) + _ms;
    }
};

