resultJson = {};
wrongAttempts = {};
timerMasterJson = {};
var cntValidate = 0;
$("#boilerConnect").click(function() {
//function boiler(){
	$("#validate,#counter").prop("hidden",false);
	seconds = 0;
	  updateCounter();
$("#headingDiv").prop("hidden",false)
	htm = `
	
	 <div class="container-fluid">
	 
    <div class="row" id="result-div">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-2" style="border:2px solid black; overflow-y: scroll; height:760px" >
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">EQUIPMENT SYMBOLS</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
          
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="tank">
                            <img src="images/feedTank.png" alt="tank" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="pump">
                            <img src="images/pdPump.png" alt="pump" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="drum">
                            <img src="images/drum.png" alt="drum" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="cpump">
                            <img src="images/cenPump.png" alt="cpump" draggable="false">
                        </div>
                    </div>
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="heatEx">
                            <img src="images/heatEx.png" alt="heatEx" draggable="false">
                        </div>
                    </div>
                    
                      <div class="col-4">
                        <div class="component" draggable="true" data-type="condTank">
                            <img src="images/condTank.png" alt="condTank" draggable="false">
                        </div>
                    </div>
                    
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="hotTank">
                            <img src="images/hotTank.png" alt="hotTank" draggable="false">
                        </div>
                    </div>
                     
                     <div class="col-4">
                        <div class="component" draggable="true" data-type="coldTank">
                            <img src="images/coldTank.png" alt="coldTank" draggable="false">
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
                        <div class="component" draggable="true" data-type="water">
                            <img src="images/water.png" alt="water" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="cold">
                            <img src="images/coldWater.png" alt="cold" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="steam">
                            <img src="images/steam.png" alt="powder" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="cond">
                            <img src="images/condOut.png" alt="cond" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-2">
                        <div class="component" draggable="true" data-type="out">
                            <img src="images/hotOut.png" alt="out" draggable="false" style="width: 50%;">
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


	var virtualWidth = 1200;
	var virtualHeight = 700;

	// Create Raphael canvas that fills the container
	const paper = Raphael("diagram", "100%", "100%");

	// Set viewBox for responsive scaling
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");


	
	
		// Drop zones
//	const dropZones = [
//		{ x: (x - 70), y: (y + 200), width: 100, height: 105, type: "tank", occupied: false },
//		{ x: (x + 100), y: (y + 300), width: 70, height: 70, type: "pump", occupied: false },
//	];



	// Set viewBox for responsive scaling
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");

	let placedElements = [];
	var wrongCnt = 0;
	var wrongAttempts = 0;

	var x = 100, y = 100;
	var dropTolerance = 20; // User-defined tolerance for dropping near a rectangle

	
		var feedTankLabel = paper.text((x + 250), (y - 70), "Boiler and Heat Exchanger Plant").attr({
		"font-size": 18, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();



	// Function to validate if the drop coordinates are close enough to predefined points
	function isValidDrop(dropX, dropY) {
		return predefinedPaths1.some(path =>
			Math.abs(path.x - dropX) <= 3 && Math.abs(path.y - dropY) <= 3
		);
	}

	// Define Predefined Paths Vertical lines
	var predefinedPaths1 = [
		
		{ x: (x - 25), y: (y + 305), dashed: false, validate: true }, //solid line correct
		{ x: (x + 120), y: (y + 140), dashed: false, validate: true },
		{ x: (x + 120), y: (y + 50), dashed: false, validate: true },
		{ x: (x + 320), y: (y + 10), dashed: false, validate: true },
		{ x: (x + 320), y: (y + 60), dashed: false, validate: true },
		{ x: (x + 350), y: (y + 280), dashed: false, validate: true },
		{ x: (x + 320), y: (y + 370), dashed: false, validate: true },
		{ x: (x + 250), y: (y + 342), dashed: false, validate: true },
		{ x: (x + 400), y: (y + 330), dashed: false, validate: true },
		{ x: (x + 550), y: (y + 320), dashed: false, validate: true },
		{ x: (x + 550), y: (y + 120), dashed: false, validate: true },
		{ x: (x + 650), y: (y + 40), dashed: false, validate: true },
		{ x: (x + 50), y: (y + 355), dashed: false, validate: true },
		{ x: (x + 400), y: (y + 40), dashed: false, validate: true },
		{ x: (x + 550), y: (y + 20), dashed: false, validate: true },
	];


	// Draw Paths for Predefined Locations
	predefinedPaths1.forEach(path => {
		let lineLength = 
			(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 305)) ? 50	:
			(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y + 140))? 160 :
			(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y + 50))? -90 :
			 (Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 10))? -50 
			:(Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 60))? 120 
			:(Math.round(path.x) === Math.round(x + 350) && Math.round(path.y) === Math.round(y + 280))?50 
			:(Math.round(path.x) === Math.round(x + 250) && Math.round(path.y) === Math.round(y + 342))? -305
			:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y + 330))? 130
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 320))? 100
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 120))? 100
			:(Math.round(path.x) === Math.round(x + 650) && Math.round(path.y) === Math.round(y + 40))? 420
			:(Math.round(path.x) === Math.round(x + 50) && Math.round(path.y) === Math.round(y + 355))? 105
			:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y + 40))? -80
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 20))? -60
				: -28; // Apply -70 only for the specific path

		paper.path(`M${path.x} ${path.y} l 0 ${lineLength}`).attr({
			stroke: "#cccfcd",
			"stroke-width": 3, opacity: 0.5
		}).toBack();
	});


	// Define Dashed Paths with Validation
	var predefinedPaths2 = [
//		{ x: (x - 25), y: (y + 70), dashed: true, validate: false }, //solid line correct
		{ x: (x - 25), y: (y + 305), dashed: true, validate: false }, //solid line correct
		{ x: (x + 120), y: (y + 140), dashed: true, validate: false },
		{ x: (x + 120), y: (y + 50), dashed: true, validate: false },
		{ x: (x + 320), y: (y + 10), dashed: true, validate: false },
		{ x: (x + 320), y: (y + 60), dashed: true, validate: false },
		{ x: (x + 350), y: (y + 280), dashed: true, validate: false },
		{ x: (x + 320), y: (y + 370), dashed: true, validate: false },
		{ x: (x + 250), y: (y + 342), dashed: true, validate: false },
		{ x: (x + 400), y: (y + 330), dashed: true, validate: false },
		{ x: (x + 550), y: (y + 320), dashed: true, validate: false },
		{ x: (x + 550), y: (y + 120), dashed: true, validate: false },
		{ x: (x + 650), y: (y + 40), dashed: true, validate: false },
		{ x: (x + 50), y: (y + 355), dashed: true, validate: false },
		{ x: (x + 400), y: (y + 40), dashed: true, validate: false },
		{ x: (x + 550), y: (y + 20), dashed: true, validate: false },
	
	];

	// Draw Dashed Paths
	// Draw Dashed Paths for Predefined Locations
	predefinedPaths2.forEach(path => {
		let lineLength = 	(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 305)) ? 50	:
			(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y + 140))? 160 :
			(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y + 50))? -90 :
			 (Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 10))? -50 
			:(Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 60))? 120 
			:(Math.round(path.x) === Math.round(x + 350) && Math.round(path.y) === Math.round(y + 280))?50 
			:(Math.round(path.x) === Math.round(x + 250) && Math.round(path.y) === Math.round(y + 342))? -305
			:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y + 330))? 130
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 320))? 100
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 120))? 100
			:(Math.round(path.x) === Math.round(x + 650) && Math.round(path.y) === Math.round(y + 40))? 420
			:(Math.round(path.x) === Math.round(x + 50) && Math.round(path.y) === Math.round(y + 355))? 105
			:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y + 40))? -80
			:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 20))? -60
				: -28
			

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
		{ x: (x - 70), y: (y + 200), width: 100, height: 105, type: "tank", occupied: false },
		{ x: (x + 100), y: (y + 300), width: 70, height: 70, type: "pump", occupied: false },
		{ x: (x - 10), y: (y + 50), width: 150, height: 90, type: "drum", occupied: false },
		{ x: (x + 300), y: (y + 10), width: 50, height: 50, type: "heatEx", occupied: false },
		{ x: (x + 300), y: (y + 370), width: 70, height: 70, type: "cpump", occupied: false },
		{ x: (x + 280), y: (y + 180), width: 90, height: 100, type: "condTank", occupied: false },
		{ x: (x + 500), y: (y + 220), width: 100, height: 100, type: "coldTank", occupied: false },
		{ x: (x + 500), y: (y + 20), width: 100, height: 100, type: "hotTank", occupied: false },
		{ x: (x + 50), y: (y + 200), width: 60, height: 30, type: "water", occupied: false },
		{ x: (x + 150), y: (y - 30), width: 60, height: 30, type: "steam", occupied: false },
		{ x: (x + 420), y: (y - 30), width: 80, height: 30, type: "out", occupied: false },
		{ x: (x + 330), y: (y + 120), width: 80, height: 30, type: "cond", occupied: false },
		{ x: (x + 160), y: (y + 120), width: 80, height: 30, type: "cold", occupied: false },
	];

	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#cccfcd",
			"stroke-width": 1, opacity: 0.5
		});
	});


	// Predefined paths horizontal solid lines
	var predefinedPaths = [
		{ x: (x - 25), y: (y  + 355), dashed: false, validate: true },
		{ x: (x + 120), y: (y  - 40), dashed: false, validate: true },
		{ x: (x + 320), y: (y  + 342), dashed: false, validate: true },
		{ x: (x + 250), y: (y  + 40), dashed: false, validate: true },
		{ x: (x + 350), y: (y  + 330), dashed: false, validate: true },
		{ x: (x + 550), y: (y  + 420), dashed: false, validate: true },
		{ x: (x + 350), y: (y  + 40), dashed: false, validate: true },
		{ x: (x + 600), y: (y  + 40), dashed: false, validate: true },
		{ x: (x + 650), y: (y  + 460), dashed: false, validate: true },
		{ x: (x + 400), y: (y  - 40), dashed: false, validate: true },
	];

	predefinedPaths.forEach((path, index) => {
		// Check if it's one of the last two paths in the array
		let lineLength = 
//		(index >= predefinedPaths.length - 2) ? 25 
		(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 355))
				? 125 : 
		(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y - 40))
				? 200 	
		:(Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 342))
				? -70
		:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 420))
				? -180
		:(Math.round(path.x) === Math.round(x + 650) && Math.round(path.y) === Math.round(y + 460))
				? -600
		:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y - 40))
				? 152					
						
		:50;

		let pathElement = paper.path(`M${path.x} ${path.y} l ${lineLength} 0`).attr({
			stroke: "#cccfcd",
			"stroke-width": 3, opacity: 0.5
		});
	});


	//    predefinedPaths.forEach(path => {
	//            paper.path(`M${path.x} ${path.y} l 50 0`).attr({
	//                stroke: "#cccfcd",
	//                "stroke-width": 2
	//            }).toBack();
	//        });


	var predefinedPaths3 = [
//		{ x: (x - 25), y: (y  + 160), dashed: true, validate: false },
		{ x: (x - 25), y: (y  + 355), dashed: true, validate: false },
		{ x: (x + 120), y: (y  - 40), dashed: true, validate: false },
		{ x: (x + 320), y: (y  + 342), dashed: true, validate: false },
		{ x: (x + 250), y: (y  + 40), dashed: true, validate: false },
		{ x: (x + 350), y: (y  + 330), dashed: true, validate: false },
		{ x: (x + 550), y: (y  + 420), dashed: true, validate: false },
		{ x: (x + 350), y: (y  + 40), dashed: true, validate: false },
		{ x: (x + 600), y: (y  + 40), dashed: true, validate: false },
		{ x: (x + 650), y: (y  + 460), dashed: true, validate: false },
		{ x: (x + 400), y: (y  - 40), dashed: true, validate: false },

	];

	predefinedPaths3.forEach((path, index) => {
		// Check if it's one of the last two paths
		let lineLength = 	(Math.round(path.x) === Math.round(x - 25) && Math.round(path.y) === Math.round(y + 355))
				? 125 : 
		(Math.round(path.x) === Math.round(x + 120) && Math.round(path.y) === Math.round(y - 40))
				? 200 	
		:(Math.round(path.x) === Math.round(x + 320) && Math.round(path.y) === Math.round(y + 342))
				? -70
		:(Math.round(path.x) === Math.round(x + 550) && Math.round(path.y) === Math.round(y + 420))
				? -180
		:(Math.round(path.x) === Math.round(x + 650) && Math.round(path.y) === Math.round(y + 460))
				? -600
		:(Math.round(path.x) === Math.round(x + 400) && Math.round(path.y) === Math.round(y - 40))
				? 152					
						
		:50;

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
			let lineLength = ((path.x) === (x - 25) && (path.y) === (y + 355))
				? 125:
				((path.x) === (x + 120) && (path.y) === (y - 40))
				? 200 
				:((path.x) === (x + 320) && (path.y) === (y + 342))
				? -70
				:((path.x) === (x + 550) && (path.y) === (y + 420))
				? -180
				:((path.x) === (x + 350) && (path.y) === (y + 40))
				? 150
				:((path.x) === (x + 650) && (path.y) === (y + 460))
				? -600
				:((path.x) === (x + 400) && (path.y) === (y - 40))
				? 152
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
				let lineLength = 
				((closestPath.x) === (x - 25) && (closestPath.y) === (y + 355))
				? 125
				:((closestPath.x) === (x + 120) && (closestPath.y) === (y - 40))
				? 200
				:((closestPath.x) === (x + 320) && (closestPath.y) === (y + 342))
				? -70
				:((closestPath.x) === (x + 550) && (closestPath.y) === (y + 420))
				? -180
				:((closestPath.x) === (x + 650) && (closestPath.y) === (y + 460))
				? -600
				:((closestPath.x) === (x + 400) && (closestPath.y) === (y - 40))
				? 152
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
					((path.x) === (x - 25) && (path.y) === (y + 305)) ? 50	:
					((path.x) === (x + 120) && (path.y) === (y + 140))? 160 :
					((path.x) === (x + 120) && (path.y) === (y + 50))? -90 :
					((path.x) === (x + 320) && (path.y) === (y + 10))? -50 :
					((path.x) === (x + 320) && (path.y) ===(y + 60))? 120 
					:((path.x) === (x + 350) && (path.y) ===(y + 280))?50 
					:((path.x) ===(x + 250) && (path.y) === (y + 342))? -305
					:((path.x) === (x + 400) &&(path.y) === (y + 330))? 130
					:((path.x) === (x + 550) && (path.y) === (y + 320))? 100
					:((path.x) === (x + 550) && (path.y) === (y + 120))? 100
					:((path.x) === (x + 650) && (path.y) === (y + 40))? 420
					:((path.x) === (x + 50) && (path.y) === (y + 355))? 105
					:((path.x) === (x + 400) && (path.y) === (y + 40))? -80
					:((path.x) === (x + 550) && (path.y) === (y + 20))? -60
				:	-28;

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
				let lineLength = 
				((closestPath1.x) === (x - 25) && (closestPath1.y) === (y + 305)) ? 50	:
				((closestPath1.x) === (x + 120) && (closestPath1.y) === (y + 140))? 160 :
				((closestPath1.x) === (x + 120) && (closestPath1.y) === (y + 50))? -90 :
				((closestPath1.x) === (x + 320) && (closestPath1.y) === (y + 10))? -50 :
				((closestPath1.x) === (x + 320) && (closestPath1.y) ===(y + 60))? 120 
					:((closestPath1.x) === (x + 350) && (closestPath1.y) ===(y + 280))?50 :
					((closestPath1.x) ===(x + 250) && (closestPath1.y) === (y + 342))? -305:
					((closestPath1.x) === (x + 400) &&(closestPath1.y) === (y + 330))? 130:
					((closestPath1.x) === (x + 550) && (closestPath1.y) === (y + 320))? 100:
				((closestPath1.x) === (x + 550) && (closestPath1.y) === (y + 120))? 100	
				:((closestPath1.x) === (x + 650) && (closestPath1.y) === (y + 40))? 420	
				:((closestPath1.x) === (x + 50) && (closestPath1.y) === (y + 355))? 105
				:((closestPath1.x) === (x + 400) && (closestPath1.y) === (y + 40))? -80
				:((closestPath1.x) === (x + 550) && (closestPath1.y) === (y + 20))? -60
					: -28;

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
				let lineLength = ((path.x) === (x - 25) && (path.y) === (y + 305)) ? 50	:
					((path.x) === (x + 120) && (path.y) === (y + 140))? 160 :
					((path.x) === (x + 120) && (path.y) === (y + 50))? -90 :
					((path.x) === (x + 320) && (path.y) === (y + 10))? -50 :
					((path.x) === (x + 320) && (path.y) ===(y + 60))? 120 
					:((path.x) === (x + 350) && (path.y) ===(y + 280))?50 
					:((path.x) ===(x + 250) && (path.y) === (y + 342))? -305
					:((path.x) === (x + 400) &&(path.y) === (y + 330))? 130
					:((path.x) === (x + 550) && (path.y) === (y + 320))? 100
					:((path.x) === (x + 550) && (path.y) === (y + 120))? 100
					:((path.x) === (x + 650) && (path.y) === (y + 40))? 420
					:((path.x) === (x + 50) && (path.y) === (y + 355))? 105
					:((path.x) === (x + 400) && (path.y) === (y + 40))? -80
					:((path.x) === (x + 550) && (path.y) === (y + 20))? -60
				:	-28;

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
				let lineLength = 	((closestPath2.x) === (x - 25) && (closestPath2.y) === (y + 305)) ? 50	:
				((closestPath2.x) === (x + 120) && (closestPath2.y) === (y + 140))? 160 :
				((closestPath2.x) === (x + 120) && (closestPath2.y) === (y + 50))? -90 :
				((closestPath2.x) === (x + 320) && (closestPath2.y) === (y + 10))? -50 :
				((closestPath2.x) === (x + 320) && (closestPath2.y) ===(y + 60))? 120 
					:((closestPath2.x) === (x + 350) && (closestPath2.y) ===(y + 280))?50 :
					((closestPath2.x) ===(x + 250) && (closestPath2.y) === (y + 342))? -305:
					((closestPath2.x) === (x + 400) &&(closestPath2.y) === (y + 330))? 130:
					((closestPath2.x) === (x + 550) && (closestPath2.y) === (y + 320))? 100:
				((closestPath2.x) === (x + 550) && (closestPath2.y) === (y + 120))? 100	
				:((closestPath2.x) === (x + 650) && (closestPath2.y) === (y + 40))? 420	
				:((closestPath2.x) === (x + 50) && (closestPath2.y) === (y + 355))? 105
				:((closestPath2.x) === (x + 400) && (closestPath2.y) === (y + 40))? -80
				:((closestPath2.x) === (x + 550) && (closestPath2.y) === (y + 20))? -60
					: -28;

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
				let lineLength = ((path.x) === (x - 25) && (path.y) === (y + 355))
				? 125:
				((path.x) === (x + 120) && (path.y) === (y - 40))
				? 200 
				:((path.x) === (x + 320) && (path.y) === (y + 342))
				? -70
				:((path.x) === (x + 550) && (path.y) === (y + 420))
				? -180
				:((path.x) === (x + 350) && (path.y) === (y + 40))
				? 150
				:((path.x) === (x + 650) && (path.y) === (y + 460))
				? -600
				:((path.x) === (x + 400) && (path.y) === (y - 40))
				? 152
				: 50;

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
				let lineLength = ((closestPath3.x) === (x - 25) && (closestPath3.y) === (y + 355))
				? 125:
				((closestPath3.x) === (x + 120) && (closestPath3.y) === (y - 40))
				? 200 
				:((closestPath3.x) === (x + 320) && (closestPath3.y) === (y + 342))
				? -70
				:((closestPath3.x) === (x + 550) && (closestPath3.y) === (y + 420))
				? -180
				:((closestPath3.x) === (x + 350) && (closestPath3.y) === (y + 40))
				? 150
				:((closestPath3.x) === (x + 650) && (closestPath3.y) === (y + 460))
				? -600
				:((closestPath3.x) === (x + 400) && (closestPath3.y) === (y - 40))
				? 152
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
	document.getElementById("validate").addEventListener("click", () => {
		cntValidate++;
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
//			$("#btnNext").prop("hidden", false);
//			$("#counter").prop("hidden", true);
			resultJson.validateCount = cntValidate;


			//$('img').each(function() {
			//    $(this).attr('crossorigin', 'anonymous');
			//});
//			indexsheet();
			boilerSchema();

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
//				boilerSchema();
			} else {
				Swal.fire({
					title: 'Appropriate connections',
					html: `<div>
                <img src='images/boilerStd.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '80%', // Increases the width of the modal
					confirmButtonText: 'Try Again'
				});
				//				console.log(masterjson);
			}
		}
	});


});
