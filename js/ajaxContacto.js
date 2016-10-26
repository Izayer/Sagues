$( document ).ready(function() {
    $("#myForm").submit(function(e) {

    var url = "/contacto.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#myForm").serialize(), // serializes the form's elements.
           
           success: function(data)
           {
               //alert(data); // show response from the php script.
               document.getElementById("ok").removeAttribute("hidden");
           },
           error: function(data)
           {
               //alert(data); // show response from the php script.
               document.getElementById("error").removeAttribute("hidden");
           }
           
         });

    e.preventDefault();
    // avoid to execute the actual submit of the form.
});
});