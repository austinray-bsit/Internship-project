now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);

window.onload = () => {
  let purchaseTable = document.querySelector(".purchase-table");
  let purchaseCompanyTitleContent = document.querySelector(".purchase-company-title");
  let additionalText1 = document.querySelector(".additional_text_li1");
  let additionalText2 = document.querySelector(".additional_text_li2");
  let additionalTextLast = document.querySelector(".additional_text_last");
  let purchaseList = document.querySelector(".purchase-list");

  if (localStorage.getItem("CSC") !== null && localStorage.getItem("CSC") == "info@csc") {
    document.getElementById("quoteHtml").style.display = "block";
    localStorage.setItem("CSC", "");
    displayQoute();

    if (localStorage.getItem("Property Type") !== null && localStorage.getItem("Property Type") == "Company Title") {
      let li = document.createElement("li");
      let li2 = document.createElement("li");
      let text = document.createTextNode("ASIC company search");
      let text2 = document.createTextNode("Order government searches (compulsory searches, council, water and strata)");
      li.appendChild(text);
      li2.appendChild(text2);
      list = [li, li2];
      for(let i = 0; i < 2; i++) {
        purchaseList.appendChild(list[i]);
      }

      additionalText1.innerText = "Review and advise on contract and negotiate terms of contract with Vendor";
      additionalText2.innerText = "Order government searches (compulsory searches, council, water and strata)";
      additionalTextLast.innerText = "Prepare for manual settlement (paper transaction), obtaining settlement agent to act on your behalf";
      purchaseTable.style.display = "none";

    } else {
      additionalText1.innerText = "Review and provide comprehensive advise on contract and negotiate terms of contract with Vendor";
      additionalText2.innerText = "Order government searches (compulsory searches, council, water and strata) and order Optional* government searches if requested to by you";
      additionalTextLast.innerText = "Undertake your settlement electronically using PEXA, Australia’s online property exchange network. *Optional Searches refer to our costs agreement.";
      purchaseTable.style.display = "block";

      purchaseCompanyTitleContent.style.display = "none";
    }

  } else {
    document.getElementById("quoteHtml").style.display = "none";
    location.replace("https://csconveyancingservices.com.au/");
  }
}

