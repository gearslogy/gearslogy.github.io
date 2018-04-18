var elem = document.querySelector('.sidenav');
var sideNavOptions = {edge:"left",draggable:"false"};
var instance = M.Sidenav.init(elem, sideNavOptions);
instance.open();
