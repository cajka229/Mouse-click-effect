$("document").ready(function(){
    $(document).on("click", function(e) {
    for (let i = 0; i < 5; i++) { //creates 5 elements
    let $p = $("<img class='particle' src='red dot.png'>");
    
    let size = 10 + Math.random() * 10; //sets random size and random angle and direction
    let angle = Math.random() * 2 * Math.PI;
    let distance = 60 + Math.random() * 40;
    let dx = Math.cos(angle) * distance + "px";
    let dy = Math.sin(angle) * distance + "px";
    
    $p.css({ //gives 'random' properties to img elements
      left: e.pageX + "px",
      top: e.pageY + "px",
      width: size + "px",
      height: size + "px",
      "--dx": dx,
      "--dy": dy,
    });
    
    $("body").append($p); //after setting everythig up, creates up to 5 particles on the page and gives them css class "fly" to make sure that particles actually move
    $p.addClass("fly");
    
    $p.on("animationend", function() { //after animation is done, deletes every particle from the page, to make sure that page doesn't crash
      $p.remove();
    });
  }
});
});