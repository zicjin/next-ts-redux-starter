export const LOAD_DATA = "PLACEHOLDER/LOAD_DATA"
export const LOAD_DATA_SUCCESS = "PLACEHOLDER/LOAD_DATA_SUCCESS"
export const LOAD_DATA_ERROR = "PLACEHOLDER/LOAD_DATA_ERROR"

export type PlaceholderState = {
    readonly data: object
    readonly error?: string;
}
