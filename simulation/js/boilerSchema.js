var schValidate = 0;
function boilerSchema(){
	$("#validate").prop("hidden",true);
	$("#validate1").prop("hidden",false);
	$("#main-div","#diagram").html('');
	$("#headingDiv").prop("hidden",false)
	timerMasterJson.connection=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	
		htm = `
	
	 <div class="container-fluid">
	 
    <div class="row" id="result-div">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-2" style="border:2px solid black;" >
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">Utilities</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
          
               
                   <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="water">
                            <img src="images/water.png" alt="water" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="cold">
                            <img src="images/coldWater.png" alt="cold" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="steam">
                            <img src="images/steam.png" alt="powder" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="cond">
                            <img src="images/condOut.png" alt="cond" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="out">
                            <img src="images/hotOut.png" alt="out" draggable="false" style="width: 50%;">
                        </div>
                    </div> 
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="bwater">
                            <img src="images/bwater.png" alt="cond" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="energy">
                            <img src="images/energy.png" alt="out" draggable="false" style="width: 50%;">
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
	
//	var n1 = ;
		var rect =	paper.rect(x+200 , y+80, 200,100).attr({ "stroke-width": 2 });
		var l1 =	paper.path("M" + (x + 120) + " " + (y + 120) + "l 80 0 l -10 10 l 10 -10 l -10 -10").attr({ "stroke-width": 2 });
		var l2 =	paper.path("M" + (x + 800) + " " + (y + 130) + "l 80 0  l -10 10 l 10 -10 l -10 -10").attr({ "stroke-width": 2 });
		var l3 =	paper.path("M" + (x + 400) + " " + (y + 150) + "l 198 0 l -10 10 l 10 -10 l -10 -10").attr({ "stroke-width": 2 });
		var l4 =	paper.path("M" + (x + 520) + " " + (y + 100) + "l 79 0 l -10 10 l 10 -10 l -10 -10").attr({ "stroke-width": 2 });
		var l5 =	paper.path("M" + (x + 300) + " " + (y +180 ) + "l 0 80 l 10 -10 l -10 10 l -10 -10").attr({ "stroke-width": 2 });
		var l6 =	paper.path("M" + (x + 300) + " " + (y ) + "l 0 80 l 10 -10 l -10 10 l -10 -10").attr({ "stroke-width": 2 });
		var l7 =	paper.path("M" + (x + 700) + " " + (y+180 ) + "l 0 80 l 10 -10 l -10 10 l -10 -10").attr({ "stroke-width": 2 });
		var rect =	paper.rect(x+600 , y+80, 200,100).attr({ "stroke-width": 2 });
		var boilerLabel = paper.text((x + 300), (y + 130), "BOILER").attr({
		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 700), (y + 130), "HEAT EXCHANGER").attr({
		"font-size": 14, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
		var boilerLabel = paper.text((x + 480), (y + 180), "Output").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 850), (y + 160), "Output").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
		var boilerLabel = paper.text((x + 560), (y + 120), "Input").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 300), (y - 10), "Utilities").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 100), (y + 130), "Input").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 250), (y + 230), "Waste").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
	var boilerLabel = paper.text((x + 730), (y + 230), "Waste").attr({
		"font-size": 15, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	
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
	
		// Drop zones
	const dropZones = [
		{ x: (x + 70), y: (y + 70), width: 100, height: 40, type: "water", occupied: false },
		
		{ x: (x + 430), y: (y + 110), width: 70, height: 30, type: "steam", occupied: false },
		{ x: (x + 820), y: (y + 80), width: 80, height: 30, type: "out", occupied: false },
		{ x: (x + 680), y: (y + 270), width: 80, height: 30, type: "cond", occupied: false },
		{ x: (x + 470), y: (y + 60), width: 80, height: 30, type: "cold", occupied: false },
		{ x: (x + 310), y: (y ), width: 100, height: 30, type: "energy", occupied: false },
		{ x: (x + 310), y: (y + 200 ), width: 100, height: 30, type: "bwater", occupied: false },
	];

	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#cccfcd",
			"stroke-width": 1, opacity: 0.5
		});
	});
	
	
	
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
	
	document.getElementById("validate1").addEventListener("click", () => {
		schValidate++;
		console.log(wrongCnt);
		console.log(wrongAttempts);

		let validImages = dropZones.every(zone =>
			placedElements.some(el => el.attrs &&
				el.attrs.x === zone.x && el.attrs.y === zone.y &&
				el.data("type") === zone.type)
		);
		
		resultJson.incorrect = wrongAttempts;
		if (validImages ) {
			Swal.fire({
				icon: 'success',
				title: 'All elements are placed correctly!',
				text: `Correct elements count: ${placedElements.length}`,
				confirmButtonText: 'OK'
			});
//			$("#btnNext").prop("hidden", false);
//			$("#counter").prop("hidden", true);
			resultJson.schemaCount = schValidate;


			//$('img').each(function() {
			//    $(this).attr('crossorigin', 'anonymous');
			//});
//			indexsheet();
			spray();

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
                <img src='images/schemaBoiler.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '80%', // Increases the width of the modal
					confirmButtonText: 'Try Again'
				});
				//				console.log(masterjson);
			}
		}
	});
}