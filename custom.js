
/* Custom-Color-Swatch */
$(document).ready(function(){
  $(".on_color_click").click(function(){
 var selected_value = $(this).attr("data-value");
    
  $(".chnagevalue_Color option").each(function()
{
  var option_value = $(this).attr("data-value");
   //console.log('option_value', option_value);
    //console.log('selected_value', selected_value);
  if(option_value.includes(selected_value)){
$(this).attr("selected","selected");
//console.log('yes');
    
}else{
//console.log('no');
$(this).removeAttr("selected");
} 
});

     
  });
 
/* Size_ */   
  $('.chnagevalue_Size').change(function(){
   var selected_val = $(this).val();

          $(".chnagevalue_Size option").each(function()
    {
      var all_value = $(this).val();
      console.log('all_value',all_value);
        console.log('selected_val',selected_val);

        if(all_value.includes(selected_val)){
console.log('yes');
            $(this).attr("selected","selected");

            
        }else{

            console.log('no');
             $(this).removeAttr("selected");
        }
    });
})
/*Size_ */   
  
/* Size */
  $('.chnagevalue_Size').change(function(){
   var selected_val = $(this).val();

    $(".custom-swatch-Size input").each(function()
    {
      var all_input_value = $(this).val();
     

        if(all_input_value.includes(selected_val)){
console.log('yes');

        //      console.log('all_input_value',all_input_value);
        // console.log('selected_val',selected_val);
           $(this).attr("checked", "checked");

            
        }else{

            console.log('no');
            $(this).removeAttr("checked", "checked");
            
        }
    });
});
/* Size */  
});


/*Custom-Color-Swatch */ 
