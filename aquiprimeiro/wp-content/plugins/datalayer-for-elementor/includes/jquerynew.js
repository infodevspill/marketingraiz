jQuery(document).ready(function($) {
  $("form").on('submit_success', function(event, response){
      $(window).on('beforeunload', function(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event':'formSubmitsadfasdfDLFSE',
          'form':response.data.form,
          'fields':response.data.fields,
          'meta':response.data.meta
        });
        return ('sadfasdfasd');
      });
  });
});

jQuery(document).on('elementor/popup/show',()=>{
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event':'testandoSaporra',
    'teste': 'sim',
  });
//  jQuery("form").on('submit_success', function(event, response){
//    window.dataLayer = window.dataLayer || [];
//    window.dataLayer.push({
//      'event':'formSubmitsadfasdfDLFSE',
//      'form':response.data.form,
//      'fields':response.data.fields,
//      'meta':response.data.meta
//    });
//  });
});
//$(window).off('beforeunload');
