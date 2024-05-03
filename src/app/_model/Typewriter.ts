export class Typewriter {
    private target: HTMLElement;
    private strings: string[];
    private currentStringIndex: number;
    private isTyping: boolean;
    private typeColor: string;
  
    constructor(target: HTMLElement, options: { loop: boolean; typeColor: string }) {
      this.target = target;
      this.strings = [];
      this.currentStringIndex = 0;
      this.isTyping = false;
      this.typeColor = options.typeColor;
    }
  
    names(...strings: string[]): Typewriter {
      this.strings = strings;
      return this;
    }
  
    start(): Typewriter {
      this.isTyping = true;
      this.typeString(this.strings[this.currentStringIndex]);
      return this;
    }
  
    private typeString(string: string): void {
      const char = string.charAt(this.target.innerText!.length);
      if (char === '') {
        this.isTyping = false;
        if (this.currentStringIndex < this.strings.length - 1) {
          this.currentStringIndex++;
        } else if ) {
          this.currentStringIndex = 0;
        } else {
          return;
        }
        setTimeout(() => this.typeString(this.strings[this.currentStringIndex]), 1000);
      } else {
        this.target.innerText += char;
        this.target.style.color = this.typeColor;
        setTimeout(() => this.typeString(string), 50);
      }
    }
  }