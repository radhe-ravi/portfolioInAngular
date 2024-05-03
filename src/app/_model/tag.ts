export class Tag{

    static readonly ANGULAR = new Tag ('Angular','red');
    static readonly TYPESCRIPT = new Tag ('Typescript','blue');
    static readonly JAVA = new Tag ('Java','green');
    static readonly JAVASCRIPT = new Tag ('Javascript','yellow');
    static readonly REACT = new Tag ('React','orange');
    static readonly SPRINGBOOT = new Tag ('Spring-Boot','black');
    static readonly NODEJS = new Tag ('NodeJS','purple');
    static readonly JAVAFX = new Tag ('JavaFX','pink');


    private constructor(private readonly key: string, public readonly color: string){

    } 

    toString(){
        return this.key;
    }
}