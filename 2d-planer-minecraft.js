 Polymer({
            eraser: false,
            material: "<a>dirt</a>",
            brush: "<a>Block</a>",
            height: 10,
            width: 20,
            fieldborder: 1,
            bordercolor: "#000",
            print: function(e){
                var canvas = this.$.plan; 
                
                if(canvas.getContext){
                    var context = canvas.getContext('2d');
                }
                    
                var xpos = e.x-canvas.getBoundingClientRect().left;
                var ypos = e.y-canvas.getBoundingClientRect().top;
                    
                var x = (Math.floor(xpos / (16 + this.fieldborder)) * (16 + this.fieldborder));
                var y = (Math.floor(ypos / (16 + this.fieldborder)) * (16 + this.fieldborder));
                
                context.clearRect(x, y, 16, 16);
                
                if(this.eraser == false){
                    var image = new Image();
                    image.src = this.resolvePath("blocks/" + this.material.innerHTML + ".png");
                    context.drawImage(image, x, y);
                    if(typeof this.brush != "undefined"){
                        switch(this.brush.innerHTML){
                            case "Block":
                                break;
                            case "Stairs":
                                context.clearRect(x + ((Math.floor((xpos - x) / 8) + 1) % 2 * 8), y + ((Math.floor((ypos - y) / 8) + 1) % 2 * 8), 8, 8);
                                break;
                            case "Slab":
                                context.clearRect(x, y + ((Math.floor((ypos - y) / 8) + 1) % 2 * 8), 16, 8);
                                break;
                            case "Fence":
                                context.clearRect(x, y, 5, 5);
                                context.clearRect(x + 11, y, 5, 5);
                                context.clearRect(x, y + 11, 5, 5);
                                context.clearRect(x + 11, y + 11, 5, 5);
                                break;
                            case "Wall":
                                context.clearRect(x, y, 4, 4);
                                context.clearRect(x + 12, y, 4, 4);
                                context.clearRect(x, y + 12, 4, 4);
                                context.clearRect(x + 12, y + 12, 4, 4);
                                break;
                        }
                    }
                }
                
                this.plan_png = canvas.toDataURL("image/png");
            },
            clear: function(){ 
                var canvas = this.$.plan;
                
                if(canvas.getContext){
                    var context = canvas.getContext('2d');
                }
                
                this.oldimg = canvas.toDataURL("image/png");
                
                context.clearRect(0, 0, (this.width * (16 + this.fieldborder)), (this.height * (16 + this.fieldborder)));
                
                this.drawBorders(); 
                
                this.$.clear.show();
            },
            Undo: function() {
                var canvas = this.$.plan;
                var context = canvas.getContext('2d');
                
                context.clearRect(0,0, (this.width * 16), (this.height * 16));
                
                var image = new Image();
                image.src = this.oldimg;
                
                context.drawImage(image,0,0); 
            },
            resize: function() {
                var image = new Image();
                image.src = this.plan_png;
                
                this.$.plan.getContext('2d').drawImage(image,0,0);
                
                this.drawBorders(); 
            },
            import: function() {
                var canvas = this.$.plan;
                var context = canvas.getContext('2d');
                
                this.oldimg = canvas.toDataURL("image/png");
                
                context.clearRect(0,0, (this.width * 16), (this.height * 16));
                
                var image = new Image();
                image.src = this.canvasurl;
                
                context.drawImage(image,0,0); 
                
                this.$.import.show();
                
                this.drawBorders(); 
            },
            ready: function(){
                this.material = document.createElement("paper-item");
                this.material.innerHTML = "dirt";
                this.brush = document.createElement("paper-item");
                this.brush.innerHTML = "Block";
                
                this.drawBorders();       
            },
            
            drawBorders: function(){
                var canvas = this.$.plan; 
                
                if(canvas.getContext){
                    var context = canvas.getContext('2d');
                }                
                
                for (i = 1; i <= this.width; i++) { 
                    context.beginPath();
                    context.moveTo((16 + this.fieldborder) * i - this.fieldborder / 2 , 0);
                    context.lineTo((16 + this.fieldborder) * i - this.fieldborder / 2  , this.height * (16 + this.fieldborder) - this.fieldborder);
                    context.lineWidth = this.fieldborder;
                    context.strokeStyle = this.bordercolor
                    context.stroke();
                }
                
                for (i = 1; i <= this.height; i++) { 
                    context.beginPath();
                    context.moveTo(0, (16 + this.fieldborder) * i - this.fieldborder / 2);
                    context.lineTo(this.width * (16 + this.fieldborder) - this.fieldborder, (16 + this.fieldborder) * i - this.fieldborder / 2);
                    context.lineWidth =  this.fieldborder;
                    context.strokeStyle = this.bordercolor;
                    context.stroke();
                }    
            }
        });