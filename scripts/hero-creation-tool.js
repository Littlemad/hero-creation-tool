class HeroCreationTools extends Application {
    
    constructor() {
        super();
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "modules/hero-creation-tool/templates/app.html";
        options.width = 'auto';
        options.height = 'auto';
        options.title = "Hero Creation";
        return options;
    }

    async openForActor(actorId){
        this.actorId = actorId;
        this.render(true);
    }
}

var link = document.createElement('link');  
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = '../styles/hero-creation-tool.css';  

Hooks.on('renderActorSheet', (app, html, data) => { 
   
    if (app.actor.data.type === 'npc') return;
    let actorId = data.actor._id;

    configure_hero = new HeroCreationTools();
    
    let button = $(`<a class="header-button configure_hero"}>Hero Creation</a>`);
    button.click(ev =>{
        console.log("button pressed!");
        configure_hero.openForActor(actorId);
    });
    let titleElement = html.closest('.app').find('.configure-sheet');
    button.insertBefore(titleElement);

});
