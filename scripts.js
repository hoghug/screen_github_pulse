// https://api.github.com/orgs/scribbletone/repos?access_token=9f1c1d726316604f27152d19665b955bd26dcb26
// https://api.github.com/repos/scribbletone/dwp/commits?access_token=9f1c1d726316604f27152d19665b955bd26dcb26&sha=journal
// 9f1c1d726316604f27152d19665b955bd26dcb26



(function($){

  var ghPulse = {

    init: function(){
      ghPulse.fetchJSON();
    },

    repoName: 'dwp',
    branchName: 'journal',

    lastCommitDateTime: '',

    fetchJSON: function(){

      var githubAPI = 'https://api.github.com/repos/scribbletone/dwp/commits?access_token=715b729f5dba8ed8c37d6b551509b09d0789704e&sha=journal';
      $.getJSON(githubAPI)
        .done(function(data) {

          ghPulse.lastCommitTimestamp = data[0]['commit']['author']['date'];

          // debugger;
          // $.each( data.items, function( i, item ) {
          //   $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
          //   if ( i === 3 ) {
          //     return false;
          //   }
          // });
        });

    }

  }


  window.ghPulse = ghPulse;

})(jQuery);

$(document).ready(ghPulse.init);