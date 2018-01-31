var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
};
// a methog that takes another method to run is a 'higher order function'
// a method used to run another function is called a 'callback'
function loadPage(q) {
    console.log('Header');
    q();
    console.log('Sidebar');
    console.log('Footer');
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map