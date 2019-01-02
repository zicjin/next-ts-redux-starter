export const START_CLOCK = "CLOCK/START_CLOCK"
export const TICK_CLOCK = "CLOCK/TICK_CLOCK"

export type ClockState = {
    readonly lastUpdate: Date
    readonly light: boolean;
}
