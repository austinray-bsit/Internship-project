var GreaterMetropolitan = ["Bayside Council","Blacktown City Council","Burwood, Municipality of","Camden Council","Campbelltown, City of","Canada Bay, City of","Canterbury-Bankstown, City of","Cumberland City Council","Fairfield, City of","Georges River Council","Hornsby Shire","Hunter's Hill, Municipality of","Inner West Council","Ku-ring-gai Council","Lane Cove Council","Liverpool, City of","Mosman Council","North Sydney Council","Northern Beaches Council","Parramatta, City of","Penrith, City of","Randwick, City of","Ryde, City of","Strathfield, Municipality of","Sutherland Shire","Sydney, City of","The Hills Shire","Waverley, Municipality of","Willoughby, City of","Woollahra, Municipality of","Blue Mountains, City of","Central Coast Council","Hawkesbury, City of","Wollondilly Shire","Kiama, Municipality of","Shellharbour, City of","Wollongong, City of"];

var RuralandRegional = ["Bellingen Shire","Clarence Valley Council","Coffs Harbour, City of","Kempsey Shire","Nambucca Valley Council","Port Macquarie-Hastings Council","Albury, City of","Balranald Shire","Berrigan Shire","Edward River Council","Federation Council","Greater Hume Shire","Murray River Council","Wentworth Shire","Bland Shire","Carrathool Shire","Coolamon Shire","Cootamundra-Gundagai Regional Council","Griffith, City of","Hay Shire","Junee Shire","Leeton Shire","Lockhart Shire","Murrumbidgee Council","Narrandera Shire","Snowy Valleys Council","Temora Shire","Wagga Wagga, City of","Cessnock, City of","Dungog Shire","Lake Macquarie, City of","Maitland, City of","Mid-Coast Council","Muswellbrook Shire","Newcastle, City of","Port Stephens Council","Singleton Council","Upper Hunter Shire","Kiama, Municipality of","Shellharbour, City of","Shoalhaven, City of","Wingecarribee Shire","Wollongong, City of","Ballina Shire","Byron Shire","Kyogle Council","Lismore, City of","Richmond Valley Council","Tweed Shire","Bega Valley Shire","Eurobodalla Shire","Goulburn Mulwaree Council","Hilltops Council","Queanbeyan–Palerang Regional Council","Snowy Monaro Regional Council","Upper Lachlan Shire","Yass Valley Council","Armidale Regional Council","Glen Innes Severn Council","Gunnedah Shire","Gwydir Shire","Inverell Shire","Liverpool Plains Shire","Moree Plains Shire","Narrabri Shire","Tamworth Regional Council","Tenterfield Shire","Uralla Shire","Walcha Shire","Bathurst Regional","Blayney Shire","Cabonne Shire","Cowra Shire","Forbes Shire","Lachlan Shire","Lithgow, City of","Mid-Western Regional","Oberon Shire","Orange, City of","Parkes Shire","Weddin Shire","Bogan Shire","Bourke Shire","Brewarrina Shire","Cobar Shire","Coonamble Shire","Dubbo Regional Council","Gilgandra Shire","Narromine Shire","Walgett Shire","Warren Shire","Warrumbungle Shire","Broken Hill, City of","Central Darling Shire","Unincorporated Far West"];

$("#inputState").change(function(){
  var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "Greater Metropolitan":
        optionsList = GreaterMetropolitan;
        break;
    case "Rural and Regional":
        optionsList = RuralandRegional;
        break;
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  $("#inputDistrict").html(htmlString);

});

window.onload = () => {
	localStorage.clear();
}

const getQoute = () => {
	const warningText = document.getElementById("warning-text");
	const transactionMethod = document.querySelector('#buy-sell').value;
	const propertyType = document.querySelector('#sel1').value;
	const propertyLocation = document.querySelector('#inputState').value;
	const propertyDistrict = document.querySelector('#inputDistrict').value;
	const userFullName = document.querySelector('.userFullName').value;
	const userEmail = document.querySelector('.userEmail').value;
	const userPhone = document.querySelector('.userPhone').value;
	const userAddress = document.querySelector('.userAddress').value;
	const allInputs = document.querySelectorAll('.isInput');

	if (
		transactionMethod == "" || propertyType == ""  || propertyLocation == "" ||
		propertyDistrict == "" || userFullName == "" || userEmail == "" || userPhone == "" || 
		userAddress == "") {

		warningText.innerText = "Please kindly fill up all inputs to continue.";

	} else {
		localStorage.setItem("CSC", "info@csc");
		localStorage.setItem("Quote", transactionMethod);
		localStorage.setItem("Property Type", propertyType);
		localStorage.setItem("Property Location", propertyLocation);
		localStorage.setItem("Property District", propertyDistrict);
		localStorage.setItem("Full Name", userFullName);
		localStorage.setItem("Email", userEmail);
		localStorage.setItem("Phone", userPhone);
		localStorage.setItem("Address", userAddress);

		if (transactionMethod == "buying") {
      		location.replace("https://csconveyancingservices.com.au/quote.html");
		} else if(transactionMethod == "selling") {
      		location.replace("https://csconveyancingservices.com.au/quote2.html");
		}
	} 
}


