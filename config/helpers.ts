const path = require('path');

const rootPath = path.resolve(__dirname, '../../');

exports.resolveFromRootPath = (...args) => path.join(rootPath, ...args);

export const getInterfaceProps = (obj: Object): string[] => {
    let keys: string[] = []

    keys = Object.keys(obj);

    return keys;
}