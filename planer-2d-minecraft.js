Polymer({
      is: 'planer-2d-minecraft',
      properties: {
        active: {
          type: Boolean,
          value: false
        },
        bordercolor: {
          type: String,
          value: '#000'
        },
        brush: {
          type: Number,
          value: 0
        },
        brushes: {
          type: Array,
          value: function () {
            return [
              'Block',
              'Stairs',
              'Slab',
              'Fence',
              'Wall'
            ];
          }
        },
        eraser: {
          type: Boolean,
          value: false
        },
        fieldborder: {
          type: Number,
          notify: true,
          value: 1
        },
        height: {
          type: Number,
          notify: true,
          value: 10
        },
        mat: {
          type: Array,
          value: function () {
            return [
              'anvil_top_damaged_0',
              'anvil_top_damaged_1',
              'anvil_top_damaged_2',
              'bedrock',
              'bed_feet_top',
              'bed_head_top',
              'bookshelf',
              'brewing_stand',
              'brewing_stand_base',
              'brick',
              'cactus_top',
              'cake_top',
              'carrots_stage_3',
              'cauldron_side',
              'clay',
              'coal_block',
              'coal_ore',
              'coarse_dirt',
              'cobblestone',
              'cobblestone_mossy',
              'cocoa_stage_2',
              'command_block',
              'comparator_off',
              'comparator_on',
              'crafting_table_top',
              'daylight_detector_inverted_top',
              'daylight_detector_top',
              'deadbush',
              'diamond_block',
              'diamond_ore',
              'dirt',
              'dirt_podzol_top',
              'dispenser_front_horizontal',
              'door_acacia_lower',
              'door_acacia_upper',
              'door_birch_lower',
              'door_birch_upper',
              'door_dark_oak_lower',
              'door_dark_oak_upper',
              'door_iron_lower',
              'door_iron_upper',
              'door_jungle_lower',
              'door_jungle_upper',
              'door_spruce_lower',
              'door_spruce_upper',
              'door_wood_lower',
              'door_wood_upper',
              'double_plant_fern_bottom',
              'double_plant_fern_top',
              'double_plant_grass_bottom',
              'double_plant_grass_top',
              'double_plant_paeonia_bottom',
              'double_plant_paeonia_top',
              'double_plant_rose_bottom',
              'double_plant_rose_top',
              'double_plant_sunflower_back',
              'double_plant_sunflower_bottom',
              'double_plant_sunflower_front',
              'double_plant_sunflower_top',
              'double_plant_syringa_bottom',
              'double_plant_syringa_top',
              'dragon_egg',
              'dropper_front_horizontal',
              'emerald_block',
              'emerald_ore',
              'enchanting_table_top',
              'endframe_top',
              'end_stone',
              'farmland_dry',
              'farmland_wet',
              'fern',
              'flower_allium',
              'flower_blue_orchid',
              'flower_dandelion',
              'flower_houstonia',
              'flower_oxeye_daisy',
              'flower_paeonia',
              'flower_rose',
              'flower_tulip_orange',
              'flower_tulip_pink',
              'flower_tulip_red',
              'flower_tulip_white',
              'furnace_front_off',
              'furnace_front_on',
              'furnace_top',
              'glass',
              'glass_black',
              'glass_blue',
              'glass_brown',
              'glass_cyan',
              'glass_gray',
              'glass_green',
              'glass_light_blue',
              'glass_lime',
              'glass_magenta',
              'glass_orange',
              'glass_pane_top',
              'glass_pane_top_black',
              'glass_pane_top_blue',
              'glass_pane_top_brown',
              'glass_pane_top_cyan',
              'glass_pane_top_gray',
              'glass_pane_top_green',
              'glass_pane_top_light_blue',
              'glass_pane_top_lime',
              'glass_pane_top_magenta',
              'glass_pane_top_orange',
              'glass_pane_top_pink',
              'glass_pane_top_purple',
              'glass_pane_top_red',
              'glass_pane_top_silver',
              'glass_pane_top_white',
              'glass_pane_top_yellow',
              'glass_pink',
              'glass_purple',
              'glass_red',
              'glass_silver',
              'glass_white',
              'glass_yellow',
              'glowstone',
              'gold_block',
              'gold_ore',
              'grass_side',
              'grass_side_snowed',
              'grass_top',
              'gravel',
              'hardened_clay',
              'hardened_clay_stained_black',
              'hardened_clay_stained_blue',
              'hardened_clay_stained_brown',
              'hardened_clay_stained_cyan',
              'hardened_clay_stained_gray',
              'hardened_clay_stained_green',
              'hardened_clay_stained_light_blue',
              'hardened_clay_stained_lime',
              'hardened_clay_stained_magenta',
              'hardened_clay_stained_orange',
              'hardened_clay_stained_pink',
              'hardened_clay_stained_purple',
              'hardened_clay_stained_red',
              'hardened_clay_stained_silver',
              'hardened_clay_stained_white',
              'hardened_clay_stained_yellow',
              'hay_block_top',
              'hopper_inside',
              'hopper_outside',
              'hopper_top',
              'ice',
              'ice_packed',
              'iron_bars',
              'iron_block',
              'iron_ore',
              'iron_trapdoor',
              'itemframe_background',
              'jukebox_side',
              'jukebox_top',
              'ladder',
              'lapis_block',
              'lapis_ore',
              'leaves_acacia',
              'leaves_big_oak',
              'leaves_birch',
              'leaves_jungle',
              'leaves_oak',
              'leaves_spruce',
              'lever',
              'log_acacia',
              'log_acacia_top',
              'log_big_oak',
              'log_big_oak_top',
              'log_birch',
              'log_birch_top',
              'log_jungle',
              'log_jungle_top',
              'log_oak',
              'log_oak_top',
              'log_spruce',
              'log_spruce_top',
              'melon_side',
              'melon_stem_connected',
              'melon_stem_disconnected',
              'melon_top',
              'mob_spawner',
              'mushroom_block_inside',
              'mushroom_block_skin_brown',
              'mushroom_block_skin_red',
              'mushroom_block_skin_stem',
              'mushroom_brown',
              'mushroom_red',
              'mycelium_side',
              'mycelium_top',
              'netherrack',
              'nether_brick',
              'nether_wart_stage_0',
              'nether_wart_stage_1',
              'nether_wart_stage_2',
              'noteblock',
              'obsidian',
              'piston_bottom',
              'piston_inner',
              'piston_side',
              'piston_top_normal',
              'piston_top_sticky',
              'planks_acacia',
              'planks_big_oak',
              'planks_birch',
              'planks_jungle',
              'planks_oak',
              'planks_spruce',
              'portal',
              'potatoes_stage_0',
              'potatoes_stage_1',
              'potatoes_stage_2',
              'potatoes_stage_3',
              'prismarine_bricks',
              'prismarine_dark',
              'pumpkin_face_off',
              'pumpkin_face_on',
              'pumpkin_side',
              'pumpkin_stem_connected',
              'pumpkin_stem_disconnected',
              'pumpkin_top',
              'quartz_block_bottom',
              'quartz_block_chiseled',
              'quartz_block_chiseled_top',
              'quartz_block_lines',
              'quartz_block_lines_top',
              'quartz_block_side',
              'quartz_block_top',
              'quartz_ore',
              'rail_activator',
              'rail_activator_powered',
              'rail_detector',
              'rail_detector_powered',
              'rail_golden',
              'rail_golden_powered',
              'rail_normal',
              'rail_normal_turned',
              'redstone_block',
              'redstone_dust_cross',
              'redstone_dust_cross_overlay',
              'redstone_dust_line',
              'redstone_dust_line_overlay',
              'redstone_lamp_off',
              'redstone_lamp_on',
              'redstone_ore',
              'redstone_torch_off',
              'redstone_torch_on',
              'red_sand',
              'red_sandstone_bottom',
              'red_sandstone_carved',
              'red_sandstone_normal',
              'red_sandstone_smooth',
              'red_sandstone_top',
              'reeds',
              'repeater_off',
              'repeater_on',
              'sand',
              'sandstone_bottom',
              'sandstone_carved',
              'sandstone_normal',
              'sandstone_smooth',
              'sandstone_top',
              'sapling_acacia',
              'sapling_birch',
              'sapling_jungle',
              'sapling_oak',
              'sapling_roofed_oak',
              'sapling_spruce',
              'sea_lantern',
              'slime',
              'snow',
              'soul_sand',
              'sponge',
              'sponge_wet',
              'stone',
              'stonebrick',
              'stonebrick_carved',
              'stonebrick_cracked',
              'stonebrick_mossy',
              'stone_andesite',
              'stone_andesite_smooth',
              'stone_diorite',
              'stone_diorite_smooth',
              'stone_granite',
              'stone_granite_smooth',
              'stone_slab_side',
              'stone_slab_top',
              'tallgrass',
              'tnt_bottom',
              'tnt_side',
              'tnt_top',
              'torch_on',
              'trapdoor',
              'trip_wire',
              'trip_wire_source',
              'vine',
              'waterlily',
              'water_still',
              'web',
              'wheat_stage_0',
              'wheat_stage_1',
              'wheat_stage_2',
              'wheat_stage_3',
              'wheat_stage_4',
              'wheat_stage_5',
              'wheat_stage_6',
              'wheat_stage_7',
              'wool_colored_black',
              'wool_colored_blue',
              'wool_colored_brown',
              'wool_colored_cyan',
              'wool_colored_gray',
              'wool_colored_green',
              'wool_colored_light_blue',
              'wool_colored_lime',
              'wool_colored_magenta',
              'wool_colored_orange',
              'wool_colored_pink',
              'wool_colored_purple',
              'wool_colored_red',
              'wool_colored_silver',
              'wool_colored_white',
              'wool_colored_yellow'
            ];
          }
        },
        material: {
          type: String,
          value: 'dirt'
        },
        width: {
          type: Number,
          notify: true,
          value: 20
        }
      },
      painthover: function (e) {
        if (this.active) {
          this.paint(e);
        }
      },
      activetrue: function () {
        this.active = true;
      },
      activefalse: function () {
        this.active = false;
      },
      paint: function (e) {
        this.edited = true;
        var canvas = this.$.plan;
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
        }
        var xpos = e.x - canvas.getBoundingClientRect().left;
        var ypos = e.y - canvas.getBoundingClientRect().top;
        var x = Math.floor(xpos / (16 + this.fieldborder)) * (16 + this.fieldborder);
        var y = Math.floor(ypos / (16 + this.fieldborder)) * (16 + this.fieldborder);
        context.fillStyle = '#fff';
        if (!this.layer) {
          context.fillRect(x, y, 16, 16);
        }
        if (this.eraser == false) {
          pre = this.$.pre.getContext('2d');
          var image = new Image();
          image.src = this.resolveUrl('blocks/' + this.material + '.png');
          pre.clearRect(0, 0, 16, 16);
          pre.drawImage(image, 0, 0);
          switch (this.brushes[this.brush]) {
          case 'Block':
            break;
          case 'Stairs':
            pre.clearRect((Math.floor((xpos - x) / 8) + 1) % 2 * 8, (Math.floor((ypos - y) / 8) + 1) % 2 * 8, 8, 8);
            break;
          case 'Slab':
            pre.clearRect(0, (Math.floor((ypos - y) / 8) + 1) % 2 * 8, 16, 8);
            break;
          case 'Fence':
            pre.clearRect(0, 0, 5, 5);
            pre.clearRect(11, 0, 5, 5);
            pre.clearRect(0, 11, 5, 5);
            pre.clearRect(11, 11, 5, 5);
            break;
          case 'Wall':
            pre.clearRect(0, 0, 4, 4);
            pre.clearRect(12, 0, 4, 4);
            pre.clearRect(0, 12, 4, 4);
            pre.clearRect(12, 12, 4, 4);
            break;
          }
          context.drawImage(this.$.pre, x, y);
        }
        this.plan_png = canvas.toDataURL('image/png');
        window.localStorage.setItem('mc-planer-last-plan', this.plan_png);
      },
      fill: function (e) {
        var canvas = this.$.plan;
        for (var i = 0; i < this.width * (16 + this.fieldborder); i = i + 16 + this.fieldborder) {
          e.x = canvas.getBoundingClientRect().left + i;
          for (var j = 0; j < this.height * (16 + this.fieldborder); j = j + 16 + this.fieldborder) {
            e.y = canvas.getBoundingClientRect().top + j;
            this.paint(e);
          }
        }
      },
      download: function () {
        this.$.la.trackEvent('Planer', 'action', 'download');
      },
      clear: function () {
        this.edited = false;
        var canvas = this.$.plan;
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
        }
        this.oldimg = canvas.toDataURL('image/png');
        context.fillStyle = '#fff';
        context.fillRect(0, 0, this.width * (16 + this.fieldborder), this.height * (16 + this.fieldborder));
        this.drawBorders();
        this.$.clear.show();
      },
      Undo: function () {
        var canvas = this.$.plan;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, this.width * 16, this.height * 16);
        var image = new Image();
        image.src = this.oldimg;
        context.drawImage(image, 0, 0);
      },
      resize: function () {
        var canvas = this.$.plan;
        if (canvas.getContext) {
          var context = canvas.getContext('2d');
        }
        var image = new Image();
        image.src = this.plan_png;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, this.width * (16 + this.fieldborder), this.height * (16 + this.fieldborder));
        context.drawImage(image, 0, 0);
        this.drawBorders();
      },
      import: function () {
        var canvas = this.$.plan;
        var context = canvas.getContext('2d');
        this.oldimg = canvas.toDataURL('image/png');
        context.fillStyle = '#fff';
        context.fillRect(0, 0, this.width * (16 + this.fieldborder), this.height * (16 + this.fieldborder));
        var image = new Image();
        image.src = this.canvasurl;
        context.drawImage(image, 0, 0);
        this.$.import.show();
        this.drawBorders();
      },
      upload: function () {
        var auth;
        auth = 'Client-ID ' + '464c92db5ae0e45';
        that = this;
        $.ajax({
          url: 'https://api.imgur.com/3/image',
          type: 'POST',
          headers: {
            Authorization: auth,
            Accept: 'application/json'
          },
          data: {
            image: this.plan_png.split(',')[1],
            type: 'base64'
          },
          success: function (result) {
            that.imgurid = result.data.id;
            that.$.upload.show();
          }
        });
      },
      ready: function () {
        var canvas = this.$.plan;
        var context = canvas.getContext('2d');
        var data = window.localStorage.getItem('mc-planer-last-plan');
        if (data == '') {
          this.drawBorders();
        } else {
          var image = new Image();
          image.src = data;
          this.plan_png = data;
          image.onload = function () {
            context.drawImage(image, 0, 0);
          };
        }
      },
      drawBorders: function () {
        if (this.fieldborder > 0) {
          var canvas = this.$.plan;
          if (canvas.getContext) {
            var context = canvas.getContext('2d');
          }
          for (i = 1; i <= this.width; i++) {
            context.beginPath();
            context.moveTo((16 + this.fieldborder) * i - this.fieldborder / 2, 0);
            context.lineTo((16 + this.fieldborder) * i - this.fieldborder / 2, this.height * (16 + this.fieldborder) - this.fieldborder);
            context.lineWidth = this.fieldborder;
            context.strokeStyle = this.bordercolor;
            context.stroke();
          }
          for (i = 1; i <= this.height; i++) {
            context.beginPath();
            context.moveTo(0, (16 + this.fieldborder) * i - this.fieldborder / 2);
            context.lineTo(this.width * (16 + this.fieldborder) - this.fieldborder, (16 + this.fieldborder) * i - this.fieldborder / 2);
            context.lineWidth = this.fieldborder;
            context.strokeStyle = this.bordercolor;
            context.stroke();
          }
        }
      },
      _computeHeight: function (fieldborder, height) {
        return height * (16 + fieldborder) - fieldborder;
      },
      _computeWidth: function (fieldborder, width) {
        return width * (16 + fieldborder) - fieldborder;
      },
      _computeHref: function (imgurid) {
        return 'https://imgur.com/gallery/' + imgurid;
      }
    });
