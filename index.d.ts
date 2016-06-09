declare class ValidatedMethod<T> extends MeteorValidatedMethod.ValidatedMethod<T> { }

declare module MeteorValidatedMethod {
    export class ValidatedMethod<T> {
        constructor(options: ValidatedMethodOptions<T>);
        call(options?: T, cb?: (err, res)=> void): void;
    }

    interface ValidatedMethodOptions<T> {
        name: string;
        mixins?: Function[];
        validate: any;
        run(opts: T);
    }
}
