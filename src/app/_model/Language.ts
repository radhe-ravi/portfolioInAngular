export class Language{
    static  readonly JAVA = new Language("JAVA");
    static  readonly JAVASCRIPT = new Language("JAVASCRIPT");
    static  readonly TYPESCRIPT = new Language("TYPESCRIPT");
    static readonly CPP = new Language("C++");

    private constructor(private readonly language: string) {
       
    };

   toString(): string {
    return this.language;
   };
}