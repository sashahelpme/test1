import { duplicateString } from './hello.js';


module.exports = (data) => {
    data.hello = duplicateString("Hello");
    return data;
};
