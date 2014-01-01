$(document).ready(function () {
    var ls = new Usi.LocalStorage();
    
    ls.LoadSettings();
    $('#SubmitButton').click(function () {
        if (ls.HasLocalStorage) ls.StoreSettings();
        else alert('No local storage support');
    });
    $('#ClearButton').click(function () {
        localStorage.clear();
        ls.LoadSettings();
    });
});

var Usi = Usi || {};

    Usi.LocalStorage = function () {
   
    };

    Usi.LocalStorage.prototype = function() {

        var loadSettings = function() {
            var name = localStorage.getItem('name');
            var state = localStorage.getItem('state');
            $('#NameTextBox').val(name);
            $('#StatesSelect').val(state);
        },
            storeSettings = function() {
                try {
                    localStorage.setItem('name', $('#NameTextBox').val());
                    localStorage.setItem('state', $('#StatesSelect').val());
                    $('#OutputSpan').html('Settings Saved!');
                } catch(e) {
                    if (e == QUOTA_EXCEEDED_ERR) {
                        alert('Storage quota exceeded');
                    }
                }
            },
            hasLocalStorage = function() {
                return ('localStorage' in window && window['localStorage'] != null);
            };


        //public members
        return {
            LoadSettings: loadSettings,
            StoreSettings: storeSettings,
            HasLocalStorage: hasLocalStorage
        };
    }();

 



