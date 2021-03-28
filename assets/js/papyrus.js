(function (window, document){
    function get_string_date(){
        let today = new Date();
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return today.toLocaleDateString(undefined, options);
    }

    console.log('papyrus loaded');
    let date_string = get_string_date();
    let date_elements = document.querySelectorAll('.today-date');
    console.log(date_elements.length);
    document.querySelectorAll('.today-date').forEach(function (e)  {
        e.innerHTML = date_string;
    })
})(window, document);