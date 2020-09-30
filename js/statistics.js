$(document).ready(function(){
    $.get("https://4qstatisticsapi.azurewebsites.net/api/statistics?site=eduardojaime.github.io").done(function(data){ console.log(data); });
});