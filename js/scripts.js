// Location Selection -display in nav bar with phone number
$(function(){
        $("#changeLocation").hide();

        $("#bearDE").click(function(){
            $("#locationDisplay").text("Bear,DE");
            $("#locationPhone").html('<br/><a href="tel:+3024569999"><i class="fa fa-phone"</i> 302-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#newarkDE").click(function(){
            $("#locationDisplay").text("Newark,DE");
            $("#locationPhone").html('<br/><a href="tel:+3021239999"><i class="fa fa-phone"</i> 302-123-9999</a>');
            $("#changeLocation").show();
        });
        $("#wilmingtonDE").click(function(){
            $("#locationDisplay").text("Wilmington,DE");
            $("#locationPhone").html('<br/><a href="tel:+3027879999"><i class="fa fa-phone"</i> 302-787-9999</a>');
            $("#changeLocation").show();
        });
        $("#jerseycityNJ").click(function(){
            $("#locationDisplay").text("Jersey City,NJ");
            $("#locationPhone").html('<br/><a href="tel:+6094569999"><i class="fa fa-phone"</i> 609-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#trentonNJ").click(function(){
            $("#locationDisplay").text("Trenton,NJ");
            $("#locationPhone").html('<br/><a href="tel:+6091239999"><i class="fa fa-phone"</i> 609-123-9999</a>');
            $("#changeLocation").show();
        });
        $("#buffaloNY").click(function(){
            $("#locationDisplay").text("Buffalo,NY");
            $("#locationPhone").html('<br/><a href="tel:+8454569999"><i class="fa fa-phone"</i> 845-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#newyorkcityNY").click(function(){
            $("#locationDisplay").text("New York City,NY");
            $("#locationPhone").html('<br/><a href="tel:+2124569999"><i class="fa fa-phone"</i> 212-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#baltimoreMD").click(function(){
            $("#locationDisplay").text("Baltimore,MD");
            $("#locationPhone").html('<br/><a href="tel:+4104569999"><i class="fa fa-phone"</i> 410-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#downingtonPA").click(function(){
            $("#locationDisplay").text("Downington,PA");
            $("#locationPhone").html('<br/><a href="tel:+6104569999"><i class="fa fa-phone"</i> 610-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#extonPA").click(function(){
            $("#locationDisplay").text("Exton,PA");
            $("#locationPhone").html('<br/><a href="tel:+2674569999"><i class="fa fa-phone"</i> 267-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#kingofprussiaPA").click(function(){
            $("#locationDisplay").text("King Of Prussia,PA");
            $("#locationPhone").html('<br/><a href="tel:+4124569999"><i class="fa fa-phone"</i> 412-456-9999</a>');
            $("#changeLocation").show();
        });
        $("#newhopePA").click(function(){
            $("#locationDisplay").text("New Hope,PA");
            $("#locationPhone").html('<br/><a href="tel:+4125559999"><i class="fa fa-phone"</i> 412-555-9999</a>');
            $("#changeLocation").show();
        });
        $("#philadelphiaPA").click(function(){
            $("#locationDisplay").text("Philadelphia,PA");
            $("#locationPhone").html('<br/><a href="tel:+2673339999"><i class="fa fa-phone"</i> 267-333-9999</a>');
            $("#changeLocation").show();
        });

        $("#login").show();
        $("#register").hide();
        $('#loginFooter').show();
        $('#registerFooter').hide();
        $("#loginButton").addClass('borderClass');

        $('#loginButton').click(function(){
            $("#register").hide();
            $('#registerFooter').hide();
            $("#registerButton").removeClass('borderClass');
            $("#loginButton").addClass('borderClass');
            $("#login").show();
            $('#loginFooter').show();
        });
        $('#registerButton').click(function(){
            $("#login").hide();
            $('#loginFooter').hide();
            $("#loginButton").removeClass('borderClass');
            $("#registerButton").addClass('borderClass');
            $("#register").show();
            $('#registerFooter').show();
        });

        
    });