import {Options} from "./option.type";

type GlobalThis = typeof globalThis & Window & {
    NaN: never;
    Infinity: never;
};

export interface WindowExtend extends GlobalThis {
    FormFieldsBuild: {
        init: (options: Options) => void,
    };
}