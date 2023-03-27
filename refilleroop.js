class Flagon {

    constructor(o) {
        this.select = document.querySelector(o.select);
        this.display = document.querySelector(".select-display");
        this.options = document.querySelector(".select-options");
        this.text = this.display.querySelector(".select-text");
        this.selectedItem = o.selectedItem;
        this.option = o.option;
        this.parent = o.parent;
        this.flagon = o.flagon;
        this.water = o.water;
        this.waterQuantity = o.waterQuantity;

        this.display.onclick = () => {
            document.querySelector(".select").classList.toggle("open");
        }
        
        document.querySelectorAll("span").forEach( option => {
            option.onclick = () => {
                const selectedItem = options.querySelector(".select .selected");
        
                if (selectedItem) selectedItem.classList.remove("selected");
        
                option.classList.add("selected"); 
        
                this.text.innerHTML = option.innerText; 
                document.querySelector(".select").classList.remove("open");
            };
        });

    }

    getSelectValue() {
        const option = document.querySelector(".selected");
    
        return option ? option.dataset.value : null;
        
    }

    fill() {
        const waterQuantity = this.getSelectValue();
        if(waterQuantity !== null)
            this.water.style.height = waterQuantity;
    }
    
    
    static createFlagon(renderTo){
        const parent = document.querySelector(renderTo);
        const flagon = document.createElement("div");
        const water = document.createElement("div");
    
        flagon.classList.add("flagon");
        water.setAttribute("class", "water");
    
        flagon.appendChild(water);
        parent.appendChild(flagon);
    
        return new Flagon({
            select: `#${parent.id} .select`,
            selectedItem: null,
            option: null,
            parent: parent,
            flagon: flagon,
            water: water,
            waterQuantity: null,
        });
    }
}
    
    const flagonCt = Flagon.createFlagon("#content");
    
    document.querySelector("#fill").onclick = () => {
        flagonCt.fill();
        
        
    };


    //  refilleroop.js:8 Uncaught TypeError: Cannot read properties of null (reading 'querySelector')
    // at new Flagon (refilleroop.js:8:38)
    // at Flagon.createFlagon (refilleroop.js:62:18)
    // at refilleroop.js:74:30

  






