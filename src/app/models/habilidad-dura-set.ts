export class HabilidadDuraSet {

    id?:number;

    angular: String;
    visual_studio: String;
    consola_npm:String;
    mysql: String;
    sql0: String;
    php: String;
    phpmyadmin: String;
    html:String;
    css: String;
    javascript: String;
    typescript: String;
    git: String;
    adobe_photoshop:String;
   
    constructor(
                angular: String,
                visual_studio: String,
                consola_npm:String,
                mysql: String,
                sql0: String,
                php: String,
                phpmyadmin: String,
                html:String,
                css: String,
                javascript: String,
                typescript: String,
                git: String,
                adobe_photoshop:String

    ){
                this.angular =angular;
                this.visual_studio =visual_studio;
                this.consola_npm = consola_npm
                this.mysql = mysql
                this.sql0 =sql0;
                this.php =php;
                this.phpmyadmin =phpmyadmin;
                this.html =html;
                this.css =css;
                this.javascript =javascript;
                this.typescript =typescript;
                this.git =git;
                this.adobe_photoshop= adobe_photoshop;


    }

    public set s_angular(value:String){
        this.angular = value;
    }
    public set s_visual_studio(value:String){
        this.visual_studio = value;
    }
    public set s_consola_npm(value:String){
        this.consola_npm = value;
    }
    public set s_mysql(value:String){
        this.mysql = value;
    }
    public set s_sql0(value:String){
        this.sql0 = value;
    }
    public set s_php(value:String){
        this.php = value;
    }
    public set s_html(value:String){
        this.html = value;
    }
    public set s_phpmyadmin(value:String){
        this.phpmyadmin = value;
    }
    public set s_css(value:String){
        this.css = value;
    }
    public set s_javascript(value:String){
        this.javascript = value;
    }
    public set s_typescript(value:String){
        this.typescript = value;
    }
    public set s_git(value:String){
        this.git = value;
    }
    public set s_adobe_photoshop(value:String){
        this.adobe_photoshop = value;
    }

}
