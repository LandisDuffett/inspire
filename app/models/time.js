export default class Time {
    constructor(data) {
        this.unixtime = data.unixtime
        this.offset = data.raw_offset
        this.dstoffset = data.dst_offset
    }
}