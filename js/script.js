function onLoadFunctOne() {

    // Login Validation
    document.getElementById('submit-login').addEventListener('click', function () {
        const getUserEmail = document.getElementById('user-email');
        const getUserPass = document.getElementById('user-password');
        const getUserEmailValue = getUserEmail.value.toLowerCase();
        const getUserPassValue = getUserPass.value;
        if (getUserEmailValue == 'shahriar.me.work@gmail.com' && getUserPassValue == '01766922253') {
            const confirmMsg = document.getElementById('success-login');
            confirmMsg.innerText = 'Login Success!!';
            confirmMsg.style.color = 'white';
            confirmMsg.style.fontWeight = '900';
            window.location.href = 'banking.html';
        }
        else {
            const confirmMsg = document.getElementById('success-login');
            confirmMsg.innerText = 'Invalid Login!!';
            confirmMsg.style.color = 'crimson';
            confirmMsg.style.fontWeight = '900';
        }
    });
}

function onLoadFunctTwo() {
    // Getting Input Value Function
    function getInputValue(inputId) {
        const getInput = document.getElementById(inputId);
        const getInputTxt = getInput.value;
        const getInputNumber = parseFloat(getInputTxt);
        getInput.value = null;
        return getInputNumber;
    }
    // Getting Output Text Value Function
    function getOutputText(outputText, inputValue) {
        const getOutput = document.getElementById(outputText);
        const getOutputTxt = getOutput.innerText;
        const getOutputNumber = parseFloat(getOutputTxt);
        getOutput.innerText = getOutputNumber + inputValue;
    }
    // Get Current Balance
    function getCurrentBalance() {
        const getExitingBalance = document.getElementById('total-balance');
        const getExistingBalanceTxt = getExitingBalance.innerText;
        const getExistingBalanceNumber = parseFloat(getExistingBalanceTxt);
        return getExistingBalanceNumber;
    }
    // Updating Balance Function
    function updateBalance(newBalance, isAdd) {
        const getExitingBalance = document.getElementById('total-balance');
        const currentBalanceTotal = getCurrentBalance();

        if (isAdd == true) {
            getExitingBalance.innerText = currentBalanceTotal + newBalance;
        }
        else {
            getExitingBalance.innerText = currentBalanceTotal - newBalance;
        }
    }
    // DIPOSITE EVENT HANDLING 
    document.getElementById('diposite-btn').addEventListener('click', function () {
        const dipositeInputValue = getInputValue('diposite-amount');
        if (dipositeInputValue > 0 && typeof (dipositeInputValue) == 'number') {
            getOutputText('total-diposite', dipositeInputValue);
            updateBalance(dipositeInputValue, true);
            const confirmMSG = document.getElementById('diposite-confirm');
            confirmMSG.innerText = 'You have Successfully Diposited $' + dipositeInputValue;
        } else {
            const errorMSG = document.getElementById('diposite-confirm');
            errorMSG.innerText = 'Please Input a Numeric and Positive Value';
        }
    });

    // WITHDRAW EVENT HANDLING
    document.getElementById('withdraw-btn').addEventListener('click', function () {
        const withdrawInputValue = getInputValue('withdraw-amount');
        const currentBalForWithdrw = getCurrentBalance();
        if (currentBalForWithdrw >= withdrawInputValue) {
            if (withdrawInputValue > 0) {
                getOutputText('total-withdrawn', withdrawInputValue);
                updateBalance(withdrawInputValue, false);
                const confirmMSG = document.getElementById('withdraw-confirm');
                confirmMSG.innerText = 'You have Successfully Withdrawn $' + withdrawInputValue;
            } else {
                const errorMSG = document.getElementById('withdraw-confirm');
                errorMSG.innerText = 'Please Input a Numeric and Positive Value';
            }
        } else {
            const newErrorMSG = document.getElementById('withdraw-confirm');
            newErrorMSG.innerText = 'Insufficient Balance or Invalid Input';
        }
    });
    // Logout Button Event
    document.getElementById('logout-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}

