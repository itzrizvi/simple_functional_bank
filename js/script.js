// Login Page Scripts
function onLoadFunct() {
    document.getElementById('submit-login').addEventListener('click', function () {
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value.toLowerCase();
        const passwordField = document.getElementById('user-password');
        const userPassword = passwordField.value;

        // Login Validation
        if (userEmail == 'shahriar.me.work@gmail.com' && userPassword == '01766922253') {
            const successMsg = document.getElementById('success-login');
            successMsg.innerText = 'Login Success';
            successMsg.style.color = 'white';
            successMsg.style.fontWeight = '700';
            window.location.href = 'banking.html';
        }
        else {
            const failedMsg = document.getElementById('success-login');
            failedMsg.innerText = 'Login Failed';
            failedMsg.style.color = 'red';
            failedMsg.style.fontWeight = '700';
        }
    });
}



// Banking Page Scripts

function onLoadFunctTwo() {

    // Diposite Event
    document.getElementById('diposite-btn').addEventListener('click', function () {
        // Getting The Deposite Amount 
        const amountField = document.getElementById('diposite-amount');
        const userDiposite = amountField.value;
        const dipositeAmountNumber = parseFloat(userDiposite);

        // Calculating Diposite
        const totalDiposite = document.getElementById('total-diposite');
        const previusDeposite = totalDiposite.innerText;
        const previousDepositeNumber = parseFloat(previusDeposite);
        const newDepositeTotal = dipositeAmountNumber + previousDepositeNumber;
        totalDiposite.innerText = newDepositeTotal;

        // Updating Balance
        const UserBalance = document.getElementById('total-balance');
        const existingbalanceTotal = UserBalance.innerText;
        const existingBalanceNumber = parseFloat(existingbalanceTotal);
        const newBalance = dipositeAmountNumber;
        const totalNewBalance = existingBalanceNumber + newBalance;
        UserBalance.innerText = totalNewBalance;

        const confirmationTxt = document.getElementById('diposite-confirm');
        confirmationTxt.innerText = 'You have successfully diposited $' + newDepositeTotal;


        // Clearing Input
        amountField.value = null;
    });

    // Withdraw Event
    document.getElementById('withdraw-btn').addEventListener('click', function () {

        // Getting Withdraw Amount
        const existingwithdrawnAmount = document.getElementById('total-withdrawn');
        const existingwithdrawnAmountText = existingwithdrawnAmount.innerText;
        const existingWithdrawnNumber = parseFloat(existingwithdrawnAmountText);

        // Calculating total Withdraw
        const withdrawingPresent = document.getElementById('withdraw-amount');
        const withdrawAmountValue = withdrawingPresent.value;
        const withdrawAmountValueNumber = parseFloat(withdrawAmountValue);
        const totalWithdrawnTill = existingWithdrawnNumber + withdrawAmountValueNumber;
        existingwithdrawnAmount.innerText = totalWithdrawnTill;

        // Updating Balance after withdraw
        const UserBalance = document.getElementById('total-balance');
        const existingbalanceTotal = UserBalance.innerText;
        const existingBalanceNumber = parseFloat(existingbalanceTotal);
        const totalNewBalanceAfWith = existingBalanceNumber - withdrawAmountValueNumber;
        UserBalance.innerText = totalNewBalanceAfWith;

        const confirmationTxtTwo = document.getElementById('withdraw-confirm');
        confirmationTxtTwo.innerText = 'You have successfully withdrawn $' + totalWithdrawnTill;

        // Clearing Input 
        withdrawingPresent.value = null;

    });

    document.getElementById('logout-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });




}
