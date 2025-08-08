resultJson = {};
wrongAttempts = {};
timerMasterJson = {};
var cntValidate1 = 0;
//$("#spray").click(function() {
function spray(){
	$("#validateSp,#counter").prop("hidden",false);
	$("#validate,#validate1").prop("hidden",true);
	$("#headingDiv").prop("hidden",false);
	timerMasterJson.schema = $("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	updateCounter();

	htm = `
	
	 <div class="container-fluid">
	 
    <div class="row" id="result-div">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-2" style="border:2px solid black; overflow-y: scroll; height:760px" >
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">EQUIPMENT SYMBOLS</p>
		    </div>
              <div class="container-fluid mt-3" >
                <div class="row">
          
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="tank">
                            <img src="images/tank.png" alt="tank" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="pump">
                            <img src="images/pump.png" alt="pump" draggable="false">
                        </div>
                    </div>
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="heater">
                            <img src="images/heater.png" alt="heater" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="FDfan">
                            <img src="images/FD_fan.png" alt="FDfan" draggable="false">
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="component" draggable="true" data-type="IDfan">
                            <img src="images/ID_fan.png" alt="IDfan" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="Bfilter">
                            <img src="images/Bag_Filter.png" alt="Bfilter" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="chamber">
                            <img src="images/chamber.png" alt="chamber" draggable="false">
                        </div>
                    </div>
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="CYchamber">
                            <img src="images/cycloneSeperator.png" alt="CYchamber" draggable="false">
                        </div>
                    </div>
                    
                     
                   
                  
                </div>
            </div>
            
            <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">PROCESS CONNECTION / SIGNALS</p>
		    </div>
            
            <div class="container-fluid mt-3">
                <div class="row">
                
                    <div class="col-6">
                        <div class="component" draggable="true" data-type="solidHLine">
                            <img src="images/horizontalL.png" alt="solidHLine" draggable="false">
                        </div>
                    </div>
                    
                    <div class="col-6">
                        <div class="component" draggable="true" data-type="dasshedHLine">
                            <img src="images/dasshedHorizontal.png" alt="solidHLine" draggable="false">
                        </div>
                    </div>
                    
                    <div class="col-6" >
                        <div class="component" draggable="true" data-type="solidVLine" >
                            <img src="images/verticalL.png" alt="solidVLine" draggable="false" >
                        </div>
                    </div>
                    
                    <div class="col-6">
                        <div class="component" draggable="true" data-type="dasshedV">
                            <img src="images/dasshedVertical.png" alt="dasshedV" draggable="false">
                        </div>
                    </div> 
                    
                    
                    <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			  	 	<p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">UTILITIES</p>
		  		  </div>  
		  		  
		  		  <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="air">
                            <img src="images/airLabel.png" alt="air" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="valveOF">
                            <img src="images/instLabel.png" alt="valveOF" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="powder">
                            <img src="images/powLabel.png" alt="powder" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="raw">
                            <img src="images/rawLabel.png" alt="raw" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="out">
                            <img src="images/outLabel.png" alt="out" draggable="false" style="width: 50%;">
                        </div>
                    </div>   
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="hot">
                            <img src="images/hotLabel.png" alt="hot" draggable="false" style="width: 50%;">
                        </div>
                    </div>            
                                      
                    
                </div>
            </div>       
        </div>

        <!-- Main Content (10 columns) -->
        <div class="col-10" style="border:2px solid black;">
            <div id="diagram"></div>
        </div>
    </div>
</div>

`;


	$("#main-div").html(htm);
	//	$('#report').on('click', function() {
	//		$('#report').prop("hidden", true);
	//		html2canvas(document.querySelector("#main-div")).then(canvas => {
	//			// Append the screenshot canvas to the body
	//			document.body.appendChild(canvas);
	//			$("canvas").css("display", "none");
	//			// Optionally save the screenshot as an image
	//			var link = document.createElement('a');
	//			link.download = 'Instr_Index_sheet.png';
	//			link.href = canvas.toDataURL();
	//			link.click();
	//		});
	//	});

//	$("#btnNext").click(function() {
//		console.log('indexsheet');
//		indexsheet();
//
//	});

//	$("#report").click(function() {
//		result();
//		downloadImg();
//	});

	//   $("#validate").prop("hidden", false);
	//   $("#next").prop("hidden", false);

	// Define virtual canvas size
	var virtualWidth = 1200;
	var virtualHeight = 700;

	// Create Raphael canvas that fills the container
	const paper = Raphael("diagram", "100%", "100%");

	// Set viewBox for responsive scaling
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");

	let placedElements = [];
	var wrongCnt = 0;
	var wrongAttempts = 0;

	var x = 100, y = 100;
	var dropTolerance = 20; // User-defined tolerance for dropping near a rectangle
	
	
		var feedTankLabel = paper.text((x + 250), (y - 70), "Spray Dryer Plant").attr({
		"font-size": 18, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	// Draw tank
//	var tank = paper.path("M" + (x - 70) + " " + (y + 70) + "  l 90 0 l 0 -90 l -25 -25 l 0 -15 l -40 0 l 0 15 l -25 25 z");
//	tank.attr({
//		stroke: "#000",
//		"stroke-width": 2,
//		fill: "#fff"
//	});


//	var pump = paper.image("images/pump.png", (x + 85), (y + 138), 54, 54);

//	var afterPump = paper.path("M" + (x + 135) + " " + (y + 151) + " l 45 0 l 0 -136 l 223.1 0 l 0 17.2").attr({ "stroke-width": 2 });
//	var sv1Path = paper.path("M" + (x + 403) + " " + (y + 15) + " l 0 -32 l 57 0").attr({ "stroke-width": 2 });
//	var sv2Path = paper.path("M" + (x + 403) + " " + (y + 64.2) + " l 0 -32 l 57 0").attr({ "stroke-width": 2 });

//	var n1 = paper.path("M" + (x + 473) + " " + (y - 34) + "l 0 -7.5").attr({ "stroke-width": 2 });
//	var n2 = paper.path("M" + (x + 475) + " " + (y + 52) + "l 0 5.5").attr({ "stroke-width": 2 });

//	var svValve1 = paper.image("images/Solenoid_Valve.png", (x + 457), (y - 39), 34, 34);
//	var svValve2 = paper.image("images/Solenoid_ValveOpp.png", (x + 457), (y + 20), 34, 34);

//	var connectingLinesPump = paper.path("M" + (x - 25) + " " + (y + 70) + " l 0 95 l 118 0").attr({ "stroke-width": 2 });

//	var fdFan = paper.image("images/FD_fan.png", (x + 85), (y + 300), 54, 54);

//	var fdFanPath = paper.path("M" + (x - 25) + " " + (y + 327) + " l 110 0" + "M" + (x + 138) + " " + (y + 327) + " l 90 0 l 0 -150").attr({ "stroke-width": 2 });

//	var heater = paper.image("images/heater.png", (x + 198), (y + 100), 60, 100);

//	var afterHeating = paper.path("M" + (x + 227) + " " + (y + 110) + " l 0 -78 l 176 0 l 0 57	" + "M" + (x + 489) + " " + (y + 32) + " l 60 0 l 0 -50 l -61 0" + "M" + (x + 550) + " " + (y + 8.1) + "l 60 0").attr({ "stroke-width": 2 }).toFront();

//	var chamber = paper.image("images/chamber.png", (x + 345), (y + 85), 120, 200);

//	var afterChamber = paper.path("M" + (x + 407.5) + " " + (y + 285) + " l 0 82 l 110 0 l 0 -82 l 54 0").attr({ "stroke-width": 2 }).toFront();

//	var cyChamber = paper.image("images/cycloneSeperator.png", (x + 570), (y + 250), 75, 150);
//	var aftercyChamber = paper.path("M" + (x + 606) + " " + (y + 252) + " l 0 -50 l 90 0").attr({ "stroke-width": 2 }).toFront();

//	var bagFilter = paper.image("images/Bag_Filter.png", (x + 680), (y + 180), 50, 150);
//	var afterbagFilter = paper.path("M" + (x + 705) + " " + (y + 182) + " l 0 -55 l 115 0").attr({ "stroke-width": 2 }).toFront();

//	var IdFan = paper.image("images/ID_fan.png", (x + 820), (y + 100), 54, 54);
	var afterIdFan = paper.path("M" + (x + 874) + " " + (y + 128) + " l 30 0 l 0 -90").attr({ "stroke-width": 2 }).toFront();

	var chimney = paper.path("M" + (x + 889) + " " + (y + 38) + " l 30 0 l -15 -30 z").attr({ "stroke-width": 2 }).toFront();

//	var feedTankLabel = paper.text((x - 25), (y + 10), "Feed Tank").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();

//	var pumpLabel = paper.text((x + 108), (y + 125), "Pump").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();

//	var heaterLabel = paper.text((x + 280), (y + 140), "Heater").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();
//
//	var heaterLabel1 = paper.text((x + 280), (y + 157), "with SCR").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();
//
//	var fdLabel = paper.text((x + 108), (y + 286), "FD Fan").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();
//
//
//	var IdLabel = paper.text((x + 850), (y + 168), "ID Fan").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();
//
//	var chimneyLabel = paper.text((x + 910), (y - 5), "Chimney").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();
//
//
//	var compressorLabel = paper.text((x + 630), (y + 20), "From Compressor").attr({
//		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
//		"fill": "#4d4949", "text-anchor": "middle"
//	}).toFront();



	// Function to validate if the drop coordinates are close enough to predefined points
	function isValidDrop(dropX, dropY) {
		return predefinedPaths1.some(path =>
			Math.abs(path.x - dropX) <= 3 && Math.abs(path.y - dropY) <= 3
		);
	}

	// Define Predefined Paths Vertical lines
	var predefinedPaths1 = [
		
		{ x: (x - 25), y: (y + 70), dashed: false, validate: true }, //solid line correct
		{ x: (x + 185), y: (y + 151), dashed: false, validate: true },
		{ x: (x + 228), y: (y + 327), dashed: false, validate: true },
		{ x: (x + 227), y: (y + 110), dashed: false, validate: true },
//		{ x: (x + 549), y: (y + 32), dashed: false, validate: true },
		{ x: (x + 405), y: (y - 15), dashed: false, validate: true },
		{ x: (x + 407.5), y: (y + 285), dashed: false, validate: true },
		{ x: (x + 705), y: (y + 182), dashed: false, validate: true },
		{ x: (x + 606), y: (y + 252), dashed: false, validate: true },
	
		
	];

	// Draw Paths for Predefined Locations
	// Draw Paths for Predefined Locations
	predefinedPaths1.forEach(path => {
		let lineLength = (Math.round(path.x) === Math.round(x + 205) && Math.round(path.y) === Math.round(y + 380))
			? -52
			: (Math.round(path.x) === Math.round(x + 833) && Math.round(path.y) === Math.round(y + 100))
				? -70
			:(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 70)) ? 90	:
			(Math.round(path.x) === Math.round(x + 185) && Math.round(path.y) === Math.round(y + 151))? -140 :
			(Math.round(path.x) === Math.round(x + 228) && Math.round(path.y) === Math.round(y + 327))? -148 :
			 (Math.round(path.x) === Math.round(x + 227) && Math.round(path.y) === Math.round(y + 110))? -78 
			:(Math.round(path.x) === Math.round(x + 549) && Math.round(path.y) === Math.round(y + 32))? -60 
			:(Math.round(path.x) === Math.round(x + 405) && Math.round(path.y) === Math.round(y - 15))? 100 
			:(Math.round(path.x) === Math.round(x + 407.5) && Math.round(path.y) === Math.round(y + 285))? 85
			:(Math.round(path.x) === Math.round(x + 705) && Math.round(path.y) === Math.round(y + 182))? -55
			:(Math.round(path.x) === Math.round(x + 606) && Math.round(path.y) === Math.round(y + 252))? -55
				: -28; // Apply -70 only for the specific path

		paper.path(`M${path.x} ${path.y} l 0 ${lineLength}`).attr({
			stroke: "#cccfcd",
			"stroke-width": 3, opacity: 0.7
		}).toBack();
	});


	// Define Dashed Paths with Validation
	var predefinedPaths2 = [
		{ x: (x - 25), y: (y + 70), dashed: true, validate: false }, //solid line correct
		{ x: (x + 185), y: (y + 151), dashed: true, validate: false },
		{ x: (x + 228), y: (y + 327), dashed: true, validate: false },
		{ x: (x + 227), y: (y + 110), dashed: true, validate: false },
//		{ x: (x + 549), y: (y + 32), dashed: true, validate: false },
		{ x: (x + 405), y: (y - 15), dashed: true, validate: false },
		{ x: (x + 407.5), y: (y + 285), dashed: true, validate: false },
		{ x: (x + 705), y: (y + 182), dashed: true, validate: false },
		{ x: (x + 606), y: (y + 252), dashed: true, validate: false },
	];

	// Draw Dashed Paths
	// Draw Dashed Paths for Predefined Locations
	predefinedPaths2.forEach(path => {
		let lineLength = 
			(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 70)) ? 90	:
			(Math.round(path.x) === Math.round(x + 185) && Math.round(path.y) === Math.round(y + 151))? -140 :
			(Math.round(path.x) === Math.round(x + 228) && Math.round(path.y) === Math.round(y + 327))? -148 :
			 (Math.round(path.x) === Math.round(x + 227) && Math.round(path.y) === Math.round(y + 110))? -78 
			:(Math.round(path.x) === Math.round(x + 549) && Math.round(path.y) === Math.round(y + 32))? -60 
			:(Math.round(path.x) === Math.round(x + 405) && Math.round(path.y) === Math.round(y - 15))? 100 
			:(Math.round(path.x) === Math.round(x + 407.5) && Math.round(path.y) === Math.round(y + 285))? 85
			:(Math.round(path.x) === Math.round(x + 705) && Math.round(path.y) === Math.round(y + 182))? -55
			:(Math.round(path.x) === Math.round(x + 606) && Math.round(path.y) === Math.round(y + 252))? -55
			: -28; // Apply -70 only for the specific path

		paper.path(`M${path.x} ${path.y} l 0 ${lineLength}`).attr({
			stroke: "#cccfcd",
			"stroke-width": 2,
			"stroke-dasharray": path.dashed ? "-" : "" // Dashed line styling
			, opacity: 0.1
		}).toBack();
	});


	// Debugging: Print Allowed Drop Positions
	console.log("Expected drop locations:");
	predefinedPaths1.forEach(path => {
		console.log(`x=${path.x}, y=${path.y}`);
	});


	// Drop zones
	const dropZones = [
		{ x: (x - 70), y: (y - 36), width: 100, height: 105, type: "tank", occupied: false },
		{ x: (x + 82), y: (y + 130), width: 50, height: 50, type: "pump", occupied: false },
		{ x: (x + 210), y: (y + 110), width: 40, height: 69, type: "heater", occupied: false },
		{ x: (x + 85), y: (y + 300), width: 54, height: 54, type: "FDfan", occupied: false },
		{ x: (x + 820), y: (y + 100), width: 54, height: 54, type: "IDfan", occupied: false },
		{ x: (x + 680), y: (y + 180), width: 50, height: 150, type: "Bfilter", occupied: false },
		{ x: (x + 345), y: (y + 85), width: 120, height: 200, type: "chamber", occupied: false },
		{ x: (x + 570), y: (y + 250), width: 75, height: 150, type: "CYchamber", occupied: false },
		{ x: (x + 457), y: (y + 20), width: 70, height: 40, type: "valveOF", occupied: false },
		{ x: (x - 60), y: (y - 80), width: 70, height: 30, type: "raw", occupied: false },
		{ x: (x + 30), y: (y + 280), width: 34, height: 34, type: "air", occupied: false },
		{ x: (x + 235), y: (y + 50), width: 40, height: 30, type: "hot", occupied: false },
		{ x: (x + 580), y: (y + 410), width: 55, height: 30, type: "powder", occupied: false },
		{ x: (x + 680), y: (y + 350), width: 55, height: 30, type: "powder", occupied: false },
		{ x: (x + 920), y: (y + 80), width: 55, height: 30, type: "out", occupied: false },
	];

	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#cccfcd",
			"stroke-width": 1, opacity: 0.7
		});
	});


	// Predefined paths horizontal solid lines
	var predefinedPaths = [
		{ x: (x - 25), y: (y  + 160), dashed: false, validate: true },
		{ x: (x + 134), y: (y + 151), dashed: false, validate: true },
		{ x: (x + 185), y: (y + 10), dashed: false, validate: true },
		{ x: (x - 25), y: (y + 327), dashed: false, validate: true },
		{ x: (x + 138), y: (y + 327), dashed: false, validate: true },
		{ x: (x + 227), y: (y + 32), dashed: false, validate: true },
//		{ x: (x + 489), y: (y + 32), dashed: false, validate: true },
//		{ x: (x + 489), y: (y - 28), dashed: false, validate: true },
//		{ x: (x + 550), y: (y + 8.1), dashed: false, validate: true },
//		{ x: (x + 403), y: (y - 15), dashed: false, validate: true },
		{ x: (x + 403), y: (y + 35), dashed: false, validate: true },
		{ x: (x + 407.5), y: (y + 370), dashed: false, validate: true },
		{ x: (x + 705), y: (y + 127), dashed: false, validate: true },
		{ x: (x + 606), y: (y + 198), dashed: false, validate: true }
	];

	predefinedPaths.forEach((path, index) => {
		// Check if it's one of the last two paths in the array
		let lineLength = 
//		(index >= predefinedPaths.length - 2) ? 25 
		(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 160))
				? 105 : 
		(Math.round(path.x) === Math.round(x + 135) && Math.round(path.y) === Math.round(y + 151))
				? 47 	
		:(Math.round(path.x) === Math.round(x + 185) && Math.round(path.y) === Math.round(y + 10))
				? 220
		:(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 327))
				? 110
		:(Math.round(path.x) === Math.round(x + 138) && Math.round(path.y) === Math.round(y + 327))
			? 90
			
		:(Math.round(path.x) === Math.round(x + 227) && Math.round(path.y) === Math.round(y + 32))
			? 176
		:(Math.round(path.x) === Math.round(x + 489) && Math.round(path.y) === Math.round(y + 32))
			? 60
		:(Math.round(path.x) === Math.round(x + 489) && Math.round(path.y) === Math.round(y - 28))
			? 60
		:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 8.1))
			? 60	
		:(Math.round(path.x) === Math.round(x + 403) && Math.round(path.y) === Math.round(y - 15))
			? 55	
		:(Math.round(path.x) === Math.round(x + 403) && Math.round(path.y) === Math.round(y + 35))
			? 55
		:(Math.round(path.x) === Math.round(x + 407.5) && Math.round(path.y) === Math.round(y + 370))
			? 160
		:(Math.round(path.x) === Math.round(x + 705) && Math.round(path.y) === Math.round(y + 127))
			? 115	
		:(Math.round(path.x) === Math.round(x + 606) && Math.round(path.y) === Math.round(y + 198))
			? 75							
		:50;

		let pathElement = paper.path(`M${path.x} ${path.y} l ${lineLength} 0`).attr({
			stroke: "#cccfcd",
			"stroke-width": 3, opacity: 0.7
		});
	});


	//    predefinedPaths.forEach(path => {
	//            paper.path(`M${path.x} ${path.y} l 50 0`).attr({
	//                stroke: "#cccfcd",
	//                "stroke-width": 2
	//            }).toBack();
	//        });


	var predefinedPaths3 = [
		{ x: (x - 25), y: (y  + 160), dashed: true, validate: false },
		{ x: (x + 134), y: (y + 151), dashed: true, validate: false },
		{ x: (x + 185), y: (y + 10), dashed: true, validate: false },
		{ x: (x - 25), y: (y + 327), dashed: true, validate: false },
		{ x: (x + 138), y: (y + 327), dashed: true, validate: false },
		{ x: (x + 227), y: (y + 32), dashed: true, validate: false },
//		{ x: (x + 489), y: (y + 32), dashed: true, validate: false },
//		{ x: (x + 489), y: (y - 28), dashed: true, validate: false },
//		{ x: (x + 550), y: (y + 8.1), dashed: true, validate: false },
//		{ x: (x + 403), y: (y - 15), dashed: true, validate: false },
		{ x: (x + 403), y: (y + 35), dashed: true, validate: false },
		{ x: (x + 407.5), y: (y + 370), dashed: true, validate: false },
		{ x: (x + 705), y: (y + 127), dashed: true, validate: false },
		{ x: (x + 606), y: (y + 198), dashed: true, validate: false }
	];

	predefinedPaths3.forEach((path, index) => {
		// Check if it's one of the last two paths
		let lineLength = (Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 160))
				? 105 : 
		(Math.round(path.x) === Math.round(x + 135) && Math.round(path.y) === Math.round(y + 151))
				? 47 	
		:(Math.round(path.x) === Math.round(x + 185) && Math.round(path.y) === Math.round(y + 10))
				? 220
		:(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 327))
				? 110
		:(Math.round(path.x) === Math.round(x + 138) && Math.round(path.y) === Math.round(y + 327))
			? 90
			
		:(Math.round(path.x) === Math.round(x + 227) && Math.round(path.y) === Math.round(y + 32))
			? 176
		:(Math.round(path.x) === Math.round(x + 489) && Math.round(path.y) === Math.round(y + 32))
			? 60
		:(Math.round(path.x) === Math.round(x + 489) && Math.round(path.y) === Math.round(y - 28))
			? 60
		:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 8.1))
			? 60	
		:(Math.round(path.x) === Math.round(x + 403) && Math.round(path.y) === Math.round(y - 15))
			? 55	
		:(Math.round(path.x) === Math.round(x + 403) && Math.round(path.y) === Math.round(y + 35))
			? 55
		:(Math.round(path.x) === Math.round(x + 407.5) && Math.round(path.y) === Math.round(y + 370))
			? 160
		:(Math.round(path.x) === Math.round(x + 705) && Math.round(path.y) === Math.round(y + 127))
			? 115	
		:(Math.round(path.x) === Math.round(x + 606) && Math.round(path.y) === Math.round(y + 198))
			? 75 :50;

		let pathElement3 = paper.path(`M${path.x} ${path.y} l ${lineLength} 0`).attr({
			stroke: "#cccfcd",
			"stroke-width": 2,
			"stroke-dasharray": path.dashed ? "-" : "", opacity: 0.1
		});
	});


	//    predefinedPaths3.forEach(path => {
	//            paper.path(`M${path.x} ${path.y} l 50 0`).attr({
	//                stroke: "#cccfcd",
	//                "stroke-width": 2 ,"stroke-dasharray": path.dashed ? "-" : "" // Dashed line styling
	//            }).toBack();
	//        });

	// Convert screen coordinates to SVG coordinates

	function getSVGCoordinates(e) {
		let svgRect = paper.canvas.getBoundingClientRect();
		let scaleX = virtualWidth / svgRect.width;
		let scaleY = virtualHeight / svgRect.height;

		let svgX = (e.clientX - svgRect.left) * scaleX;
		let svgY = (e.clientY - svgRect.top) * scaleY;

		console.log(`SVG Coordinates: x=${svgX}, y=${svgY}`); // Debugging log

		return { x: svgX, y: svgY };
	}


	// Handle dragging of components
	document.querySelectorAll(".component").forEach(component => {
		component.addEventListener("dragstart", (e) => {
			e.dataTransfer.setData("imgSrc", component.querySelector("img")?.src || ""); // Allow both images & paths
			e.dataTransfer.setData("type", component.getAttribute("data-type"));
		});
	});

	document.getElementById("diagram").addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	document.getElementById("diagram").addEventListener("drop", (e) => {
		e.preventDefault();
		const imgSrc = e.dataTransfer.getData("imgSrc");
		const draggedType = e.dataTransfer.getData("type");

		let dropPoint = getSVGCoordinates(e);

		// 🔹 Improved solidHLine drop handling with better tolerance
		if (draggedType === "solidHLine") {
			let closestPath = predefinedPaths.find(path =>{
			let lineLength = (path.x === (x - 25) && path.y === (y + 160))
					? -52 :
					((path.x) === (x + 134) && (path.y) ===(y + 151))? 47 
					:((path.x) === (x + 185) && (path.y) === (y + 10))? 220
					:((path.x) ===(x - 25) && (path.y) === (y + 327))
						? 110
					:((path.x) === (x + 138) && (path.y) === (y + 327))
					? 90
			
			
				:((path.x) === (x + 227) && (path.y) === (y + 32))
					? 176
				:((path.x) === (x + 489) && (path.y) === (y + 32))
				? 60
				:((path.x) === (x + 489) && (path.y) === (y - 28))
					? 60
				:((path.x) === (x + 550) && (path.y) === (y + 8.1))
					? 60
				:((path.x) === (x + 407.5) && (path.y) === (y + 370))
				? 160	
				:((path.x) === (x + 705) && (path.y) === (y + 127))
				? 115	
				:((path.x) === (x + 606) && (path.y) === (y + 198))
					? 75
					: 50;
			
			
			return(
				dropPoint.x >= (path.x - dropTolerance) &&
				dropPoint.x <= (path.x + 50 + dropTolerance) &&
				dropPoint.y >= (path.y - dropTolerance) &&
				dropPoint.y <= (path.y + dropTolerance)
				);
			});

			if (closestPath) {
				// 🔹 Determine if it's one of the last two paths
				let pathIndex = predefinedPaths.indexOf(closestPath);
				let isLastTwoPaths = pathIndex >= predefinedPaths.length - 2;
				let lineLength = (closestPath.x === (x - 25) && closestPath.y === (y + 160))
				? 105 : 
				((closestPath.x) === (x + 134) && (closestPath.y) ===(y + 151))? 47 :
				((closestPath.x) === (x + 185) && (closestPath.y) === (y + 10))? 220 :
				((closestPath.x) ===(x - 25) && (closestPath.y) === (y + 327))? 110
				:((closestPath.x) === (x + 138) && (closestPath.y) === (y + 327))? 90:
				((closestPath.x) === (x + 227) && (closestPath.y) === (y + 32))? 176
				:((closestPath.x) === (x + 489) && (closestPath.y) === (y + 32))? 60
				:((closestPath.x) === (x + 489) && (closestPath.y) === (y - 28))? 60
				:((closestPath.x) === (x + 550) && (closestPath.y) === (y + 8.1))? 60:
				((closestPath.x) === (x + 407.5) && (closestPath.y) === (y + 370))? 160:
				((closestPath.x) === (x + 705) && (closestPath.y) === (y + 127))? 115	
				:((closestPath.x) === (x + 606) && (closestPath.y) === (y + 198))? 75
				:50;

				let pathElement = paper.path(`M${closestPath.x} ${closestPath.y} l ${lineLength} 0`).attr({
					stroke: "#000",
					"stroke-width": 3
				});

				// 🔹 Create a larger, transparent clickable area
				let clickableArea = paper.rect(closestPath.x, closestPath.y - 5, lineLength, 10).attr({
					fill: "rgba(0,0,0,0)", // Transparent but clickable
					stroke: "none",
					cursor: "pointer"
				});

				clickableArea.click(() => {
					pathElement.remove();
					clickableArea.remove();
					placedElements = placedElements.filter(el => el !== pathElement && el !== clickableArea);
					wrongCnt++;
				});

				placedElements.push(pathElement);
				placedElements.push(clickableArea);
			}
			return;
		}




		// 🔹 Improved solidVLine drop handling with better tolerance
		if (draggedType === "solidVLine") {
			let closestPath1 = predefinedPaths1.find(path => {
				let lineLength = 
					(path.x === (x - 25) && path.y === (y + 70)) ? 90	:	
					(path.x === (x + 185) && path.y === (y + 151))? -140 :
					((path.x) === (x + 228) && (path.y) === (y + 327))? -148:
					 ((path.x) === (x + 227) && (path.y) === (y + 110))? -78 
					:((path.x) === (x + 549) && (path.y) === (y + 32))? -60 :
					((path.x) === (x + 405) && (path.y) === (y - 15))? 100 :
					((path.x) === (x + 407.5) && (path.y) === (y + 285))? 85:
					((path.x) === (x + 705) && (path.y) === (y + 182))? -55
					:((path.x) === (x + 606) && (path.y) === (y + 252))? -55
					: -28;

				let topY = path.y;
				let bottomY = path.y + lineLength; // lineLength is negative, so this is lower on the screen

				// Ensure topY is actually the top
				if (bottomY < topY) [topY, bottomY] = [bottomY, topY];

				return (
					dropPoint.x >= (path.x - dropTolerance) &&
					dropPoint.x <= (path.x + 50 + dropTolerance) &&
					dropPoint.y >= (topY - dropTolerance) &&
					dropPoint.y <= (bottomY + dropTolerance)
				);
			});

			if (closestPath1) {
				let lineLength = (closestPath1.x === (x + 205) && closestPath1.y === (y + 380))
					? -52
					: (closestPath1.x === (x + 833) && closestPath1.y === (y + 100))
						? -70
					:(closestPath1.x === (x - 25) && closestPath1.y === (y + 70)) ? 90			
					 : (closestPath1.x === (x + 185) && closestPath1.y === (y + 151))? -140 
					: ((closestPath1.x) === (x + 228) && (closestPath1.y) === (y + 327))? -148
					 :((closestPath1.x) === (x + 227) && (closestPath1.y) === (y + 110))? -78 
					:((closestPath1.x) === (x + 549) && (closestPath1.y) === (y + 32))? -60 :
					((closestPath1.x) === (x + 405) && (closestPath1.y) === (y - 15))? 100 :
					((closestPath1.x) === (x + 407.5) && (closestPath1.y) === (y + 285))? 85:
					((closestPath1.x) === (x + 705) && (closestPath1.y) === (y + 182))? -55
					:((closestPath1.x) === (x + 606) && (closestPath1.y) === (y + 252))? -55 :
					 -28;

				let pathElement1 = paper.path(`M${closestPath1.x} ${closestPath1.y} l 0 ${lineLength}`).attr({
					stroke: "#000", "stroke-width": 3
				});

				let clickableArea1 = paper.rect(
					closestPath1.x - 5,
					lineLength < 0 ? closestPath1.y + lineLength : closestPath1.y,
					10,
					Math.abs(lineLength)
				).attr({
					fill: "rgba(0,0,0,0)",
					stroke: "none",
					cursor: "pointer"
				});

				clickableArea1.click(() => {
					pathElement1.remove();
					clickableArea1.remove();
					placedElements = placedElements.filter(el => el !== pathElement1 && el !== clickableArea1);
					wrongCnt++;
				});

				placedElements.push(pathElement1);
				placedElements.push(clickableArea1);
			}

			return;
		}


		if (draggedType === "dasshedV") {
			let closestPath2 = predefinedPaths2.find(path => {
				let lineLength = ((path.x) === (x - 25) && (path.y) === (y + 70)) ? 90	:
			((path.x) === (x + 185) && (path.y) === (y + 151))? -140 :
			((path.x) === (x + 228) && (path.y) === (y + 327))? -148 :
			 ((path.x) === (x + 227) && (path.y) === (y + 110))? -78 
			:((path.x) === (x + 549) && (path.y) === (y + 32))? -60 
			:((path.x) === (x + 405) && (path.y) === (y - 15))? 100 
			:((path.x) === (x + 407.5) && (path.y) === (y + 285))? 85
			:((path.x) === (x + 705) && (path.y) === (y + 182))? -55
			:((path.x) === (x + 606) && (path.y) === (y + 252))? -55
			: -28;

				let topY = path.y;
				let bottomY = path.y + lineLength;

				if (bottomY < topY) [topY, bottomY] = [bottomY, topY];

				return (
					dropPoint.x >= (path.x - dropTolerance) &&
					dropPoint.x <= (path.x + 50 + dropTolerance) &&
					dropPoint.y >= (topY - dropTolerance) &&
					dropPoint.y <= (bottomY + dropTolerance)
				);
			});

			if (closestPath2) {
				let lineLength = (closestPath2.x === (x - 25) && closestPath2.y === (y + 70)) ? 90			
					 : (closestPath2.x === (x + 185) && closestPath2.y === (y + 151))? -140 
					: ((closestPath2.x) === (x + 228) && (closestPath2.y) === (y + 327))? -148
					 :((closestPath2.x) === (x + 227) && (closestPath2.y) === (y + 110))? -78 
					:((closestPath2.x) === (x + 549) && (closestPath2.y) === (y + 32))? -60 :
					((closestPath2.x) === (x + 405) && (closestPath2.y) === (y - 15))? 100 :
					((closestPath2.x) === (x + 407.5) && (closestPath2.y) === (y + 285))? 85:
					((closestPath2.x) === (x + 705) && (closestPath2.y) === (y + 182))? -55
					:((closestPath2.x) === (x + 606) && (closestPath2.y) === (y + 252))? -55 :
					 -28;

				let pathElement2 = paper.path(`M${closestPath2.x} ${closestPath2.y} l 0 ${lineLength}`).attr({
					stroke: "#000",
					"stroke-width": 2,
					"stroke-dasharray": closestPath2.dashed ? "-" : ""
				});

				let clickableArea2 = paper.rect(
					closestPath2.x - 5,
					lineLength < 0 ? closestPath2.y + lineLength : closestPath2.y,
					10,
					Math.abs(lineLength)
				).attr({
					fill: "rgba(0,0,0,0)",
					stroke: "none",
					cursor: "pointer"
				});

				clickableArea2.click(() => {
					pathElement2.remove();
					clickableArea2.remove();
					placedElements = placedElements.filter(el => el !== pathElement2 && el !== clickableArea2);
					wrongCnt++;
				});

				placedElements.push(pathElement2);
				placedElements.push(clickableArea2);
			}

			return;
		}



		//paste here

		if (draggedType === "dasshedHLine") {


			let closestPath3 = predefinedPaths3.find(path => {
				let lineLength = ((path.x) === (x - 25) && (path.y) === (y + 70)) ? 90	:
			((path.x) === (x + 185) && (path.y) === (y + 151))? -140 :
			((path.x) === (x + 228) && (path.y) === (y + 327))? -148 :
			 ((path.x) === (x + 227) && (path.y) === (y + 110))? -78 
			:((path.x) === (x + 549) && (path.y) === (y + 32))? -60 
			:((path.x) === (x + 405) && (path.y) === (y - 15))? 100 
			:((path.x) === (x + 407.5) && (path.y) === (y + 285))? 85
			:((path.x) === (x + 705) && (path.y) === (y + 182))? -55
			:((path.x) === (x + 606) && (path.y) === (y + 252))? -55
			: -28;

				let topY = path.y;
				let bottomY = path.y + lineLength;

				if (bottomY < topY) [topY, bottomY] = [bottomY, topY];
				
			return(
				dropPoint.x >= (path.x - dropTolerance) &&
				dropPoint.x <= (path.x + 50 + dropTolerance) &&
				dropPoint.y >= (path.y - dropTolerance) &&
				dropPoint.y <= (path.y + dropTolerance)
			);
			
			});

			if (closestPath3) {
				// 🔹 Determine if it's one of the last two paths
				let pathIndex = predefinedPaths3.indexOf(closestPath3);
				let isLastTwoPaths = pathIndex >= predefinedPaths.length - 2;
				let lineLength = (closestPath3.x === (x - 25) && closestPath3.y === (y + 160))
					? 105 :
					((closestPath3.x) === (x - 25) && (closestPath3.y) === (y + 70)) ? 90	:
					((closestPath3.x) === (x + 134) && (closestPath3.y) ===(y + 151))? 47 
					:((closestPath3.x) === (x + 185) && (closestPath3.y) === (y + 10))? 220
					:((closestPath3.x) ===(x - 25) && (closestPath3.y) === (y + 327))
						? 110
					:((closestPath3.x) === (x + 138) && (closestPath3.y) === (y + 327))
					? 90
			
			
				:((closestPath3.x) === (x + 227) && (closestPath3.y) === (y + 32))
					? 176
				:((closestPath3.x) === (x + 489) && (closestPath3.y) === (y + 32))
				? 60
				:((closestPath3.x) === (x + 489) && (closestPath3.y) === (y - 28))
					? 60
				:((closestPath3.x) === (x + 550) && (closestPath3.y) === (y + 8.1))
					? 60
				:((closestPath3.x) === (x + 407.5) && (closestPath3.y) === (y + 370))
				? 160	
				:((closestPath3.x) === (x + 705) && (closestPath3.y) === (y + 127))
				? 115	
				:((closestPath3.x) === (x + 606) && (closestPath3.y) === (y + 198))
					? 75
					: 50;

				let pathElement3 = paper.path(`M${closestPath3.x} ${closestPath3.y} l ${lineLength} 0`).attr({
					stroke: "#000",
					"stroke-width": 2, "stroke-dasharray": closestPath3.dashed ? "-" : ""
				});

				// 🔹 Create a larger, transparent clickable area
				let clickableArea3 = paper.rect(closestPath3.x, closestPath3.y - 5, lineLength, 10).attr({
					fill: "rgba(0,0,0,0)", // Transparent but clickable
					stroke: "none",
					cursor: "pointer"
				});

				clickableArea3.click(() => {
					pathElement3.remove();
					clickableArea3.remove();
					placedElements = placedElements.filter(el => el !== pathElement3 && el !== clickableArea3);
					wrongCnt++;
				});

				placedElements.push(pathElement3);
				placedElements.push(clickableArea3);
			}
			return;




			//		let closestPath3 = predefinedPaths3.find(path =>
			//        dropPoint.x >= (path.x - dropTolerance) &&
			//        dropPoint.x <= (path.x + 50 + dropTolerance) &&
			//        dropPoint.y >= (path.y - dropTolerance) &&
			//        dropPoint.y <= (path.y + dropTolerance)
			//    );
			//
			//    if (closestPath3) {
			//        // 🔹 Determine if it's the last path
			//        let isLastPath = predefinedPaths3.indexOf(closestPath3) === predefinedPaths3.length - 1;
			//        let lineLength = isLastPath ? 25 : 50;
			//
			//        let pathElement3 = paper.path(`M${closestPath3.x} ${closestPath3.y} l ${lineLength} 0`).attr({
			//            stroke: "#000", 
			//            "stroke-width": 2,"stroke-dasharray": closestPath3.dashed ? "-" : ""
			//        });
			//
			//        // 🔹 Create a larger, transparent clickable area
			//        let clickableArea3 = paper.rect(closestPath3.x, closestPath3.y - 5, lineLength, 10).attr({
			//            fill: "rgba(0,0,0,0)", // Transparent but clickable
			//            stroke: "none", 
			//            cursor: "pointer"
			//        });
			//
			//        clickableArea3.click(() => {
			//            pathElement3.remove();
			//            clickableArea3.remove();
			//            placedElements = placedElements.filter(el => el !== pathElement3 && el !== clickableArea3);
			//            wrongCnt++;
			//        });
			//
			//        placedElements.push(pathElement3);
			//        placedElements.push(clickableArea3);
			//    }
			//    return;


		}





		// 🔹 Handle image drop with tolerance
		let validDrop = dropZones.find(zone =>
			dropPoint.x >= (zone.x - dropTolerance) &&
			dropPoint.x <= (zone.x + zone.width + dropTolerance) &&
			dropPoint.y >= (zone.y - dropTolerance) &&
			dropPoint.y <= (zone.y + zone.height + dropTolerance) &&
			!zone.occupied
		);

		if (validDrop) {
			let imgElement = paper.image(imgSrc, validDrop.x, validDrop.y, validDrop.width, validDrop.height).attr({ cursor: "pointer" });
			imgElement.data("type", draggedType);

			imgElement.click(() => {
				imgElement.remove();
				validDrop.occupied = false;
				wrongCnt++;
			});

			validDrop.occupied = true;
			placedElements.push(imgElement);
		}
	});

	// Validation on button click
	document.getElementById("validateSp").addEventListener("click", () => {
		cntValidate1++;
		console.log(wrongCnt);
		console.log(wrongAttempts);

		let validImages = dropZones.every(zone =>
			placedElements.some(el => el.attrs &&
				el.attrs.x === zone.x && el.attrs.y === zone.y &&
				el.data("type") === zone.type)
		);

		//	    let validPaths = predefinedPaths.every(path =>
		//	        placedElements.some(el => el.attrs && el.attrs.path &&
		//	            el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y)
		//	    );

		let validPaths = predefinedPaths
			.filter(path => path.validate) // Only check paths marked as true
			.every(path =>
				placedElements.some(el =>
					el.attrs && el.attrs.path &&
					el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y &&
					(
						(path.dashed && el.attrs["stroke-dasharray"] === "-") || // Dashed line validation
						(!path.dashed && el.attrs["stroke-dasharray"] === undefined) // Solid line validation
					)
				)
			);



		//	    let validPaths1 = predefinedPaths1.every(path =>
		//	        placedElements.some(el => el.attrs && el.attrs.path &&
		//	            el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y)
		//	    );


		let validPaths1 = predefinedPaths1
			.filter(path => path.validate) // Only check paths marked as true
			.every(path =>
				placedElements.some(el =>
					el.attrs && el.attrs.path &&
					el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y &&
					(
						(path.dashed && el.attrs["stroke-dasharray"] === "-") || // Dashed line validation
						(!path.dashed && el.attrs["stroke-dasharray"] === undefined) // Solid line validation
					)
				)
			);


		//	    let validPaths2 = predefinedPaths2.every(path =>
		//    placedElements.some(el => 
		//        el.attrs && el.attrs.path &&
		//        el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y &&
		//        (path.dashed ? el.attrs["stroke-dasharray"] === "-" : el.attrs["stroke-dasharray"] === "")
		//	    )
		//	);

		let validPaths2 = predefinedPaths2
			.filter(path => path.validate) // Only check paths marked as true
			.every(path =>
				placedElements.some(el =>
					el.attrs && el.attrs.path &&
					el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y &&
					(
						(path.dashed && el.attrs["stroke-dasharray"] === "-") || // Dashed line validation
						(!path.dashed && el.attrs["stroke-dasharray"] === undefined) // Solid line validation
					)
				)
			);

		//       let validPaths3 = predefinedPaths3.every(path =>
		//	        placedElements.some(el => el.attrs && el.attrs.path &&
		//	            el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y)
		//	    );


		let validPaths3 = predefinedPaths3
			.filter(path => path.validate) // Only check paths marked as true
			.every(path =>
				placedElements.some(el =>
					el.attrs && el.attrs.path &&
					el.attrs.path[0][1] === path.x && el.attrs.path[0][2] === path.y &&
					(
						(path.dashed && el.attrs["stroke-dasharray"] === "-") || // Dashed line validation
						(!path.dashed && el.attrs["stroke-dasharray"] === undefined) // Solid line validation
					)
				)
			);

		resultJson.incorrect = wrongAttempts;
		if (validImages && validPaths && validPaths1 && validPaths2 && validPaths3) {
			Swal.fire({
				icon: 'success',
				title: 'All elements are placed correctly!',
				text: `Correct elements count: ${placedElements.length}`,
				confirmButtonText: 'OK'
			});
			$("#btnNext").prop("hidden", false);
//			$("#counter").prop("hidden", true);
			resultJson.validateCount1 = cntValidate1;


			//$('img').each(function() {
			//    $(this).attr('crossorigin', 'anonymous');
			//});
//			indexsheet();
			spraySchema();
			console.log("correct : " + placedElements.length);
//			console.log(resultJson);
		} else {
			if (wrongAttempts < 3) {
				wrongAttempts++;
				Swal.fire({
					icon: 'error',
					title: 'Some elements are missing or misplaced!',
					text: `Wrong attempts: ${wrongAttempts}`,
					confirmButtonText: 'Try Again'

				});
				//				console.log(masterjson);
				
			} else {
				Swal.fire({
					title: 'Appropriate connections',
					html: `<div>
                <img src='images/sprayStd.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '80%', // Increases the width of the modal
					confirmButtonText: 'Try Again'
				});
				//				console.log(masterjson);
			}
		}
	});


};
