
function setear(item){
   
    var opt = $(item).html();

    console.log(opt);
    //PAQUETES :
    //PAQUETE A -> 2GB + 700Min + 7Dias
    // PAQUETE B -> 5GB + 200Min + 7Dias

       if (opt == 'Comprar'){
        // 
         $("#compra-exitosa").show();
         $("#idsell").hide();
         $("#btnComprar").hide();

       }

       if (opt == '0GB'){
        //Activar botones por defecto
        $("#gboption0").addClass('active');
        $("#minoption0").addClass('active');
        $("#vioption1").addClass('active');
        //desactivar botones GB -MIn -VIg
        $("#gboption1").removeClass('active');
        $("#gboption2").removeClass('active');
        $("#gboption3").removeClass('active');
   
        $("#minoption1").removeClass('active');
        $("#minoption2").removeClass('active');
     
        $("#vioption2").removeClass('active');
        $("#vioption3").removeClass('active'); 

        //Esconder div redes sociales
        $("#rrss").hide();

        //Modificar cuadro resumen
        $("#demo-gb").html("0 GB");
        $("#demo-min").html("0 Min");
        $("#demo-vig").html("0 Días");
        $("#demo-total").html("$0");
        $("#res-gb").show();

        //Desactivar boton comprar
        $("#btnComprar").attr('disabled',true);
        $("#btnComprar").removeClass('btn-danger',d);
    
       }

       if (opt == '0Min'){
           //Activar botones por defecto
        $("#gboption0").addClass('active');
        $("#minoption0").addClass('active');
        $("#vioption1").addClass('active');
        //desactivar botones GB -MIn -VIg
        $("#gboption1").removeClass('active');
        $("#gboption2").removeClass('active');
        $("#gboption3").removeClass('active');
   
        $("#minoption1").removeClass('active');
        $("#minoption2").removeClass('active');
        $("#vioption2").removeClass('active');
        $("#vioption3").removeClass('active'); 

        //Esconder div redes sociales
        $("#rrss").hide();

        //Modificar cuadro resumen
        $("#demo-gb").html("0 GB");
        $("#demo-min").html("0 Min");
        $("#demo-vig").html("0 Días");
        $("#demo-total").html("$0");
        $("#res-gb").show();

        //Desactivar boton comprar
        $("#btnComprar").attr('disabled',true);
        $("#btnComprar").removeClass('btn-danger',d);
    
       }



    if (opt == '2GB'){      

        //Activar iconos redes sociales
        $("#icon-fb").attr("src","assets/img/ico-facebook.svg");
        $("#icon-insta").attr("src","assets/img/ico-instagram-cir.svg");
        $("#icon-snap").attr("src","assets/img/ico-snapchat-cir.svg");
        $("#icon-what").attr("src","assets/img/ico-whatsapp-cir.svg");
        $("#icon-msn").attr("src","assets/img/ico-msn.svg");
        $("#icon-twi").attr("src","assets/img/ico-twitter.svg");
        $("#icon-claro").attr("src","assets/img/ico-claro-musica.svg");
        $("#icon-waze").attr("src","assets/img/waze-gr.svg");
  

        //Activar botones del paquete
        $("#gboption1").addClass('active');
        $("#minoption2").addClass('active');
        $("#vioption1").addClass('active');

        //Desactivar el resto de botones       
        $("#gboption2").removeClass('active');
        $("#gboption3").removeClass('active');
        $("#minoption1").removeClass('active');
        $("#vioption2").removeClass('active');
        $("#vioption3").removeClass('active');
        $("#gboption0").removeClass('active');
        $("#minoption0").removeClass('active');

        //Pasar los valores a cuadro resumen
        $("#demo-gb").html("2 GB");
        $("#demo-min").html("300 Min");
        $("#demo-vig").html("7 Días");
        $("#demo-total").html("$5.990");
        $("#btnComprar").attr('disabled',false);
        $("#btnComprar").addClass('btn-danger',true);
        $("#res-gb").show();

        //Cuadro compra exitosa
        $("#modal-dias").html("7 Dias");
        $("#modal-precio").html("$5.990");
    
        //Activar div redes sociales
        $("#rrss").show();

    }

    if (opt == '5GB'){
        //Activar botones del paquete
        $("#gboption2").addClass('active');
        $("#minoption2").addClass('active');
        $("#vioption2").addClass('active');  

        //Activar iconos redes sociales - paquete arriba de 8000
        $("#icon-fb").attr("src","assets/img/ico-facebook.svg");
        $("#icon-insta").attr("src","assets/img/ico-instagram-cir.svg");
        $("#icon-snap").attr("src","assets/img/ico-snapchat-cir.svg");
        $("#icon-what").attr("src","assets/img/ico-whatsapp-cir.svg");
        $("#icon-msn").attr("src","assets/img/ico-msn.svg");
        $("#icon-twi").attr("src","assets/img/ico-twitter.svg");
        $("#icon-claro").attr("src","assets/img/ico-claro-musica.svg");
        $("#icon-waze").attr("src","assets/img/ico-waze-cir.svg");
        $("#icon-waze").removeClass('opacity');

        //Desactivar el resto de botones
        $("#gboption1").removeClass('active');
        $("#gboption3").removeClass('active');
        $("#minoption1").removeClass('active');
        $("#vioption3").removeClass('active');
        $("#vioption1").removeClass('active');
        $("#gboption0").removeClass('active');
        $("#minoption0").removeClass('active');

        //Pasar los valores al resumen
        $("#demo-gb").html("5 GB");
        $("#demo-min").html("300 Min");
        $("#demo-vig").html("15 Días");
        $("#demo-total").html("$10.990");
        $("#res-gb").show();

        //Activar boton comprar
        $("#btnComprar").attr('disabled',false);
        $("#btnComprar").addClass('btn-danger',true);

        //Cuadro compra exitosa
        $("#modal-dias").html("15 Dias");
        $("#modal-precio").html("$10.990");
         
        $("#rrss").show();

    }

       if (opt == '7GB'){
        //Activar los campos del paquete
        $("#gboption3").addClass('active');
        $("#minoption2").addClass('active');
        $("#vioption3").addClass('active');

        //Activar iconos redes sociales - paquete arriba de 8000
        $("#icon-fb").attr("src","assets/img/ico-facebook.svg");
        $("#icon-insta").attr("src","assets/img/ico-instagram-cir.svg");
        $("#icon-snap").attr("src","assets/img/ico-snapchat-cir.svg");
        $("#icon-what").attr("src","assets/img/ico-whatsapp-cir.svg");
        $("#icon-msn").attr("src","assets/img/ico-msn.svg");
        $("#icon-twi").attr("src","assets/img/ico-twitter.svg");
        $("#icon-claro").attr("src","assets/img/ico-claro-musica.svg");
        $("#icon-waze").attr("src","assets/img/ico-waze-cir.svg");
        
        //Desactivar el resto de los campos  
        $("#gboption1").removeClass('active');
        $("#gboption2").removeClass('active');
        $("#minoption1").removeClass('active');
        $("#vioption2").removeClass('active');
        $("#vioption1").removeClass('active');
        $("#gboption0").removeClass('active');
        $("#minoption0").removeClass('active');

        //Pasar los valores al detalle
        $("#demo-gb").html("7 GB");
        $("#demo-min").html("300 Min");
        $("#demo-vig").html("30 Días");
        $("#demo-total").html("$15.990");
        $("#btnComprar").attr('disabled',false);
        $("#btnComprar").addClass('btn-danger',true);

        //modal
        $("#modal-dias").html("30 Dias");
        $("#modal-precio").html("$15.990");


        $("#res-gb").show();
        $("#rrss").show();


    }


    if (opt == '100Min'){
        //Activar los campos del paquete
        $("#gboption0").addClass('active');
        $("#minoption1").addClass('active');
        $("#vioption1").addClass('active');
        
        //Desactivar el resto de botones        
        $("#gboption1").removeClass('active');
        $("#gboption2").removeClass('active');
        $("#gboption3").removeClass('active');
        $("#minoption2").removeClass('active');
        $("#vioption2").removeClass('active');
        $("#vioption3").removeClass('active');
        $("#minoption0").removeClass('active');

        //Pasar los valores al detalle    
        $("#demo-min").html("0 GB");
        $("#demo-min").html("100 Min");
        $("#demo-vig").html("7 Días");
        $("#demo-total").html("$4.990");
        $("#btnComprar").attr('disabled',false);
  


        //Cuadro compra exitosa
        $("#modal-dias").html("7 Dias");
        $("#modal-precio").html("$4.990");

        //Esconder div redes sociales
        $("#rrss").hide(); 
    }

    if (opt == '300Min'){

        //Activar los campos del paquete
        $("#gboption0").addClass('active');
        $("#minoption2").addClass('active');
        $("#vioption2").addClass('active');
        
        //Desactivar el resto de botones        
        $("#gboption1").removeClass('active');
        $("#gboption2").removeClass('active');
        $("#gboption3").removeClass('active');
        $("#minoption1").removeClass('active');
        $("#vioption1").removeClass('active');
        $("#vioption3").removeClass('active');
        $("#minoption0").removeClass('active');

        //Pasar los valores al cuadro resumen 
        $("#demo-min").html("0 GB");   
        $("#demo-min").html("300 Min");
        $("#demo-vig").html("15 Días");
        $("#demo-total").html("$6.990");
        $("#btnComprar").attr('disabled',false);

        //Cuadro compra exitosa
        $("#modal-dias").html("15 Dias");
        $("#modal-precio").html("$6.990");

        
        $("#rrss").hide();

    }

}


