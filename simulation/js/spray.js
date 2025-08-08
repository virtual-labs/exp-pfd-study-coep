 const today = new Date();
function indexsheet ()  {
	$("#counter").prop("hidden",false);
	$("#validate,#btnNext,#report").prop("hidden",true);
	timerMasterJson.connection=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
let rowCount = 0; 
let tagNumbers = []; // Array to store user inputs
let data=[];
let bottomRow;
let stdtags = [
                "LSL_1", "LSH_1" 
                ,"PSHH_1", "PSLL_1", 
                "TSHH_1", "PSLL_2", "PSHH_2",
                "FE_1", "FT_1", "FIC_1", "VFD_1", "TE_1", "TT_1", "TIC_1",
                "SCR_1", "TT_2", "SOV_1", "SOV_2", "NE_1", "NT_1", "NIC_1", "VFD_2"
            ];
let tags = [
                "LSL_1", "LSH_1", "PSHH_1", "PSLL_1"
                , "TSHH_1", "PSLL_2", "PSHH_2",
                "FE_1", "FT_1", "FIC_1", "VFD_1", "TE_1", "TT_1", "TIC_1",
                "SCR_1", "TT_2", "SOV_1", "SOV_2", "NE_1", "NT_1", "NIC_1", "VFD_2","VFD_1","LSL_3"
            ];
let rangeValues = [
    "Switching action", "Switching action"
    , "Switching action", 
    "Switching action", "Switching action", "Switching action", "Switching action",
    "0~20", "4~20", "4~20", "0~1440", "0~200", "4~20", 
    "4~20", "4~20", "0~150", "24", "24", 
    "0~-25", "4~20", "4~21", "0~1440"
];
let unitValues = [
    "Nil", "Nil"
    , "Nil", "Nil", "Nil", "Nil", "Nil",
    "mmWC", "mA", "mA", "rpm", "Degree Celcius", "mA",
    "mA", "mA", "Degree Celcius", "VDC", "VDC",
    "mmWC", "mA", "mA", "rpm"
];
let ioTypeValues = [
    "DI", "DI"
    , "DI", "DI", "DI", "DI", "DI",
    "Nil", "AI", "Nil", "AO", "Nil", "AI",
    "Nil", "AO", "AI", "DO", "DO",
    "Nil", "AI", "Nil", "AO"
];
let InstrName=[
	  "Low level switch",
	  "High level switch",
	  "Pressure Switch High",
	  "Pressure Switch Low",
	  "Temperature Switch High",
	  "Pressure Switch Low",
	  "Pressure Switch High",
	  "Flow element (Pitot Tube)",
	  "Flow Transmitter",
	  "Flow Indicating Controller (PLC)",
	  "Motor Speed Control",
	  "Temperature Element (RTD)",
	  "Temperature Transmitter",
	  "Temperature Indicating Controller (PLC)",
	  "Firing Angle Controller (SCR Unit)",
	  "Temperature Transmitter",
	  "Solenoid Valve",
	  "Solenoid Valve",
	  "Anemometer (Air Flow Measurement)",
	  "Flow Transmitter",
	  "Flow Indicating Controller (PLC)",
	  "Motor Speed Control",
	  "ORIFICE",
	  "DIFF. PRESSURE TRANSMITTER"
	];
let application1=[
	  "Feed Tank low level detection",
	  "Feed Tank high level detection",
	  "Choking of FD duct",
	  "Choking of FD duct",
	  "For avoiding thermal run away in drying chamber",
	  "Choking of ID Fan duct",
	  "Choking of ID Fan duct",
	  "Air flow measurement",
	  "Signal conversion (4~20 mA)",
	  "PID controller for motor speed control",
	  "VFD for motor speed control (Final Control Element)",
	  "Temperature measurement drying chamber",
	  "Signal conversion (4~20 mA)",
	  "PID controller for temperature control",
	  "SCR firing angle control (Final Control Element)",
	  "Temperature measurement before cyclone separator",
	  "Atomiser air flow control",
	  "Pneumatic Hammering for powder collection",
	  "Air velocity measurement ID Fan duct",
	  "Signal conversion (4~20 mA)",
	  "PID controller for motor speed control",
	  "VFD for motor speed control (Final Control Element)"
	];
let location2 =[
	  "Feed Tank bottom",
	  "Feed Tank Top",
	  "FD Fan inlet",
	  "FD Fan outlet",
	  "Drying Chamber",
	  "ID Fan duct",
	  "Below Chimney Hood",
	  "Inlet FD fan Duct",
	  "Top mounted on Flow element",
	  "Controller (soft) PLC Panel",
	  "FD fan motor Control",
	  "Drying chamber",
	  "Top mounted on Flow element",
	  "Controller (soft) PLC Panel",
	  "Heating coil SCR firing angle control",
	  "Before Cyclone separator",
	  "Atomiser air mixing",
	  "Near atomiser",
	  "Air flow measurement",
	  "Top mounted on Flow element",
	  "Flow controller (Soft) PLC",
	  "Variable Frequency Drive for ID Motor"
	];
let pid=[
	  "COEP/Spray_Dryer_25_1",
	  "COEP/Spray_Dryer_25_2",
	  "COEP/Spray_Dryer_25_3",
	  "COEP/Spray_Dryer_25_4",
	  "COEP/Spray_Dryer_25_5",
	  "COEP/Spray_Dryer_25_6",
	  "COEP/Spray_Dryer_25_7",
	  "COEP/Spray_Dryer_25_8",
	  "COEP/Spray_Dryer_25_9",
	  "COEP/Spray_Dryer_25_10",
	  "COEP/Spray_Dryer_25_11",
	  "COEP/Spray_Dryer_25_12",
	  "COEP/Spray_Dryer_25_13",
	  "COEP/Spray_Dryer_25_14",
	  "COEP/Spray_Dryer_25_15",
	  "COEP/Spray_Dryer_25_16",
	  "COEP/Spray_Dryer_25_17",
	  "COEP/Spray_Dryer_25_18",
	  "COEP/Spray_Dryer_25_19",
	  "COEP/Spray_Dryer_25_20",
	  "COEP/Spray_Dryer_25_21",
	  "COEP/Spray_Dryer_25_22"
	];
let enClass=[
	  "IP54",
	  "IP54",
	  "IP54",
	  "IP54",
	  "IP54",
	  "IP54",
	  "IP54",
	  "IP67",
	  "IP68",
	  "IP54",
	  "IP67",
	  "IP67",
	  "IP68",
	  "IP54",
	  "IP68",
	  "IP68",
	  "IP54",
	  "IP54",
	  "IP67",
	  "IP68",
	  "IP54",
	  "IP68"
	];
console.log(stdtags);
console.log(rangeValues);
console.log(unitValues);
console.log(ioTypeValues);
let nameInstr=[];
let application=[];
let location1=[];
let pidno=[];
let range=[];
let unit=[];
let iotype=[];
let enclosure=[];
let datasheetno=[];
let partno=[];
let qty=[];
let remark=[];



	$( document ).ready(function() {
	var htm=`
	
<div class="row">
<div class="col-sm-11 table-container">
 <table class="table  table-bordered table-hover table1 ">
        <thead class="">
         <tbody id="tableBody1">
         <tr id="">
                <td  rowspan="3"><img class="COEPLogo" src='images/COEPlogo.png' id="coepLogo" style="height:100px" disabled></td>
                <td rowspan="3" style="font-weight: bold;"><center><input type="text" id="projectName" class="texBoxStyle" tabindex="1" required ></input>&nbsp; PROJECT, INSTRUMENT INDEX</center></td>
                 <td style="border-bottom: none;">&nbsp;Document No <input type="text" id="docNo" class="texBoxStyle" tabindex="2"></input></td>
                   <td rowspan="3" style="font-weight: bold;border-bottom: none;"><center>CLIENT NAME &nbsp;<input type="text" class="texBoxStyle" tabindex="4" id="clientNo"></input></center></td>
            </tr>
             
             <tr>
               <td style="border-bottom: none;">Project No &nbsp;<input type="text" class="texBoxStyle" tabindex="3" id="proNo"></input></td>
         
            </tr>
        
        	<tr>
               <!-- <td style="border-top: none;">Date - <input type="date" id="dateV" class="texBoxStyle" tabindex="5"></input> </td>-->
                 <td style="border-top: none;">Date - ${today.toDateString()}</td> 
            </tr>
           
              
        </tbody>
    </table>
    </div>
    </div>
   <div class="row">
	<div class="col-sm-12">
	<span style="   float: right;
    font-size: unset;
    font-weight: bold;
    
    color: brown;" class="blinking">Note : "Identify the make, model for the instrument."</span>
	</div>
	</div>
	<div class="table-container" style="margin-bottom: 50px;">
  <!--  <h2 class="text-center mb-4">Instrument Index sheet -1</h2>-->
    
    <table class="table  table-bordered table-hover" id="Sheet1">
        <thead class="">
        	
            <tr>
                <th>SR NO</th>
                <th>TAGNO</th>
                <th>NAME OF INSTRUMENT</th>
                 <th>APPLICATION</th>
                   <th>LOCATION</th>
                <th>P&ID NO</th>
                <th>RANGE</th>
                <th>UNIT</th>
                 <th>I/O TYPE </th>
               <th>ENCLOSURE CLASS</th>
                 <th>DATASHEET NO</th>
                <th>PART NO</th>
                <th>QTY</th>
                <th>REMARK</th>
                  <th>ACTION</th>
              </tr>
        </thead>
        <tbody id="tableBody">
            
        </tbody>
    </table>
    
</div>
<div class="container rev1 step2" style="margin-top: 40px;" hidden>
        <table >
           
             
             <tr>
               <td><input type="text" id="nameInput1" placeholder=""></td>
               <td><input type="text" id="nameInput2" placeholder=""></td>
               <td><input type="text" id="nameInput4" placeholder=""></td>
               <td><input type="text" id="nameInput5" placeholder=""></td>
               <td><input type="text" id="nameInput6" placeholder=""></td>
            </tr>
             <tr>
               <td><input type="text" id="nameInput7" placeholder=""></td>
               <td><input type="text" id="nameInput8" placeholder=""></td>
               <td><input type="text" id="nameInput10" placeholder=""></td>
               <td><input type="text" id="nameInput11" placeholder=""></td>
               <td><input type="text" id="nameInput12" placeholder=""></td>
            </tr>
              <tr class="revcheck">
                <th>0</th>
                <th></th>
                <th>Inital submission</th>
                <th ><input type="text" id="nameInput13" placeholder=""></th>
              <th><input type="text" id="nameInput14" placeholder=""></th>
            </tr>
             <tr>
                <th>Revision</th>
                <th>Date- ${today.toDateString()}</th>
                <th>Description</th>
                <th >Checked By</th>
              <th>Approved by</th>
            </tr>
            
        </table>
       <button class="btn btn-danger  " id="revVerify" data-bs-toggle="modal" data-bs-target="#revModal" style="float:right;margin: 10px;" >Submit</button>
 
</div>
	 <div class="container-fluid" style="margin-bottom:20px;">
	<div  class="col-sm-12" > 
	<button class="btn btn-danger  " id="verify" data-bs-toggle="modal" data-bs-target="#myModal2" style="float:right;margin: 10px;" hidden>Submit</button>
	<button class="btn btn-info " style="margin: 10px;background-color: teal;color: #fff;float:right" id="add" data-bs-toggle="modal" data-bs-target="#myModal2">
	 <i class="fa fa-plus-square " style="font-size:20px;color:#fff;" ></i>&nbsp;Add new tag</button>
	 <button class="btn btn-success " id="exportExcel" style="float:right;margin: 10px;background-color:teal;" hidden>Download Excelsheet</button>
	 <button class="btn btn-success " id="correctSheet" style="float:right;margin: 10px;background-color:teal;" hidden>Standard index Sheet </button>
 <button class="btn btn-success " id="btnResult" style="float:right;margin: 10px;background-color:teal;"  hidden>Result </button>

	     </div>
	     
 <!-- The Modal -->
		<div class="modal" id="myModal2">
		  <div class="modal-dialog modal-md">
		    <div class="modal-content">
		
		      <!-- Modal Header -->
		      <div class="modal-header" style="background-color: teal;color: #fff;">
		        <h4 class="modal-title">Message Box</h4>
		        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
		      </div>
		
		      <!-- Modal body -->
		      <div class="modal-body" id="msg" style=" font-weight: bold; font-size: large;font-family:monospace;" >
				
		      </div>
		
		      <!-- Modal footer -->
		      <div class="modal-footer">
		        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
		      </div>
		 </div>
		  </div>
		</div>
</div>
<!-- The Modal -->
		<div class="modal" id="revModal">
		  <div class="modal-dialog modal-md">
		    <div class="modal-content">
		
		      <!-- Modal Header -->
		      <div class="modal-header" style="background-color: teal;color: #fff;">
		        <h4 class="modal-title">Message Box</h4>
		        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
		      </div>
		
		      <!-- Modal body -->
		      <div class="modal-body" id="revMsg" style=" font-weight: bold; font-size: large;font-family:monospace;" >
				
		      </div>
		
		      <!-- Modal footer -->
		      <div class="modal-footer">
		        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
		      </div>
		 </div>
		  </div>
		</div>
</div>
`;
	
	$("#main-div").html(htm);
	$("#btnResult").click(function(){
		resultJson.attempt=attempt;
		console.log(resultJson);
		result();
	});
	
	$("#exportpdf").click(function () {
		downloadPDF();
	});
	
	async function downloadPDF() {
		  const { jsPDF } = window.jspdf;
		  const pdf = new jsPDF({
		    orientation: 'landscape',
		    unit: 'mm',
		    format: 'a4'
		  });

		  const table = document.getElementById('Sheet1');
		  const rows = [];
		  const headers = [];

		  // Get table headers
		  table.querySelectorAll('thead tr th').forEach(th => {
		    headers.push(th.innerText.trim());
		  });

		  // Get table rows
		  table.querySelectorAll('tbody tr').forEach(tr => {
		    const row = [];
		    tr.querySelectorAll('td').forEach(td => {
		      row.push(td.innerText.trim());
		    });
		    rows.push(row);
		  });

		  // Draw table
		  pdf.autoTable({
		    head: [headers],
		    body: rows,
		    startY: 20,        // top margin
		    margin: { left: 10, right: 10 },  // side margins
		    styles: { fontSize: 10 },         // font size
		    headStyles: { fillColor: [22, 160, 133] } // header color (optional)
		  });

		  pdf.save('Instrument_index.pdf');
		}
	
	
	$("#exportExcel").click(function () {
	    let data = [];
	    let tagno=[],nameInstr = [], application = [], location1 = [], pidno = [], range = [], unit = [], 
	        iotype = [], enclosure = [], datasheetno = [], partno = [], qty = [], remark = [];
	    let projectName=$("#projectName").val();
	    let docNo=$("#docNo").val();
	    let clientNo=$("#clientNo").val();
	    let proNo=$("#proNo").val();
	    let dateV=$("#dateV").val();
	    // Collecting data from input fields
	    $("select[id^='tag_no_']").each(function () { tagno.push($(this).val() || ""); });
	    $("input[id^='name_']").each(function () { nameInstr.push($(this).val() || ""); });
	    $("input[id^='application_']").each(function () { application.push($(this).val() || ""); });
	    $("input[id^='location_']").each(function () { location1.push($(this).val() || ""); });
	    $("input[id^='pid_no_']").each(function () { pidno.push($(this).val() || ""); });
	    $("input[id^='range_']").each(function () { range.push($(this).val() || ""); });
	    $("input[id^='unit_']").each(function () { unit.push($(this).val() || ""); });
	    $("input[id^='io_type_']").each(function () { iotype.push($(this).val() || ""); });
	    $("input[id^='enclosure_']").each(function () { enclosure.push($(this).val() || ""); });
	    $("input[id^='datasheet_']").each(function () { datasheetno.push($(this).val() || ""); });
	    $("input[id^='part_']").each(function () { partno.push($(this).val() || ""); });
	    $("input[id^='qty_']").each(function () { qty.push($(this).val() || ""); });
	    $("input[id^='remark_']").each(function () { remark.push($(this).val() || ""); });

	    
	    data.push([
//          i + 1,
	    	"Project name :"+projectName,"Project no :"+proNo, "Document no :"+docNo, "client No :"+clientNo, "Date :"+dateV, "", "", 
         "", "", "", "", "", ""
      ]);
	    data.push([
//          i + 1,
	    	"","", "", "", "", "", "", "", "", "", "", "", ""
      ]);
	    // Header row for Excel file
	    data.push(["TAG_ID", "Name", "Application", "Location", "PID No", "Range", "Unit", "IO Type", 
	               "Enclosure", "Datasheet No", "Part No", "Qty", "Remark"]);

	    
	   
	    // Loop through the collected data and create rows
	    for (let i = 0; i < nameInstr.length; i++) {
	        data.push([
//	            i + 1,
	        	tagno[i],nameInstr[i], application[i], location1[i], pidno[i], range[i], unit[i], 
	            iotype[i], enclosure[i], datasheetno[i], partno[i], qty[i], remark[i]
	        ]);
	    }
	    data.push([
//          i + 1,
	    	"","", "", "", "", "", "", "", "", "", "", "", ""
      ]);
	    data.push([
//          i + 1,
	    	"","", "", "", "", "", "", "", "", "", "", "", ""
      ]);
	    
	    data.push([

	    	"","FE-102", "ORIFICE", "", "WATER INLET PRESSURE MONITORING", "", "LETER", "M^3/Hr", "", "", "", "", "",
	    	"THE SIZING OF SPRAY WATER FLOW@Min/Nor/Max is",""
      ]);
	    data.push([

	    	"","DPT-102", "DIFF PRESSURE TRANSMITTER", "", "SPRAY WATER FLOW MEASUREMENT", "", "LETER", "M^3/Hr", "", "", "", "", "",
	    	"",""
      ]);
	    console.log(data); // Check the array structure in console

	    // Create a new workbook and worksheet
	    let wb = XLSX.utils.book_new();
	    let ws = XLSX.utils.aoa_to_sheet(data); // Convert array to worksheet

	    // Append worksheet to the workbook
	    XLSX.utils.book_append_sheet(wb, ws, "Instrument Index");

	    // Export the workbook as an Excel file
	    XLSX.writeFile(wb, "Instrument_Index.xlsx");
	});

	
		var attempt=0;
			 $("#verify").click(function () {
				 console.log(" row count "+rowCount);
				 let isValid = true;
				 
				var  matchCounter=0;
				 $("#tableBody tr:last input, #tableBody tr:last select, #tableBody1 input").each(function () {
			            if ($(this).val().trim() === "") {
			                isValid = false;
			                $(this).css("border", "2px solid #f27e7e"); // Highlight empty fields
			            } else {
			                $(this).css("border", ""); // Remove border if filled
			            }
			        });

			        // If validation fails, show message and return
			        if (!isValid) {
			            $("#msg").html("Please fill in all fields before adding a new tag.").css("color", "red");
			            
			        }else{
			        	if(attempt<=3){
							
			        		$("select[id^='tag_no_']").each(function () {
						        let selectedValue = $(this).val(); // Get selected value

						        if (selectedValue) {
						            tagNumbers.push(selectedValue);
						        }
						    });
						    // Loop through selected tags and check conditions
						    tagNumbers.forEach(function (selectedTag, index) {
						        let stdIndex = stdtags.indexOf(selectedTag); // Check if tag exists in stdtags

						        if (stdIndex !== -1) {
						           
//						        	let enteredRange = document.querySelector(`#range_${index}`).value.trim();
//						        	let enteredUnit = document.querySelector(`#unit_${index}`).value.trim();
//						        	let enteredIoType = document.querySelector(`#io_type_${index}`).value.trim();

						        	 let rangeElement = document.querySelector(`#range_${index}`);
						        	    let unitElement = document.querySelector(`#unit_${index}`);
						        	    let ioTypeElement = document.querySelector(`#io_type_${index}`);

						        	    // Check if elements exist before accessing their values
						        	    if (!rangeElement || !unitElement || !ioTypeElement) {
						        	        console.error(`Missing element(s):`, {
						        	            rangeElement,
						        	            unitElement,
						        	            ioTypeElement
						        	        });
						        	        return; // Stop execution if any element is missing
						        	    }

						        	    let enteredRange = rangeElement.value.trim().toLowerCase();
						        	    let enteredUnit = unitElement.value.trim().toLowerCase();
						        	    let enteredIoType = ioTypeElement.value.trim().toLowerCase();

						        	    // Ensure stdIndex exists in arrays before accessing values
						        	    let stdRange = rangeValues[stdIndex] ? rangeValues[stdIndex].trim().toLowerCase() : "";
						        	    let stdUnit = unitValues[stdIndex] ? unitValues[stdIndex].trim().toLowerCase() : "";
						        	    let stdIoType = ioTypeValues[stdIndex] ? ioTypeValues[stdIndex].trim().toLowerCase() : "";

						        	    console.log({
						        	        enteredRange,
						        	        enteredUnit,
						        	        enteredIoType,
						        	        stdRange,
						        	        stdUnit,
						        	        stdIoType
						        	    });
						        	// Check if the entered values are strings and convert them to lowercase if they are
						        	if (typeof enteredRange === 'string') {
						        	    enteredRange = enteredRange.toLowerCase();
						        	}
						        	if (typeof enteredUnit === 'string') {
						        	    enteredUnit = enteredUnit.toLowerCase();
						        	}
						        	if (typeof enteredIoType === 'string') {
						        	    enteredIoType = enteredIoType.toLowerCase();
						        	}

//						        	// Convert standard values to lowercase as well, ensuring they're strings
//						        	let stdRange = rangeValues[stdIndex].trim();
//						        	let stdUnit = unitValues[stdIndex].trim();
//						        	let stdIoType = ioTypeValues[stdIndex].trim();

						        	if (typeof stdRange === 'string') {
						        	    stdRange = stdRange.toLowerCase();
						        	}
						        	if (typeof stdUnit === 'string') {
						        	    stdUnit = stdUnit.toLowerCase();
						        	}
						        	if (typeof stdIoType === 'string') {
						        	    stdIoType = stdIoType.toLowerCase();
						        	}
						            // Compare values ignoring case
						            if (stdRange === enteredRange && stdUnit === enteredUnit && stdIoType === enteredIoType) {
						              
						        	
						                console.log(`Tag ${selectedTag} matches all corresponding values.`);
						                matchCounter++;
						                
						            } else {
						                console.log(`Tag ${selectedTag} does not match its corresponding values.`);
						            }
						        } else {
						            console.log(`Tag ${selectedTag} is not present in stdtags.`);
						        }
						    });
						    console.log("matchCounter "+matchCounter);
						    console.log("stdtags "+stdtags.length);
						    if(matchCounter==stdtags.length && rowCount==stdtags.length){
						    	
						    	 $("#msg").html("Instrument Index sheet is correct.").css("color", "green");
						    	 $(".rev1,#revVerify").prop("hidden",false);
						    	 $("#verify,#add").prop("hidden",true);
//						    	 $("#verify").prop("hidden",false);
//						    	 $("#Sheet1").append(bottomRow);
//						    	 $("input[type='text']").prop("disabled", true);
//						    	 $("input[type='date']").prop("disabled", true);
//						    	 $("select,#remove").prop("disabled", true);
						    	 
						    }
						    else{
						    	$("#msg").html("IT IS OBSERVED THAT THE INSTRUMENT INDEX SHEET IS INCOMPLETE.").css("color", "brown");
						    }
					  attempt++;
					 }
				 else{
//					 $("#msg").html("HERE IS A STANDARD INSTRUMENT INDEX SHEET AS PER THE PLANT REQUIREMENT. ").css("color", "#1c2f6a");
//					 $("#verify,#add").prop("hidden",true);
//					 $("#correctSheet").prop("hidden",false);
					 
					 $(".rev1,#revVerify").prop("hidden",false);
					 $("#add,#verify").prop("hidden",true);
//					 tableMake();
				 }
			}
				  
            });
			 var attemptCount=0;
			var id=0;
			$('#revVerify').click(function () {
			    attemptCount++;

			    let allFilled = true;

			    // Loop through all text inputs inside .rev1
			    $('.revcheck input[type="text"]').each(function () {
			        if ($(this).val().trim() === "") {
			            allFilled = false;
			            $(this).css("border-bottom", "2px solid #a10f0f"); // Highlight empty input
			        } else {
			            $(this).css("border-bottom", "2px solid #333"); // Reset border
			        }
			    });

			    if (allFilled) {
			        $('#revMsg').html("All fields are filled. Go to result page.").css({
			            "color": "green",
			            "font-weight": "bold",
			            "text-align": "left"
			        });
			        $('#revVerify').prop("disabled", true);
			        $('#btnResult').prop("hidden", false);
			    } else {
			        $('#revMsg').html("Please fill in all fields.").css({
			            "color": "#a10f0f",
			            "font-weight": "bold",
			            "text-align": "left"
			        });
			        $('#revVerify').prop("hidden", false);
			        $('#btnResult').prop("hidden", true);
			    }

			    id++; // (Only if you are managing IDs externally — otherwise, remove this)
			});
				$("#add").click(function () {
				    let isValid = true;
				    console.log(" row count "+rowCount);
//				    if( $("#tableBody1 tr").length > 0){
//				    	 if ($("#tableBody tr").length > 0 ) {
						        $("#tableBody tr:last input, #tableBody tr:last select, #tableBody1 input").each(function () {
						            if ($(this).val().trim() === "") {
						                isValid = false;
						                $(this).css("border", "2px solid #f27e7e"); // Highlight empty fields
						            } else {
						                $(this).css("border", ""); // Remove border if filled
						            }
						        });

						        // If validation fails, show message and return
						        if (!isValid) {
						            $("#msg").html("PLEASE FILL IN ALL FIELDS BEFORE ADDING A NEW TAG.").css("color", "brown");
						            return;
						        } else {
						        	
						        	if(rowCount>=0)
							    	{
//							    	 $("#verify").prop("hidden", false);
//							    	 var selectedValue = $(`#tag_no_${rowCount}`).val();
//							    	  console.log(" selectedValue "+selectedValue);
//
//							    	  // Disable the selected option in *all* dropdowns
//							    	  $(`.tag-dropdown option[value='${selectedValue}']`).prop("disabled", true);
							    	 
							    	}
						        	
						        	 $("#msg").html("ADD NEW TAGS DETAILS.").css("color", "#630b91"); 
										    let newRow = `<tr>
										        <td id="sr_no_${rowCount}" >${rowCount+1}</td>
										        <td>
										            <div class="form-group">
										                <select class="form-control tag-dropdown" id="tag_no_${rowCount}">
										                    <option value="">Select Tag</option>
										                </select>
										            </div>
										        </td>
										        <td><input type="text" class="form-control" name="name_${rowCount}" id="name_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="application_${rowCount}" id="application_${rowCount}" ></td>
										        <td><input type="text" class="form-control" name="location_${rowCount}" id="location_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="pid_no_${rowCount}" id="pid_no_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="range_${rowCount}" id="range_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="unit_${rowCount}" id="unit_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="io_type_${rowCount}" id="io_type_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="enclosure_${rowCount}" id="enclosure_${rowCount}" ></td>
										        <td><input type="text" class="form-control" name="datasheet_${rowCount}" id="datasheet_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="part_${rowCount}" id="part_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="qty_${rowCount}" id="qty_${rowCount}"></td>
										        <td><input type="text" class="form-control" name="remark_${rowCount}"  id="remark_${rowCount}"></td>
									        <td><button class="remove-row btn btn-danger" id="remove"><i class="fa fa-minus-square" style="font-size:20px;color:#fff;"></i></button></td>
										    </tr>`;
										    

										    $("#tableBody").append(newRow);
										     bottomRow=`<tr style="font-size: 12px;font-weight: 700;">
											     <td></td>
											     <td>FE-102</td>
											      <td>ORIFICE</td>
											       <td></td>
											        <td>WATER INLET PRESSURE MONITORING</td>
											        <td></td>
											        <td>LETER</td>
											        <td>M^3/Hr</td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td>THE SIZING OF SPRAY WATER FLOW@Min/Nor/Max is</td>
											         <td></td>
											    </tr>
											    <tr style="font-size: 12px;font-weight: 700;">
											     <td></td>
											     <td>DPT-102</td>
											      <td>DIFF PRESSURE TRANSMITTER</td>
											       <td></td>
											        <td>SPRAY WATER FLOW MEASUREMENT</td>
											        <td></td>
											        <td>LETER</td>
											        <td>mmWC</td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td></td>
											        <td></td>
											         <td></td>
											    </tr>
											    `;
										    
										    
										    
										    // Populate tag dropdown with options
										    let dropdown = $(`#tag_no_${rowCount}`);
//										    dropdown.append(`<option value="">Select Tag</option>`); // Default option
										    $.each(tags, function (index, value) {
										        dropdown.append(`<option value="${value}">${value}</option>`);
										    });
										    
										 // Validate TAGNO selection
											$(document).on("change", ".tag-dropdown", function () {
											    if ($(this).val() === "") {
											        $(this).css("border", "2px solid red");
											    } else {
											        $(this).css("border", "");
											    }
											});

											
						        }
						        
						       // console.log("Before Increment : " + rowCount);
						       rowCount++;
						       if(rowCount==stdtags.length){
						    	   
						    	   $("#verify").prop("hidden", false);
						    	   $("#add").prop("hidden", true);
						       }
//						       console.log(" rowCount dfklgj "+rowCount);
						         // Increment row count
//						        console.log(" rowCount12 "+rowCount);
						       
				});
				// Remove row functionality
				$(document).on("click", "#remove", function () {
				    $(this).closest("tr").remove();
				    console.log(" row count "+rowCount);
				    rowCount--;
				    
				    if (rowCount === 0) {
				    	rowCount=0;
				        $("#verify").prop("hidden", true);
				    }
				    else{
				    	 $("#verify").prop("hidden", true);
				    	 $("#add").prop("hidden",false);
				    }
				});
				function tableMake(){
					 $(".modal-backdrop").css("opacity", "1"); // Set to default
					    $(".modal-backdrop").css("background-color", "rgba(0, 0, 0, 0)"); // Transparent

					var htm=`
					<div class="row">
					<div class="col-sm-12">
					  <h2><center>STANDARD INSTRUMENT INDEX SHEET</center></h2>
					         
					  <table class="table table-bordered table-hover" id="correctTable" style="margin-bottom:10px;">
					   <thead>
					      <tr class="table-primary"">
					        <th>SR.NO</th>
					        <th>TAG NO</th>
					        <th>NAME OF INSTRUMENT</th>
					        <th>APPLICATION</th>
					        <th>LOCATION</th>
					        <th>P&ID.NO</th>
					        <th>RANGE</th>
					        <th>UNIT</th>
					        <th>I/O TYPE</th>
					        <th>ENCLOSURE CLASS</th>
					        <th>DATASHEET NO</th>
					        <th>PART NO</th>
					          <th>QTY</th>
					        <th>REMARK</th>
					      </tr>
					    </thead>
					    <tbody>
					     
					    </tbody>
					  </table>
					</div></div>`;
					
					$("#main-div").html(htm);
					let row =``;
					 let tbody = $("#correctTable tbody");
					 
			            for (let i = 0; i <stdtags.length ; i++) {
			                 row += `<tr>
			                 <td>${i+1}</td>
			                    <td>${stdtags[i]}</td>
			                      <td>${InstrName[i]}</td>
			                      <td>${application1[i]}</td>
			                    <td>${location2[i]}</td>
			                      <td>${pid[i]}</td>
			                    <td>${rangeValues[i]}</td>
			                    <td>${unitValues[i]}</td>
			                    <td>${ioTypeValues[i]}</td>
			                	<td>${enClass[i]}</td>`;
			                if(i==0){
			                	 row+=`<td>SBEM_LS_1(REFER THE COMPANY)</td>
			                		 <td>LS_12SW_RL(REFER THE COMPANY WEBSITE FOR MORE)</td>`;
			                }
			                else
			                	{
			                	 row+=`<td></td><td></td>`;
			                	}
			                	
			                row+=`<td>1</td><td></td></tr> `;
			     }
			            row+=` 
			            <tr >
		                <td>0</td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td>INITAL SUBMISSION</td>
		                <td></td>
		                <td>RBJ</td>
		                <td>VK</td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                 </tr>
		                  <tr >
		                <td>REVISION</td>
		                <td>DATE-</td>
		                <td></td>
		                <td></td>
		                <td>DESCRIPTION</td>
		                <td></td>
		                <td>CHECKED BY</td>
		                <td>APPROVED BY</td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                <td></td>
		                 </tr>  `;
			            tbody.append(row);
			            
			         
				}
				$("#correctSheet").click(function () {
					tableMake();
					var htm=`  <button class="btn btn-primary" id="downloadPdf" style="background-color:teal;margin-bottom: 100px;">Download PDF</button>`;
					$("#main-div").append(htm);
					// Function to convert table to PDF
		            $("#downloadPdf").click(function () {
		              const { jsPDF } = window.jspdf;
		              let doc = new jsPDF('p', 'pt', 'a4');

		              doc.text("STANDARD INSTRUMENT INDEX SHEET", 40, 30);
		              
		              doc.autoTable({
		                html: "#correctTable",
		                startY: 50,
		                theme: 'grid',
		                styles: { fontSize: 7 },
		                headStyles: { fillColor: [41, 128, 185] },
		                margin: { top: 40 },
		              });

		              doc.save("Instrument_Index_Sheet.pdf");
		            });
				});      
 });
}
