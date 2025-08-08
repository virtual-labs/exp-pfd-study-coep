$("#boiler").click(function (){


let rowCount = 0; 
let tagNumbers = []; // Array to store user inputs
let data=[];
let bottomRow;

let stdtags = [
    "LSLL_1", "LSHH_1"
//    , "LSHH_2", "LSHH_3"
//    , "LSLL_2", "LSHH_4", "LSLL_3", "LE_1",
//    "LT_1", "LIC_1", "LVFD_1", "TE_1", "TT_1", "TIC_1", "TY_1", "TCV_1", "TE_2",
//    "TT_2", "TIC_1", "TY_SCR_1", "FE_1", "FT_1", "FIC_1", "FVFD_1", "TSH_1",
//    "PSH_1", "MV_1", "MV_2"
];
console.log(stdtags);

let tags = [
	 "LSLL_1", "LSHH_1", "LSHH_2", "LSHH_3"
//	 , "LSLL_2", "LSHH_4", "LSLL_3", "LE_1",
//	    "LT_1", "LIC_1", "LVFD_1", "TE_1", "TT_1", "TIC_1", "TY_1", "TCV_1", "TE_2",
//	    "TT_2", "TIC_1", "TY_SCR_1", "FE_1", "FT_1", "FIC_1", "FVFD_1", "TSH_1",
//	    "PSH_1", "MV_1", "MV_2","demo_1","demo_2"
            ];
console.log(tags);
let rangeValues = [
    "Nil", "Nil"
//    , "Nil", "Nil", "Nil", "Nil", "Nil", "0~200", "4~20", "4~20", "4~20", 
//    "0~200", "4~20", "4~20", "4~20", "0.2~1", "0~200", "4~20", "4~20", "4~20", 
//    "0~1200", "4~20", "4~20", "4~20", "Nil", "Nil", "4~20", "4~20"
];
console.log(rangeValues);


let unitValues = [
    "Nil", "Nil"
//    , "Nil", "Nil", "Nil", "Nil", "Nil", "mmWC", "mA", "mA", "mA", 
//    "Degree Celcius", "mA", "mA", "mA", "Kg/cm2", "Degree Celcius", "mA", "mA", 
//    "mA", "Pulses", "mA", "mA", "mA", "Nil", "Nil", "mA", "mA"
//    
];
console.log(unitValues);

let ioTypeValues = [
    "DI", "DI"
//    , "DI", "DI", "DI", "DI", "DI", "Nil", "AI", "Soft", "AO", "Nil",
//    "AI", "Soft", "AO", "Nil", "Nil", "AI", "Soft", "AO", "DI", "Soft", "Soft",
//    "AO", "DI", "DI", "AO", "AO"
];
console.log(ioTypeValues);

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
                <td style="border-top: none;">Date -<input type="date" class="texBoxStyle" tabindex="5" id="dateV"></input> </td>
            </tr>
           
              
        </tbody>
    </table>
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
	 <div class="container-fluid" style="margin-bottom:20px;">
	<div  class="col-sm-12" > 
	<button class="btn btn-danger  " id="verify" data-bs-toggle="modal" data-bs-target="#myModal2" style="float:right;margin: 10px;" hidden>Submit</button>
	<button class="btn btn-info " style="margin: 10px;background-color: teal;color: #fff;float:right" id="add" data-bs-toggle="modal" data-bs-target="#myModal2">
	 <i class="fa fa-plus-square " style="font-size:20px;color:#fff;" ></i>&nbsp;Add new tag</button>
	 <button class="btn btn-success " id="exportExcel" style="float:right;margin: 10px;" hidden>Download Excelsheet</button>
	 
	 

	     </div>
 <!-- The Modal -->
		<div class="modal" id="myModal2">
		  <div class="modal-dialog modal-md">
		    <div class="modal-content">
		
		      <!-- Modal Header -->
		      <div class="modal-header" style="    background-color: teal;
		    color: #fff;">
		        <h4 class="modal-title">Message Box</h4>
		        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
		      </div>
		
		      <!-- Modal body -->
		      <div class="modal-body" id="msg" style=" font-weight: bold; font-size: large;" >
				
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
			        	if(attempt<=6){
							
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
						    	 $("#verify,#add").prop("hidden",true);
						    	 $("#exportExcel").prop("hidden",false);
						    	 $("#Sheet1").append(bottomRow);
						    	 $("input[type='text']").prop("disabled", true);
						    	 $("input[type='date']").prop("disabled", true);
						    	 $("select,#remove").prop("disabled", true);
						    	 
						    }
						    else{
						    	$("#msg").html("try again.").css("color", "red");
						    }
					  attempt++;
					 }
				 else{
					 $("#msg").html("try again. attempt finish. show Correct sheet").css("color", "red");
				 }
			}
				  
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
						            $("#msg").html("Please fill in all fields before adding a new tag.").css("color", "red");
						            return;
						        } else {
						        	
						        	if(rowCount>=0)
							    	{
							    	 $("#verify").prop("hidden", false);
//							    	 $("#add").prop("hidden", true);
//							    	 $("#msg").html("");
							    	}
						        	 $("#msg").html("Add new tags details.").css("color", "#630b91"); 
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
											        <td>LATER</td>
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
										    dropdown.append(`<option value="">Select Tag</option>`); // Default option
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
						        rowCount++; // Increment row count
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
				    	 $("#verify").prop("hidden", false);
				    }
				});
	
         
 });
});