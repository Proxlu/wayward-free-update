/*
Wayward Free 1.9.5 Update
Created by: Proxlu 2018

 */

items.redberries.use.push("plant")
items.redberries.onUse.plant = "bush"
environmentals.bush.spread = 8
environmentals.bush.allowedtiles = ["grass", "dirt","gravel"]
environmentals.bush.garden = true
environmentals.bush.resource = ["redberries"]

environmentals.pineappleplant.garden = true
environmentals.pineappleplant.spread = 8
environmentals.pineappleplant.allowedtiles = ["dirt","grass","sand"]
environmentals.pineappleplant.trample = true
items.pineapple.use.push("plant")
items.pineapple.onUse.plant = "pineappleplant"
items.pineapple.skilluse = "botany"

items.seaweed.use.push("plant")
items.seaweed.onUse.plant = "seaweed_ground"
environmentals.seaweed_ground.spread = 8
environmentals.seaweed_ground.garden = true

items.potion = new Object
items.potion.id = 0
items.potion.x = 0
items.potion.y = 0
items.potion.name = "Potion"
items.potion.weight = 0.3
items.potion.use = ["cure"]
items.potion.onUse = new Object
items.potion.onUse.cure = [15, 0, 0, 0]
items.potion.recipe = new Object
items.potion.recipe.requires =[["redberries", 3, 3]]
items.potion.recipe.skill = "alchemy"
items.potion.recipe.level = "intermediate"
items.potion.durability = 5

environmentals.campfire_lit.blockmove = true
environmentals.torchstand_lit.blockmove = true
environmentals.stonewaterstill_lit.blockmove = true
npcs.bear.special = false

$mainMenu = $('#main-menu');
$mainMenu.attr('title', Messages.mainMenu)
    .find('h3').text('Wayward Free 1.9.5');

$optionsWindow = $('#optionswindow');
$optionsWindow.attr('title', Messages.options);
$optionsWindow.find('.ui-dialog-titlebar').find('span').text(Messages.options);
$('#sound').text(Messages.sound);
$('#volumeopt').text(Messages.volume100);
$('#soundopt').text(Messages.soundOn);
$('#musicopt').text(Messages.musicOn);
$('#nextsong').text(Messages.nextSong);
$('#game-options').text(Messages.gameOptions);
$('#autogather').text(Messages.autoGatherOff);
$('#dropongather').text(Messages.dropOnGatherOn);
$('#autopickup').text(Messages.autoPickupOn);
$('#hintsopt').text(Messages.disableHints);
$('#fontstyle').text(Messages.pixelFont);
$('#gamesize').text(Messages.fullGameSize);
$('#animations').text(Messages.animationsOn);
$('#smoothmovement').text(Messages.smoothMovementOn);
$('#zoomin').text(Messages.zoomIn);
$('#zoomout').text(Messages.zoomOut);
$('#trusted').text('Map');

$("#optionswindow").on("click", '#showMap', function(e) {
	$("#map").show();
	e.preventDefault();
});

$("#optionswindow").on("click", '#closeMap', function(e) {
	$("#map").hide();
	e.preventDefault();
});

$("#optionswindow").append('<button type="button" id="showMap">Show Map</button>');
$("#optionswindow").append('<button type="button" id="closeMap">Close Map</button>');

$versionWindow = $('#versionwindow');
$versionWindow.attr('title', Messages.version)
    .find('p').text(Messages.versionInfo);
$versionWindow.find('.ui-dialog-titlebar').find('span').text(Messages.version);
$('#menuopen').text(Messages.mainMenu);
$('#helpopen').text(Messages.help);
$('#milestonesopen').text(Messages.milestones);
$('#messagesopen').text(Messages.messages);
$('#optionsopen').text(Messages.options);
$('#inventoryopen').text(Messages.inventory);
$('#craftopen').text(Messages.crafting);
$('#equipmentopen').text(Messages.equipment);
$('#skillsopen').text(Messages.skills);
$('#attack-label').text(Messages.attackLabel);
$('#defense-label').text(Messages.defenseLabel);
$('#talent-label').text(Messages.talentLabel);
$('#weight-label').text(Messages.weight);
$('#status-label').text(Messages.statusLabel);
$('#version-label').text('Wayward Free 1.9.5');
$('#code').attr('placeholder', Messages.code);
$('#run-code').text(Messages.runCode);
$('#actionsopen').text(Messages.actions);
$('#modding').text('Modding');

ui.options.smoothMovement = true
ui.options.autoGather = false

ui.$document.bind("keydown", function (e) {
if (e.keyCode == 90) {
ui.options.autoGather = true
}
});
ui.$document.bind("keyup", function (e) {
if (e.keyCode == 90) {
ui.options.autoGather = false
}
});