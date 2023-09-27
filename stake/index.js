const walletID = document.getElementsByClassName("text-connect");

var refCode =""

function connect () {
    if (typeof window.ethereum !== "undefined") {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const account = accounts[0];
          let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
          localStorage.setItem("isFirstConnect",true)
          document.getElementsByClassName("table-main")[0].style.display="block"
          document.getElementsByClassName("table-main")[0].style.display="block"
          walletID[0].innerText = address;
        })
        .catch((error) => {
          console.log(error, error.code);
        });
    } else {
        window.open("https://metamask.io/download/", "_blank");
    }
}

function getRef() {
  refCode =`refcanxi.me/${generateCode().toLowerCase()}`
    document.getElementById("ref").innerText= refCode + " (0 referral)"
    document.getElementById("btn-get-ref").style.display= `none`
    document.getElementsByClassName("ref-cop")[0].style.marginRight="0px"
}

function copyRef() {
  navigator.clipboard.writeText(refCode)
}

function generateCode(length=7) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n)).toUpperCase();
    }
    return retVal;
  }