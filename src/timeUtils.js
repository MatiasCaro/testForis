function parseTime(time) {
    const [hour, minutes] = time.split(':');
    if (hour >= 0 && hour <= 24 && minutes >= 0 && minutes <= 59) {
        return parseInt(hour) * 60 + parseInt(minutes);
    }
    throw new Error(`Invalid time format: ${time}`);
}

function differenceInMinutes(start, end) {
    const startTime = parseTime(start);
    const endTime = parseTime(end);
    if (startTime >= endTime) {
        throw new Error(`Start time ${start} should be before end time ${end}`);
    }
    return endTime - startTime;
}

module.exports = {
    parseTime,
    differenceInMinutes
};
