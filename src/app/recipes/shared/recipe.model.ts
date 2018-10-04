export class Recipe {
    name: string;
    description: string;
    imageUrl: string;
    imageStoragePath: string;
    constructor(options) {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            }
        }
    }
}
