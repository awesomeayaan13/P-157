AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createPoster()
      
    },
  
    createPoster: function () {
      const thumbNailsRef = [
        {
          id: "",
          title: "",
          url: "",
        },
        {
          id: "",
          title: "",
          url: "",
        },
  
        {
          id: "",
          title: "",
          url: "",
        },
        {
          id: "",
          title: "",
          url: "",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id)
  
        // Thumbnail Element
        const thumbnail=this.createThumNail(item)
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:9,
        radiusOuter:10,
  
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"green",opacity:1})
      return entityEl
    },
    createThumNail:function(item){
      const entityEl=document.createElement("a-entity")
      
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9
  
      })
      
      entityEl.setAttribute("material",{src:item.url})
      return entityEl
    },
    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity")
     
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title
  
      })
      const elPosition=position
      elPosition.y-20
      entityEl.setAttribute("position",elPosition)
      return entityEl
    }
  });
  