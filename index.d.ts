/// <reference types="debug" />
declare const _default: (serviceName: string) => {
    log: import("debug").Debugger;
    info: import("debug").Debugger;
    warn: import("debug").Debugger;
    err: import("debug").Debugger;
};
export default _default;