const displayQoute = () => {
    let emailQuoteBtn = document.getElementById("email-quote-btn");
    let acceptQuoteBtn = document.getElementById("accept-quote-btn");
    let dynamicNote = document.getElementById("dynamic-note");
    let happyWithQuote = document.getElementById("happy-with-quote");
    let governmentThirdParty = document.getElementById("government-thirdparty");
    let transactionMethod = localStorage.getItem("Quote");
    let propertyType = localStorage.getItem("Property Type");
    let propertyLocation = localStorage.getItem("Property Location");
    let propertyDistrict = localStorage.getItem("Property District");

    let propertyPrices = ["1200", "1250", "1400", "1650", "1850", "1300"];
    let propertyFixedPrice = '';
    let shortText = 'Total Fixed Price';

    let string_html = "";


    if (propertyType == "Existing Property" && propertyLocation == "Greater Metropolitan") {
      if(transactionMethod == "buying") {
          propertyFixedPrice = "$1100";
      } else {
          propertyFixedPrice = `$${propertyPrices[0]}`;
      }
    } else if (propertyType == "Existing Property" && propertyLocation == "Rural and Regional") {
      if (propertyDistrict == "Wollongong, City of" || propertyDistrict == "Shellharbour, City of" || propertyDistrict == "Kiama, Municipality of") {
        propertyFixedPrice = `$${propertyPrices[0]}`;
      } else {
        propertyFixedPrice = `$${propertyPrices[1]}`;
      }
    } else if (propertyType == "Off The Plan or Unregistered Land") {
      if ( propertyLocation == "Greater Metropolitan" || propertyLocation == "Rural and Regional") {
        propertyFixedPrice = `$${propertyPrices[2]}`;
        if (transactionMethod == "buying") {
          dynamicNote.innerText = "Please note that any off the plan / unregistered properties, we require a non-refundable deposit of $400.00 for us to review a contract of sale. If you proceed, with the purchase, the $400.00 will be deducted from your final invoice and balance will be due and payable at settlement. ";
        }
      }
    } else if (propertyType == "House and Land Package") {
      if ( propertyLocation == "Greater Metropolitan" || propertyLocation == "Rural and Regional") {
        propertyFixedPrice = `$${propertyPrices[3]}`;
        if (transactionMethod == "buying") {
          dynamicNote.innerText = "Please note that any house and land contracts, we require a non-refundable deposit of $450.00 for us to review a contract of sale. If you proceed, with the purchase, the $450.00 will be deducted from your final invoice and balance will be due and payable at settlement. ";
        }
      }
    } else if (propertyType == "Existing Commercial Properties") {
      if ( propertyLocation == "Greater Metropolitan" || propertyLocation == "Rural and Regional") {
        propertyFixedPrice = `$${propertyPrices[4]}`;
        if (transactionMethod == "buying") {
          dynamicNote.innerText = "Please note that commercial properties, we require a non-refundable deposit of $550.00 for us to review a contract of sale. If you proceed, with the purchase, the $550.00 will be deducted from your final invoice and balance will be due and payable at settlement. ";
        }
      }
    } else if (propertyType == "Company Title") {
      if ( propertyLocation == "Greater Metropolitan" || propertyLocation == "Rural and Regional") {
        propertyFixedPrice = `$${propertyPrices[5]}`;
        if (transactionMethod == "buying") {
          dynamicNote.innerText = "Please note that company title contracts, we require a non-refundable deposit of $250.00 for us to review a contract of sale. If you proceed, with the purchase, the $250.00 will be deducted from your final invoice and balance will be due and payable at settlement. ";
          happyWithQuote.innerText = "Happy with your quote? If you want to go ahead simply hit the ACCEPT THIS QUOTE button above and follow the prompts";
          governmentThirdParty.innerText = "*Government & third party charges for items such as Bank Fees, Stamp Duty, Inspection Reports & PEXA charges are NOT included in this quote and are payable direct to those third parties. Quoted disbursement charges are an estimate only and may vary. Please refer to our cost’s agreement for all terms and conditions. ";
        }
      }
    }
    
    if (transactionMethod == "selling") {
      if (propertyType == "Off The Plan or Unregistered Land" || propertyType == "House and Land Package") {
        propertyFixedPrice = "Please Contact Us";
        shortText = "Sorry we can’t really give an estimate as a quote for this type of work";
        emailQuoteBtn.style.display = "none";
        acceptQuoteBtn.style.display = "none";
      }
    }

    string_html = `
                  <h1 class="text-white text-uppercase" id="transactionMethod">
                      ${transactionMethod}
                  </h1>
                  <div class="alt-font text-white text-large font-weight-500 margin-3-rem-bottom text-uppercase">
                      Quote Reference: <span id="randomNum">${randomNum}</span>
                  </div>
                  <span class="text-white text-large font-weight-bold text-uppercase">
                      Purchase - <span id="propertyType">${propertyType}</span>
                  </span>
                  <p class="text-white text-large" id="propertyLocation">
                      ${propertyLocation}, ${propertyDistrict}
                  </p>
                  <h2 class="alt-font font-weight-500 text-white letter-spacing-minus-2px no-margin-bottom" id="propertyFixedPrice">
                      ${propertyFixedPrice}
                  </h2>
                  <span class="text-uppercase text-white letter-spacing-1px font-weight-500 text-small">
                      ${shortText}
                  </span>`;

    document.querySelector("#qoute_data").innerHTML = string_html;
}

