function std() {
    var sec     = 1000,
        min     = 60 * sec,
        hour    = 60 * min,
        day     = 24 * hour;

    var formatDiff = function (longToFormat) {
        if (longToFormat <= sec) {
            return longToFormat + "ms ";
        }
        if (longToFormat <= min) {
            return (longToFormat / sec | 0) + "s "
                + (longToFormat % sec | 0) + "ms ";
        }
        if (longToFormat <= hour) {
            return (longToFormat / min | 0) + "m "
                + ((longToFormat % min | 0) / sec | 0) + "s "
                + ((longToFormat % min) % sec) + "ms ";
        }
        if (longToFormat <= day) {
            return (longToFormat / hour | 0) + "h "
                + ((longToFormat % hour | 0) / min | 0) + "m "
                + (((longToFormat % hour) % min) / sec | 0) + "s "
                + (((longToFormat % hour) % min) % sec) + "ms ";
        }
        if (longToFormat > day) {
            return (longToFormat / day | 0) + "d "
                + ((longToFormat % day | 0) / hour | 0) + "h "
                + (((longToFormat % day) % hour) / min | 0) + "m "
                + ((((longToFormat % day) % hour) % min) / sec | 0) + "s "
                + ((((longToFormat % day) % hour) % min) % sec | 0) + "ms ";
        }
    };
};

