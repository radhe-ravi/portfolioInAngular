export class socialLinks{
    static readonly INSTAGRAM = new socialLinks ('https://www.instagram.com/ravi_radhey_02/');
    static readonly LINKEDIN = new socialLinks ('https://www.linkedin.com/in/radhe-ravi/');
    static readonly GITHUB = new socialLinks ('https://www.github.com/RadheRavi3021');
    static readonly LEETCODE = new socialLinks('https://www.leetcode.com/radheravi01');
    static readonly EMAIL = new socialLinks ('radheravi01@gmail.com');
    static readonly PHONE = new socialLinks ('+91 7250405391');

    private constructor(private readonly key: string){

    }

    toString(){
        return this.key;
    }
}