const emailQuote = () => {  
  const qouteDetails = document.querySelector("#qoute-details");
  const transactionMethod = document.querySelector("#transactionMethod").innerText;
  const propertyType = document.querySelector("#propertyType").innerText;
  const propertyLocation = document.querySelector("#propertyLocation").innerText;
  const propertyFixedPrice = document.querySelector("#propertyFixedPrice").innerText;
  let string_html = '';

  string_html = ` 
                  <input style="display: none;" type="text" class="form-control" name="user-ref-id" value="${randomNum}">
                  <input style="display: none;" type="text" class="form-control" name="quote-method" value="email quote">
                  <input style="display: none;" type="text" class="form-control" name="transaction-method" value="${transactionMethod}">
                  <input style="display: none;" type="text" name="propertyType" value="${propertyType}">
                  <input style="display: none;" type="text" name="propertyLocation" value="${propertyLocation}">
                  <input style="display: none;" type="text" name="propertyFixedPrice" value="${propertyFixedPrice}">
                `;
  qouteDetails.innerHTML = string_html;

  const inputs = document.querySelectorAll(".input");
  let userFullName = localStorage.getItem("Full Name");
  let userEmail = localStorage.getItem("Email");
  let userPhone = localStorage.getItem("Phone");
  let userAddress = localStorage.getItem("Address");
  let userDetails = [userFullName, userEmail, userPhone, userAddress];

  i = 0;
  inputs.forEach(input => {
    input.value = userDetails[i];
    i++;
  });
}

const requestCallBack = () => {  
  const qouteDetails = document.querySelector("#qoute-details");
  const transactionMethod = document.querySelector("#transactionMethod").innerText;
  const propertyType = document.querySelector("#propertyType").innerText;
  const propertyLocation = document.querySelector("#propertyLocation").innerText;
  const propertyFixedPrice = document.querySelector("#propertyFixedPrice").innerText;
  let string_html = '';

  string_html = `
                  <input style="display: none;" type="text" class="form-control" name="user-ref-id" value="${randomNum}">
                  <input style="display: none;" type="text" class="form-control" name="quote-method" value="request call back">
                  <input style="display: none;" type="text" class="form-control" name="transaction-method" value="${transactionMethod}">
                  <input style="display: none;" type="text" name="propertyType" value="${propertyType}">
                  <input style="display: none;" type="text" name="propertyLocation" value="${propertyLocation}">
                  <input style="display: none;" type="text" name="propertyFixedPrice" value="${propertyFixedPrice}">
                `;
  qouteDetails.innerHTML = string_html;

  const inputs = document.querySelectorAll(".input");
  let userFullName = localStorage.getItem("Full Name");
  let userEmail = localStorage.getItem("Email");
  let userPhone = localStorage.getItem("Phone");
  let userAddress = localStorage.getItem("Address");
  let userDetails = [userFullName, userEmail, userPhone, userAddress];

  i = 0;
  inputs.forEach(input => {
    input.value = userDetails[i];
    i++;
  });
}

const acceptQuote = () => {  
  const qouteDetails = document.querySelector("#qoute-details");
  const transactionMethod = document.querySelector("#transactionMethod").innerText;
  const propertyType = document.querySelector("#propertyType").innerText;
  const propertyLocation = document.querySelector("#propertyLocation").innerText;
  const propertyFixedPrice = document.querySelector("#propertyFixedPrice").innerText;
  let string_html = '';

  string_html = `
                  <input style="display: none;" type="text" class="form-control" name="user-ref-id" value="${randomNum}">
                  <input style="display: none;" type="text" class="form-control" name="quote-method" value="accept quote">
                  <input style="display: none;" type="text" class="form-control" name="transaction-method" value="${transactionMethod}">
                  <input style="display: none;" type="text" name="propertyType" value="${propertyType}">
                  <input style="display: none;" type="text" name="propertyLocation" value="${propertyLocation}">
                  <input style="display: none;" type="text" name="propertyFixedPrice" value="${propertyFixedPrice}">
                `;
  qouteDetails.innerHTML = string_html;

  const inputs = document.querySelectorAll(".input");
  let userFullName = localStorage.getItem("Full Name");
  let userEmail = localStorage.getItem("Email");
  let userPhone = localStorage.getItem("Phone");
  let userAddress = localStorage.getItem("Address");
  let userDetails = [userFullName, userEmail, userPhone, userAddress];

  i = 0;
  inputs.forEach(input => {
    input.value = userDetails[i];
    i++;
  });
}

